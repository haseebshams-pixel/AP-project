package com.flexlite.backend.Controller;
import java.util.List;

import com.flexlite.backend.Model.AddAttendace;
import com.flexlite.backend.Repository.AddAttendaceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/addAttendance")
@CrossOrigin
public class AddAttendanceController {
    @Autowired
    private AddAttendaceRepository attendace;
    @GetMapping("/getRegisteredStudents/{secName}/{teacherId}")
    public List<AddAttendace> GetRegisteredStudents(@PathVariable("secName") String secName,@PathVariable("teacherId") Integer teacherId) {
        return attendace.Get_StudentList(secName, teacherId);
    }
}
