package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.TranscriptData;
import com.flexlite.backend.Repository.TranscriptDataRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transcriptdata")
@CrossOrigin
public class TranscriptDataController {
    @Autowired
    private TranscriptDataRepository transcript;
    @GetMapping("/{studId}")
    public List<TranscriptData> GetTranscriptInfo(@PathVariable("studId") Integer studId) {
        return transcript.Get_Transcrit(studId);
    }
}
