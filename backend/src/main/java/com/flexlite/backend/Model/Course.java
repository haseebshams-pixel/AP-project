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
@Table(name = "course")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
    @Id
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private int Id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "CreditHours", nullable = false)
    private int CreditHours;
    @Column(name = "DepID", nullable = false)
    private int DepID;
    @Column(name = "SemesterNo", nullable = false)
    private int SemesterNo;
    @Column(name = "CourseCode", nullable = false)
    private int CourseCode;
    @Column(name = "Type", nullable = false)
    private int Type;
}
