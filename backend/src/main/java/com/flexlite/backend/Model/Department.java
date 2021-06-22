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
@Table(name = "departments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Department {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private  int id;
    @Column(name = "name", nullable = false)
    private  String name;
    @Column(name = "RegBool", nullable = false)
    private  boolean RegBool;
    @Column(name = "Withdrawbool", nullable = false)
    private  boolean Withdrawbool;
    @Column(name = "TranscriptBool", nullable = false)
    private  boolean TranscriptBool;
}
