package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.Registration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

public interface RegistrationRepository extends JpaRepository<Registration,Integer>{
    //@Query(nativeQuery = true,value = "call Update_Status(:regId)")
    //int update_status(@Param("regId")Integer regId);
    @Procedure
    int Update_Status(Integer regId);
}
