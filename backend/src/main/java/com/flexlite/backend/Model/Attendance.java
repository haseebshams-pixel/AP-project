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
@Table(name = "attendance")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Attendance {
    @Id
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private int Id;
    @Column(name = "lecNo", nullable = false)
    private int lecNo;
    @Column(name = "Status", nullable = false)
    private String Status;
    @Column(name = "RegistrationID", nullable = false)
    private int RegistrationID;
    @Column(name = "Date", nullable = false)
    private String Date;
}
