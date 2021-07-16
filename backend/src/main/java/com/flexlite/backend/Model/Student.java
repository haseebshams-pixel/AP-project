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
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue
    private int UserId;
    private String RollNo;
    private String Program;
    private int semesterNo; 
    private String batch;
    public Student(){

    }
    public Student(int userId, String rollNo, String program, int semesterNo, String batch) {
        UserId = userId;
        RollNo = rollNo;
        Program = program;
        this.semesterNo = semesterNo;
        this.batch = batch;
    }
    public int getUserId() {
        return UserId;
    }
    public void setUserId(int userId) {
        UserId = userId;
    }
    public String getRollNo() {
        return RollNo;
    }
    public void setRollNo(String rollNo) {
        RollNo = rollNo;
    }
    public String getProgram() {
        return Program;
    }
    public void setProgram(String program) {
        Program = program;
    }
    public int getSemesterNo() {
        return semesterNo;
    }
    public void setSemesterNo(int semesterNo) {
        this.semesterNo = semesterNo;
    }
    public String getBatch() {
        return batch;
    }
    public void setBatch(String batch) {
        this.batch = batch;
    }
    
    
}
