package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRespository extends JpaRepository<Admin,Integer> {
    
}
