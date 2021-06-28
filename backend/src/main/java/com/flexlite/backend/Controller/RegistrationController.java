package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Registration;
import com.flexlite.backend.Repository.RegistrationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
@CrossOrigin
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    @GetMapping("/")
    public List<Registration> GetUsers() {
        return registrationRepository.findAll();
    }
    @GetMapping("/{id}")
    public Registration GetUser(@PathVariable Integer id) {
        return registrationRepository.findById(id).orElse(null);
    }
    @GetMapping("/update/{regId}")
    public int UpdateStatus(@PathVariable("regId") Integer regId) {
        return registrationRepository.Update_Status(regId);
    }
    @PostMapping("/")
    public Registration PostUser(@RequestBody Registration user) {
        return registrationRepository.save(user);
    }
    @PutMapping("/")
    public Registration PutUser(@RequestBody Registration user) {
       Registration oldUser = registrationRepository.findById(user.getId()).orElse(null);
       oldUser.setGrade(user.getGrade());
       oldUser.setId(user.getId());
       oldUser.setSectionID(user.getSectionID());
       oldUser.setStatus(user.getStatus());
       oldUser.setStudentID(user.getStudentID());
       return registrationRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        registrationRepository.deleteById(id);
        return id;
    }

}
