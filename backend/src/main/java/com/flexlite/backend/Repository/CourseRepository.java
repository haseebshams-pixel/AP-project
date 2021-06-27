package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    
    //@Procedure(name="Get_CourseList")
    //@Transactional
    @Query(nativeQuery = true,value = "call Get_CourseList(:studId)")
    List<Course> Get_CourseList(@Param("studId")Integer studId);
}
