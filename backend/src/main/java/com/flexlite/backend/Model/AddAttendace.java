package com.flexlite.backend.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AddAttendace {
    @Id
    private String rollNo;
    private String name;
    private int registrationid;
    public String getRollNo() {
        return rollNo;
    }
    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getRegistrationid() {
        return registrationid;
    }
    public void setRegistrationid(int registrationid) {
        this.registrationid = registrationid;
    }

    
}
