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
    private int Id;
    private int SemesterNo;
    private String Batch;
    private float SGPA;
    private float CGPA;
    private int StudentID;
    private int TotalCreditHours;
}
