package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.Assessment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface AssessmentRepository extends JpaRepository<Assessment,Integer>{
    @Query(nativeQuery = true,value = "call Get_Assessments(:secId,:studId,:asstype)")
    List<Assessment>Get_AssessmentList(@Param("secId")Integer secId,@Param("studId")Integer studId,@Param("asstype")String asstype);
    @Query(nativeQuery = true,value = "call Get_Section(:studId,:courseId)")
    int Get_SectionId(@Param("studId")Integer studId,@Param("courseId")Integer courseId);
}
