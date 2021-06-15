package com.flexlite.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public List<User> GetUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/{id}")
    public User GetUser(@PathVariable Integer id) {
        return userRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public User PostUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    @PutMapping("/")
    public User PutUser(@RequestBody User user) {
        User oldUser = userRepository.findById(user.getId()).orElse(null);
        oldUser.setName(user.getName());
        oldUser.setEmail(user.getEmail());
        oldUser.setPassword(user.getPassword());
        oldUser.setCNIC(user.getCNIC());
        oldUser.setDOB(user.getDOB());
        oldUser.setDepartmentID(user.getDepartmentID());
        oldUser.setGender(user.getGender());
        oldUser.setId(user.getId());
        oldUser.setMobileno(user.getMobileno());
        oldUser.setNationality(user.getNationality());
        oldUser.setUserType(user.getUserType());
        oldUser.setUsername(user.getUsername());
        return userRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
        return id;
    }
}