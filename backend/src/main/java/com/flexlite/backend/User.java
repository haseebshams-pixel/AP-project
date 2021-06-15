package com.flexlite.backend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String Username; 
    private String Password;
    private String name;
    private String DOB;
    private String CNIC; 
    private String UserType;
    private int DepartmentID;
    private String gender;
    private String mobileno; 
    private String nationality;
    private String email;
}
