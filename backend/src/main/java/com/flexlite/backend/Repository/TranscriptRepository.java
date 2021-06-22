package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.Transcript;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface TranscriptRepository extends JpaRepository<Transcript,Integer>{
    
}
