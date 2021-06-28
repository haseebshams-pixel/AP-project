package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    
    @Query(nativeQuery = true,value = "call Get_CourseList(:studId)")
    List<Course> Get_CourseList(@Param("studId")Integer studId);
    @Query(nativeQuery = true,value = "call Get_Available_Courses(:studId)")
    List<Course> Get_Availabe_CourseList(@Param("studId")Integer studId);
}
