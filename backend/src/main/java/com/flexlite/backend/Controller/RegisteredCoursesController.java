package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.RegisteredCourses;
import com.flexlite.backend.Repository.RegisteredCoursesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registeredCourses")
@CrossOrigin
public class RegisteredCoursesController {
    @Autowired
    private RegisteredCoursesRepository register;
    @GetMapping("/getRegisteredCourse/{studId}")
    public List<RegisteredCourses> GetRegisteredCourses(@PathVariable("studId") Integer studId) {
        return register.Get_R_Course_List(studId);
    }
}
