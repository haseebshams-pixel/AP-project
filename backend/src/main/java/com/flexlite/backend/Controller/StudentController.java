package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Student;
import com.flexlite.backend.Repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/")
    public List<Student> GetUsers() {
        return studentRepository.findAll();
    }
    @GetMapping("/{id}")
    public Student GetUser(@PathVariable Integer id) {
        return studentRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Student PostUser(@RequestBody Student user) {
        return studentRepository.save(user);
    }
    @PutMapping("/")
    public Student PutUser(@RequestBody Student user) {
       Student oldUser = studentRepository.findById(user.getUserId()).orElse(null);
       oldUser.setBatch(user.getBatch());
       oldUser.setProgram(user.getProgram());
       oldUser.setRollNo(user.getRollNo());
       oldUser.setSemesterNo(user.getSemesterNo());
       oldUser.setUserId(user.getUserId());
       return studentRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        studentRepository.deleteById(id);
        return id;
    }

}
