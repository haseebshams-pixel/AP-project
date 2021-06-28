package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Attendance;
import com.flexlite.backend.Repository.AttendanceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin
public class AttendanceController {
    @Autowired
    private AttendanceRepository AttendanceRepository;

    @GetMapping("/")
    public List<Attendance> GetUsers() {
        return AttendanceRepository.findAll();
    }
    @GetMapping("/{id}")
    public Attendance GetUser(@PathVariable Integer id) {
        return AttendanceRepository.findById(id).orElse(null);
    }
    @GetMapping("/getAttendance/{studId}/{courseId}")
    public List<Attendance> GetAssessments(@PathVariable("studId") Integer studId,@PathVariable("courseId") Integer courseId) {
        int x = AttendanceRepository.Get_SectionId(studId, courseId);
        return AttendanceRepository.Get_AttendanceList(x,studId);
    }
    @PostMapping("/")
    public Attendance PostUser(@RequestBody Attendance user) {
        return AttendanceRepository.save(user);
    }
    @PutMapping("/")
    public Attendance PutUser(@RequestBody Attendance user) {
        Attendance oldUser = AttendanceRepository.findById(user.getId()).orElse(null);
        oldUser.setId(user.getId());
        oldUser.setDate(user.getDate());
        oldUser.setLecNo(user.getLecNo());
        oldUser.setRegistrationID(user.getRegistrationID());
        oldUser.setStatus(user.getStatus());
        return AttendanceRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        AttendanceRepository.deleteById(id);
        return id;
    }
}