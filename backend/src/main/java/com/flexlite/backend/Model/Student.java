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
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue
    @Column(name = "UserId", nullable = false)
    private int UserId;
    @Column(name = "RollNo", nullable = false)
    private String RollNo;
    @Column(name = "Program", nullable = false)
    private String Program;
    @Column(name = "semesterNo", nullable = false)
    private int semesterNo; 
    @Column(name = "batch", nullable = false)
    private int batch;
}
