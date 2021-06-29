package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.Department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface DepartmentRepository extends JpaRepository<Department,Integer>{
    @Procedure
    int Close_Registration(Integer adminId);
    @Procedure
    int Close_Withdrawn(Integer adminId);
    @Procedure
    int Start_New_Semester(Integer adminId);
    @Procedure
    int Get_RegistrationBool(Integer studId);
    @Procedure
    int Get_Withdraw(Integer studId);
}
