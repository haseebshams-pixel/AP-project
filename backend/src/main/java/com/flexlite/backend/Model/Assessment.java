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
@Table(name = "assessment")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Assessment {
    @Id
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private int Id;
    @Column(name = "TotalMarks", nullable = false)
    private int TotalMarks;
    @Column(name = "ObtainedMarks", nullable = false)
    private float ObtainedMarks;
    @Column(name = "Type", nullable = false)
    private String Type;
    @Column(name = "Weightage", nullable = false)
    private float Weightage;
    @Column(name = "RegistrationID", nullable = false)
    private int RegistrationID;
}
