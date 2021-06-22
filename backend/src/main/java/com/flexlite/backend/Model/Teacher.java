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
@Table(name = "teacher")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {
    @Id
    @GeneratedValue
    @Column(name = "UserId", nullable = false)
    private int UserId;
    @Column(name = "Salary", nullable = false)
    private int Salary;
    @Column(name = "DateJoined", nullable = false)
    private String DateJoined;
}
