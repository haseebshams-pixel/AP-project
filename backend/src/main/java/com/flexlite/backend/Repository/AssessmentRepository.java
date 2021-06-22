package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.Assessment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface AssessmentRepository extends JpaRepository<Assessment,Integer>{
    
}
