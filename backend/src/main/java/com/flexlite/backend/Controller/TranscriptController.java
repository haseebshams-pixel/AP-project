package com.flexlite.backend.Controller;

import java.util.ArrayList;
import java.util.List;

import com.flexlite.backend.Model.Assessment;
import com.flexlite.backend.Model.Registration;
import com.flexlite.backend.Model.Student;
import com.flexlite.backend.Model.Transcript;
import com.flexlite.backend.Repository.TranscriptRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transcript")
@CrossOrigin
public class TranscriptController {
    @Autowired
    private TranscriptRepository transcriptRepository;

    @GetMapping("/")
    public List<Transcript> GetUsers() {
        return transcriptRepository.findAll();
    }

    @GetMapping("/{id}")
    public Transcript GetUser(@PathVariable Integer id) {
        return transcriptRepository.findById(id).orElse(null);
    }

    @GetMapping("/generateTranscript/{depId}")
    public int GenerateTranscript(@PathVariable("depId") Integer depId) {
        
        int y = transcriptRepository.Generate_Transcript(depId);
        if (y == 1) {
            List<Object[]> studentObjects = transcriptRepository.Trans_GetStudent(depId);
            List<Student> students = new ArrayList<Student>();
            for(int i =0;i<studentObjects.size();i++){
                int id=(Integer)studentObjects.get(i)[0];
                String roll = (String)studentObjects.get(i)[1];
                String program = (String)studentObjects.get(i)[2];
                int semester=(Integer)studentObjects.get(i)[3];
                String batch = (String)studentObjects.get(i)[4];
                Student s = new Student(id,roll,program,semester,batch);
                students.add(s);
            }
            Transcript trans = new Transcript();
            for (int i = 0; i < students.size(); i++) {
                Student stt = students.get(i);
                int transID = transcriptRepository.Insert_In_Transcript1(stt.getSemesterNo(), stt.getBatch(),stt.getUserId());
                int transdetailId = 0;
                int SemesterCreditHours = 0;
                float SemesterSum = 0;
                List<Object[]> regObjects = transcriptRepository.Trans_Get_Student_Registration(stt.getUserId());
                List<Registration> regList = new ArrayList<Registration>();
                for(int g=0;g<regObjects.size();g++){
                    int id=(Integer)regObjects.get(g)[0];
                    String grade = (String)regObjects.get(g)[1];
                    int studentId = (Integer)regObjects.get(g)[2];
                    int sectionId=(Integer)regObjects.get(g)[3];
                    String status = (String)regObjects.get(g)[4];
                    Registration r = new Registration(id,grade,studentId,sectionId,status);
                    regList.add(r);
                }
                for (int j = 0; j < regList.size(); j++) {
                    Registration reg = regList.get(j);
                    if (reg.getGrade() == null) {
                        if (reg.getStatus().equals("withdrawn")) {
                            int x = transcriptRepository.Trans_UpdateRegistration(reg.getId(), "W");
                            reg.setGrade("W");
                        } else {
                            float totalWeightage = 0;
                            float obtainedWeightage = 0;
                            float abs = 0;
                            List<Object[]> evalObjects = transcriptRepository.Trans_Get_Assessments(reg.getId());
                            List<Assessment>evalList = new ArrayList<Assessment>();

                            for(int g = 0;g<evalObjects.size();g++){
                                int id=(Integer)evalObjects.get(g)[0];
                                int total=(Integer)evalObjects.get(g)[1];
                                float obtain=(Float)evalObjects.get(g)[2];
                                String type = (String)evalObjects.get(g)[3];
                                float weight=(Float)evalObjects.get(g)[4];
                                int regId=(Integer)evalObjects.get(g)[5];
                                Assessment ass = new Assessment(id,total,obtain,type,weight,regId);
                                evalList.add(ass);
                            }

                            for (int k = 0; k < evalList.size(); k++) {
                                Assessment a = evalList.get(k);
                                obtainedWeightage = obtainedWeightage
                                        + (a.getObtainedMarks() / a.getTotalMarks()) * a.getWeightage();
                                totalWeightage = totalWeightage + a.getWeightage();
                            }
                            if (totalWeightage == 0) {
                                totalWeightage = 1;
                            }
                            abs = (obtainedWeightage / totalWeightage) * 100;
                            String grade = trans.CalculateGrade(abs);
                            reg.setGrade(grade);
                            int x = transcriptRepository.Trans_UpdateRegistration(reg.getId(), grade);
                        }
                    }
                    float gradeValue = 0;
                    if (!reg.getGrade().equals("W")) {
                        gradeValue = trans.CalculateGradeValue(reg.getGrade());
                        int x = transcriptRepository.Trans_Get_CreditHours(reg.getSectionID());
                        SemesterCreditHours = SemesterCreditHours + x;
                        SemesterSum = SemesterSum + (x * gradeValue);
                    }
                    int courseId  = transcriptRepository.Get_CourseId(reg.getSectionID());
                    transdetailId = transcriptRepository.Trans_Insert_in_transcriptdetails(courseId,
                            reg.getGrade(), transID, gradeValue);
                }
                float sgpa = 0;
                if (SemesterCreditHours == 0) {
                    sgpa = 0;
                } else {
                    sgpa = SemesterSum / SemesterCreditHours;
                }
                float cgpa = 0;
                int totalcred = 0;
                if (stt.getSemesterNo() == 1) {
                    cgpa = sgpa;
                    totalcred = SemesterCreditHours;
                } else {
                    List<Transcript> transList = transcriptRepository.Trans_Get_Previous_Transcripts(stt.getUserId());
                    Transcript lastTrans = null;
                    for (int m = 0; m < transList.size(); m++) {
                        if (transList.get(m).getSemesterNo() == stt.getSemesterNo() - 1) {
                            lastTrans = transList.get(m);
                        }
                    }
                    float totalsum = SemesterSum + (lastTrans.getCGPA() * lastTrans.getTotalCreditHours());
                    totalcred = SemesterCreditHours + lastTrans.getTotalCreditHours();
                    if (totalcred == 0) {
                        cgpa = 0;
                    } else {
                        cgpa = totalsum / totalcred;
                    }
                }
                int x = transcriptRepository.Insert_In_Transcript2(sgpa, cgpa, totalcred, transID);
            }
            return 1;
        } else {
            return -1;
        }
    }

    @PostMapping("/")
    public Transcript PostUser(@RequestBody Transcript user) {
        return transcriptRepository.save(user);
    }

    @PutMapping("/")
    public Transcript PutUser(@RequestBody Transcript user) {
        Transcript oldUser = transcriptRepository.findById(user.getId()).orElse(null);
        oldUser.setBatch(user.getBatch());
        oldUser.setCGPA(user.getCGPA());
        oldUser.setId(user.getId());
        oldUser.setSGPA(user.getSGPA());
        oldUser.setSemesterNo(user.getSemesterNo());
        oldUser.setStudentID(user.getStudentID());
        oldUser.setTotalCreditHours(user.getTotalCreditHours());
        return transcriptRepository.save(oldUser);
    }

    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        transcriptRepository.deleteById(id);
        return id;
    }

}
