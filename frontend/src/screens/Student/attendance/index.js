import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'

import UserProfile from '../../../Session';
import MotionHoc from '../MotionHoc';
import './styles.css';

class AttendanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId : Cookies.get("userId"),
      courseName: '',
      courseId:0,
      open: false,
      courses:[],
      attendances:[],
    };
  }
  componentDidMount(){
    axios.get(`http://localhost:8080/api/course/getCourse/${this.state.userId}`)
    .then((res) => {
      this.setState({ courses: res.data })
      console.log(this.state.courses);
    })
  }
  render() {
    const handlebuttonclick=()=>{
      axios.get(`http://localhost:8080/api/attendance/getAttendance/${this.state.userId}/${this.state.courseId}`)
        .then((res) => {
          this.setState({ attendances: res.data })
          console.log(this.state.attendances);
        })
    }
    return (
      <>
        <div id="main">
          <div id="first">
            <h1>Attendance</h1>
          </div>
          <div id="second">
            {this.state.courses.map((item) =>
            (
              <button className="btun" onClick={() => this.setState({ courseName: item.name, open: true ,courseId:item.id},()=>handlebuttonclick())}>{item.courseCode}</button>
            ))}
          </div>
        </div>
        {this.state.open ?
          <div id="content">
            <div className="containerr">
              <h2>{this.state.courseName}</h2>
            </div>
            <div class="tbl-headerrr">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <thead><tr><td class="text" width="100px">Lecture No</td><td class="text" width="100px">Date</td><td class="text" width="100px">Duration (In Hours)</td><td class="text"width="100px">Presence</td></tr></thead>
              </table>
            </div>
            <div class="tbl-contentr">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {this.state.attendances.map((item) => (
                    <tr>
                      <td width="100px">{item.lecNo}</td>
                      <td width="100px">{item.date}</td>
                      <td width="100px">1.5</td>
                      <td width="100px">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> : null}
      </>
    )
  }
}


const Attendance = MotionHoc(AttendanceComponent);

export default Attendance;