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
@Table(name = "transcript")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transcript {
    @Id
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private int Id;
    @Column(name = "SemesterNo", nullable = false)
    private int SemesterNo;
    @Column(name = "Batch", nullable = false)
    private String Batch;
    @Column(name = "SGPA", nullable = false)
    private float SGPA;
    @Column(name = "CGPA", nullable = false)
    private float CGPA;
    @Column(name = "StudentID", nullable = false)
    private int StudentID;
    @Column(name = "TotalCreditHours", nullable = false)
    private int TotalCreditHours;
}
