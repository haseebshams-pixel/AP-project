package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.TranscriptCourseData;
import com.flexlite.backend.Model.TranscriptData;
import com.flexlite.backend.Repository.TranscriptCourseDataRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transcriptcoursedata")
@CrossOrigin
public class TranscriptCourseDataController {
    @Autowired
    private TranscriptCourseDataRepository transcriptCourseDataRepository;

    @GetMapping("/")
    public List<TranscriptCourseData> GetUsers() {
        return transcriptCourseDataRepository.findAll();
    }
    @GetMapping("/{id}")
    public TranscriptCourseData GetUser(@PathVariable Integer id) {
        return transcriptCourseDataRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public TranscriptCourseData PostUser(@RequestBody TranscriptCourseData user) {
        return transcriptCourseDataRepository.save(user);
    }
    @PutMapping("/")
    public TranscriptCourseData PutUser(@RequestBody TranscriptCourseData user) {
       TranscriptCourseData oldUser = transcriptCourseDataRepository.findById(user.getId()).orElse(null);
       oldUser.setCourseID(user.getCourseID());
       oldUser.setGrade(user.getGrade());
       oldUser.setTranscriptID(user.getTranscriptID());
       oldUser.setId(user.getId());
       oldUser.setPoints(user.getPoints());
       return transcriptCourseDataRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        transcriptCourseDataRepository.deleteById(id);
        return id;
    }

}
