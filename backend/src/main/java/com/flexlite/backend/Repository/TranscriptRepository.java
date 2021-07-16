package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.Assessment;
import com.flexlite.backend.Model.Registration;
import com.flexlite.backend.Model.Student;
import com.flexlite.backend.Model.Transcript;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface TranscriptRepository extends JpaRepository<Transcript,Integer>{
    @Query(nativeQuery = true,value = "call Trans_GetStudent(:depId)")
    List<Object[]> Trans_GetStudent(@Param("depId")Integer depId);
    @Query(nativeQuery = true,value = "call Insert_In_Transcript1(:semester,:batch,:userId)")
    int Insert_In_Transcript1(@Param("semester")Integer semester,@Param("batch")String batch,@Param("userId")Integer userId);
    @Query(nativeQuery = true,value = "call Trans_Get_Student_Registration(:studId)")
    List<Object[]> Trans_Get_Student_Registration(@Param("studId")Integer studId);
    @Procedure
    int Trans_UpdateRegistration(Integer regId,String grade);
    @Query(nativeQuery = true,value = "call Trans_Get_Assessments(:regId)")
    List<Object[]> Trans_Get_Assessments(@Param("regId")Integer regId);
    @Procedure
    int Trans_Get_CreditHours(Integer secId);
    @Query(nativeQuery = true,value = "call Trans_Insert_in_transcriptdetails(:sectId,:grade,:transId,:points)")
    int Trans_Insert_in_transcriptdetails(@Param("sectId")Integer sectId,@Param("grade")String grade,@Param("transId")Integer transId,@Param("points")float points);
    @Query(nativeQuery = true,value = "call Trans_Get_Previous_Transcripts(:studId)")
    List<Transcript> Trans_Get_Previous_Transcripts(@Param("studId")Integer studId);
    @Procedure
    int Insert_In_Transcript2(Float sgpa,Float cgpa,Integer tchr,Integer Id);
    @Procedure
    int Generate_Transcript(Integer depid);
    @Procedure
    int Get_CourseId(Integer SectId);
}
