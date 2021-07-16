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
    public final String CalculateGrade(float absolutes) {
        if (absolutes >= 90) {
            return ("A+");
        }
        if (absolutes >= 85) {
            return ("A");
        }
        if (absolutes >= 80) {
            return ("A-");
        }
        if (absolutes >= 75) {
            return ("B+");
        }
        if (absolutes >= 70) {
            return ("B");
        }
        if (absolutes >= 67) {
            return ("B-");
        }
        if (absolutes >= 64) {
            return ("C+");
        }
        if (absolutes >= 60) {
            return ("C");
        }
        if (absolutes >= 57) {
            return ("C-");
        }
        if (absolutes >= 54) {
            return ("D+");
        }
        if (absolutes >= 50) {
            return ("D");
        }
        return ("F");
    }

    public final float CalculateGradeValue(String grade) {
        if (grade.equals("A+")) {
            return 4;
        }
        if (grade.equals("A")) {
            return 4;
        }
        if (grade.equals("A-")) {
            return (float) 3.7;
        }

        if (grade.equals("B+")) {
            return (float) 3.4;
        }
        if (grade.equals("B")) {
            return (float) 3.0;
        }
        if (grade.equals("B-")) {
            return (float) 2.7;
        }
        if (grade.equals("C+")) {
            return (float) 2.4;
        }
        if (grade.equals("C")) {
            return 2;
        }
        if (grade.equals("C-")) {
            return (float) 1.7;
        }
        if (grade.equals("D+")) {
            return (float) 1.4;
        }
        if (grade.equals("D")) {
            return 1;
        }
        return 0;
    }
}
