package com.flexlite.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.flexlite.backend.Model.RegisteredCourses;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredCoursesRepository extends JpaRepository<RegisteredCourses,String> {
    @Query(nativeQuery = true,value = "call Get_Registered_Courses(:studId)")
    List<RegisteredCourses> Get_R_Course_List(@Param("studId")Integer studId);
}
