import React, { Component } from 'react'

import MotionHoc from '../MotionHoc';
import './styles.css';

class AttendanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: '',
      open: false,
      course: [
        {
          code: 'CS2011',
          name: 'Software Engineering',
        },
        {
          code: 'CS2012',
          name: 'Advance Programming',
        },
        {
          code: 'CS2013',
          name: 'Artificial Intelligence',
        },
        {
          code: 'CS2014',
          name: 'International Relations',
        }
      ],
      attendance: [
        {
          lecture: 1,
          date: "09-March-2021",
          Duration: 1.50,
          Presence: 'P'
        },
        {
          lecture: 1,
          date: "11-March-2021",
          Duration: 1.50,
          Presence: 'P'
        },
        {
          lecture: 1,
          date: "16-March-2021",
          Duration: 1.50,
          Presence: 'P'
        },
        {
          lecture: 1,
          date: "18-March-2021",
          Duration: 1.50,
          Presence: 'A'
        }
      ]
    };
  }
  render() {
    return (
      <>
        <div id="main">
          <div id="first">
            <h1>Attendance</h1>
          </div>
          <div id="second">
            {this.state.course.map((item) =>
            (
              <button className="btun" onClick={() => this.setState({ courseName: item.name, open: true, assignmentComp: false, quizComp: false, midsComp: false, finalsComp: false })}>{item.code}</button>
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
                  {this.state.attendance.map((item) => (
                    <tr>
                      <td width="100px">{item.lecture}</td>
                      <td width="100px">{item.date}</td>
                      <td width="100px">{item.Duration}</td>
                      <td width="100px">{item.Presence}</td>
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