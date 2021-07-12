package com.flexlite.backend.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TranscriptData {
    
    @Id
    private String CourseCode;
    private String name;
    private int creditHours;
    private String grade;
    private float points;
    private String type;
	public String getCourseCode() {
		return CourseCode;
	}
	public void setCourseCode(String courseCode) {
		CourseCode = courseCode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCreditHrs() {
		return creditHours;
	}
	public void setCreditHrs(int creditHrs) {
		this.creditHours = creditHrs;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public float getPoints() {
		return points;
	}
	public void setPoints(float points) {
		this.points = points;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
    
	public String transcript(String name){
		return name;
	}
}
