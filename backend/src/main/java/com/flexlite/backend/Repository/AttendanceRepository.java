package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.Attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>{
    @Query(nativeQuery = true,value = "call Get_Attendance(:secId,:studId)")
    List<Attendance>Get_AttendanceList(@Param("secId")Integer secId,@Param("studId")Integer studId);
    @Query(nativeQuery = true,value = "call Get_Section(:studId,:courseId)")
    int Get_SectionId(@Param("studId")Integer studId,@Param("courseId")Integer courseId);
}
