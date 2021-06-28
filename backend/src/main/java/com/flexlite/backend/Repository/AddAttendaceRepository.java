package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.AddAttendace;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AddAttendaceRepository extends JpaRepository<AddAttendace,String>{
    @Query(nativeQuery = true,value = "call Registered_Students(:secName,:teacherId)")
    List<AddAttendace>Get_StudentList(@Param("secName")String secId,@Param("teacherId")Integer teacherId);
}
