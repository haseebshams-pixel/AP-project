package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Section;
import com.flexlite.backend.Repository.SectionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/section")
@CrossOrigin
public class SectionController {
    @Autowired
    private SectionRepository sectionRepository;

    @GetMapping("/")
    public List<Section> GetUsers() {
        return sectionRepository.findAll();
    }
    @GetMapping("/{id}")
    public Section GetUser(@PathVariable Integer id) {
        return sectionRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Section PostUser(@RequestBody Section user) {
        return sectionRepository.save(user);
    }
    @PutMapping("/")
    public Section PutUser(@RequestBody Section user) {
        Section oldUser = sectionRepository.findById(user.getId()).orElse(null);
        oldUser.setId(user.getId());
        oldUser.setName(user.getName());
        oldUser.setCourseID(user.getCourseID());
        oldUser.setStdLimit(user.getStdLimit());
        oldUser.setStdReg(user.getStdReg());
        oldUser.setTeacherID(user.getTeacherID());
        return sectionRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        sectionRepository.deleteById(id);
        return id;
    }
}