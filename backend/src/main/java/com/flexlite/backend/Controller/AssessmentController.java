package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Assessment;
import com.flexlite.backend.Repository.AssessmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/assessment")
@CrossOrigin
public class AssessmentController {
    @Autowired
    private AssessmentRepository assessmentRepository;

    @GetMapping("/")
    public List<Assessment> GetUsers() {
        return assessmentRepository.findAll();
    }
    @GetMapping("/{id}")
    public Assessment GetUser(@PathVariable Integer id) {
        return assessmentRepository.findById(id).orElse(null);
    }
    @GetMapping("/getAssessment/{studId}/{courseId}/{type}")
    public List<Assessment> GetAssessments(@PathVariable("studId") Integer studId,@PathVariable("courseId") Integer courseId,@PathVariable("type") String asstype) {
        int x = assessmentRepository.Get_SectionId(studId, courseId);
        return assessmentRepository.Get_AssessmentList(x,studId,asstype);
    }
    @PostMapping("/")
    public Assessment PostUser(@RequestBody Assessment user) {
        return assessmentRepository.save(user);
    }
    @PutMapping("/")
    public Assessment PutUser(@RequestBody Assessment user) {
        Assessment oldUser = assessmentRepository.findById(user.getId()).orElse(null);
        oldUser.setId(user.getId());
        oldUser.setObtainedMarks(user.getObtainedMarks());
        oldUser.setRegistrationID(user.getRegistrationID());
        oldUser.setTotalMarks(user.getTotalMarks());
        oldUser.setType(user.getType());
        oldUser.setWeightage(user.getWeightage());
        return assessmentRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        assessmentRepository.deleteById(id);
        return id;
    }
}