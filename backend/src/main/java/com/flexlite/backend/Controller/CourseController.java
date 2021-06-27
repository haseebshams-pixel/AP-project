package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Course;
import com.flexlite.backend.Repository.CourseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/")
    public List<Course> GetUsers() {
        return courseRepository.findAll();
    }
    @GetMapping("/{id}")
    public Course GetUser(@PathVariable Integer id) {
        return courseRepository.findById(id).orElse(null);
    }
    @GetMapping("/getCourse/{studId}")
    public List<Course> GetCourses(@PathVariable("studId") Integer studId) {
        return courseRepository.Get_CourseList(4);
    }
    @PostMapping("/")
    public Course PostUser(@RequestBody Course user) {
        return courseRepository.save(user);
    }
    @PutMapping("/")
    public Course PutUser(@RequestBody Course user) {
        Course oldUser = courseRepository.findById(user.getId()).orElse(null);
        oldUser.setId(user.getId());
        oldUser.setCourseCode(user.getCourseCode());
        oldUser.setCreditHours(user.getCreditHours());
        oldUser.setDepID(user.getDepID());
        oldUser.setName(user.getName());
        oldUser.setSemesterNo(user.getSemesterNo());
        oldUser.setType(user.getType());
        return courseRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        courseRepository.deleteById(id);
        return id;
    }
}