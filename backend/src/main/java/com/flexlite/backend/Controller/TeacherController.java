package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Teacher;
import com.flexlite.backend.Repository.TeacherRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teacher")
@CrossOrigin(origins = { "http://localhost:3000" }, allowedHeaders = "*", allowCredentials = "true")
public class TeacherController {
    @Autowired
    private TeacherRepository teacherRepository;

    @GetMapping("/")
    public List<Teacher> GetUsers() {
        return teacherRepository.findAll();
    }
    @GetMapping("/{id}")
    public Teacher GetUser(@PathVariable Integer id) {
        return teacherRepository.findById(id).orElse(null);
    }
    @GetMapping("/course/{teachid}")
    public String GetCourse(@PathVariable("teachid") Integer teachid) {
        return teacherRepository.Get_Teacher_Course(teachid);
    }
    @PostMapping("/")
    public Teacher PostUser(@RequestBody Teacher user) {
        return teacherRepository.save(user);
    }
    @PutMapping("/")
    public Teacher PutUser(@RequestBody Teacher user) {
       Teacher oldUser = teacherRepository.findById(user.getUserId()).orElse(null);
       oldUser.setDateJoined(user.getDateJoined());
       oldUser.setSalary(user.getSalary());
       oldUser.setUserId(user.getUserId());
       return teacherRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        teacherRepository.deleteById(id);
        return id;
    }

}
