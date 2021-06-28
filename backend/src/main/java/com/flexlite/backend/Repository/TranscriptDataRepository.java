package com.flexlite.backend.Repository;

import java.util.List;

import com.flexlite.backend.Model.TranscriptData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TranscriptDataRepository extends JpaRepository<TranscriptData,String> {
    @Query(nativeQuery = true,value = "call Get_Transcript(:studId)")
    List<TranscriptData> Get_Transcrit(@Param("studId")Integer studId);
}
