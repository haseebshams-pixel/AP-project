package com.flexlite.backend.Repository;

import com.flexlite.backend.Model.Teacher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
@Repository
public interface TeacherRepository extends JpaRepository<Teacher,Integer>{
    @Procedure
    String Get_Teacher_Course(Integer teachid);
}
