package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    
    @Procedure
    int User_Login(String username,String password,String userType);
    
}