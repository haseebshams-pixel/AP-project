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
    @Column(name = "Id", nullable = false)
    private int Id;
    @Column(name = "CourseID", nullable = false)
    private int CourseID;
    @Column(name = "Grade", nullable = false)
    private String Grade;
    @Column(name = "TranscriptID", nullable = false)
    private int TranscriptID;
}
