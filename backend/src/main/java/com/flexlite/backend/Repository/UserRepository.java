package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    
    @Procedure
    int User_Login(String username,String password,String userType);
    @Query(nativeQuery = true,value = "call Get_Student_info()")
    List<User> Get_Student_info();
    @Query(nativeQuery = true,value = "call Get_Teacher_Info()")
    List<User> Get_Teacher_Info();
}