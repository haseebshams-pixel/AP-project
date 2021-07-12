package com.flexlite.backend.Controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.flexlite.backend.Model.User;
import com.flexlite.backend.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = { "http://localhost:3000" }, allowedHeaders = "*", allowCredentials = "true")
@SessionAttributes("id")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public List<User> GetUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/students")
    public List<User> GetStudents() {
        return userRepository.Get_Student_info();
    }

    @GetMapping("/teachers")
    public List<User> GetTeachers() {
        return userRepository.Get_Teacher_Info();
    }

    @GetMapping("/{id}")
    public User GetUser(@PathVariable Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @GetMapping("/{username}/{password}/{userType}")
    public int GetUser(@PathVariable("username") String username, @PathVariable("password") String password,
            @PathVariable("userType") String userType,HttpServletResponse response) {
        int id = userRepository.User_Login(username, password, userType);
        Integer stId = id;
        Cookie cookie1 = new Cookie("userId", stId.toString());
        cookie1.setPath("/");
        cookie1.setMaxAge(86400);
        Cookie cookie2 = new Cookie("loggedin", "true");
        cookie2.setPath("/");
        cookie2.setMaxAge(86400);
        Cookie cookie3 = new Cookie("type", userType);
        cookie3.setPath("/");
        cookie3.setMaxAge(86400);
        response.addCookie(cookie1);
        response.addCookie(cookie2);
        response.addCookie(cookie3);
        return id;
    }

    @GetMapping("/logout")
    public int logout(HttpServletResponse response) {
        Cookie deleteServletCookie1 = new Cookie("userId", null);
        deleteServletCookie1.setMaxAge(0);
        deleteServletCookie1.setPath("/");
        Cookie deleteServletCookie2 = new Cookie("loggedin", null);
        deleteServletCookie2.setMaxAge(0);
        deleteServletCookie2.setPath("/");
        Cookie deleteServletCookie3 = new Cookie("type", null);
        deleteServletCookie3.setMaxAge(0);
        deleteServletCookie3.setPath("/");
        response.addCookie(deleteServletCookie1);
        response.addCookie(deleteServletCookie2);
        response.addCookie(deleteServletCookie3);
        return 1;
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