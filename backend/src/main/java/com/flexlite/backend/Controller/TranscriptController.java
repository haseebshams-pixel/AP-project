package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Transcript;
import com.flexlite.backend.Repository.TranscriptRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transcript")
@CrossOrigin
public class TranscriptController {
    @Autowired
    private TranscriptRepository transcriptRepository;

    @GetMapping("/")
    public List<Transcript> GetUsers() {
        return transcriptRepository.findAll();
    }
    @GetMapping("/{id}")
    public Transcript GetUser(@PathVariable Integer id) {
        return transcriptRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Transcript PostUser(@RequestBody Transcript user) {
        return transcriptRepository.save(user);
    }
    @PutMapping("/")
    public Transcript PutUser(@RequestBody Transcript user) {
       Transcript oldUser = transcriptRepository.findById(user.getId()).orElse(null);
       oldUser.setBatch(user.getBatch());
       oldUser.setCGPA(user.getCGPA());
       oldUser.setId(user.getId());
       oldUser.setSGPA(user.getSGPA());
       oldUser.setSemesterNo(user.getSemesterNo());
       oldUser.setStudentID(user.getStudentID());
       oldUser.setTotalCreditHours(user.getTotalCreditHours());
       return transcriptRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        transcriptRepository.deleteById(id);
        return id;
    }

}
