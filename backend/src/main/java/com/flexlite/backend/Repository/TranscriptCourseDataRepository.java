package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.TranscriptCourseData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface TranscriptCourseDataRepository extends JpaRepository<TranscriptCourseData,Integer>{
    
}
