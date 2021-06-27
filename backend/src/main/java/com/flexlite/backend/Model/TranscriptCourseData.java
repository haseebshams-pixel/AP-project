package com.flexlite.backend.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "transcriptcoursedata")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TranscriptCourseData {
    @Id
    @GeneratedValue
    private int Id;
    private int CourseID;
    private String Grade;
    private int TranscriptID;
}
