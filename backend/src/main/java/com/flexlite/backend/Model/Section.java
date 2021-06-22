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
@Table(name = "section")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Section {
    @Id
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private int Id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "StdLimit", nullable = false)
    private int StdLimit;
    @Column(name = "StdReg", nullable = false)
    private int StdReg;
    @Column(name = "CourseID", nullable = false)
    private int CourseID;
    @Column(name = "TeacherID", nullable = false)
    private int TeacherID;
}
