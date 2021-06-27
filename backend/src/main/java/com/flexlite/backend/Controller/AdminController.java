package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Admin;
import com.flexlite.backend.Repository.AdminRespository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminRespository adminRepository;

    @GetMapping("/")
    public List<Admin> GetUsers() {
        return adminRepository.findAll();
    }
    @GetMapping("/{id}")
    public Admin GetUser(@PathVariable Integer id) {
        return adminRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Admin PostUser(@RequestBody Admin user) {
        return adminRepository.save(user);
    }
    @PutMapping("/")
    public Admin PutUser(@RequestBody Admin user) {
       Admin oldUser = adminRepository.findById(user.getUserId()).orElse(null);
       oldUser.setDateJoined(user.getDateJoined());
       oldUser.setSalary(user.getSalary());
       oldUser.setUserId(user.getUserId());
       return adminRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        adminRepository.deleteById(id);
        return id;
    }

}
