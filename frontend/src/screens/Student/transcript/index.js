import React, { Component } from 'react'

import MotionHoc from '../MotionHoc';
import './styles.css'

class TranscriptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transcript: [
        {
          code:'CS326',
          courseName: "Parallel and Distributed Computing",
          section: 'BCS-6E',
          crdHour: 3,
          grade:'A-',
          Type:'Core',
          Points:'3.67',
          Remarks:'',
        },
        {
          code:'CS328',
          courseName: "	Software Engineering",
          section: 'BCS-6A',
          crdHour: 3,
          grade:'A-',
          Type:'Core',
          Points:'3.67',
          Remarks:'',
        },
        {
          code:'CS433',
          courseName: "Advanced Programming",
          section: 'BCS-6A',
          crdHour: 3,
          grade:'A-',
          Type:'Core',
          Points:'3.67',
          Remarks:'',
        },
        {
          code:'CS461',
          courseName: "Artificial Intelligence",
          section: 'BCS-6A',
          crdHour: 3,
          grade:'A-',
          Type:'Core',
          Points:'3.67',
          Remarks:'',
        },
        {
          code:'SS204',
          courseName: "Parallel and Distributed Computing",
          section: 'BCS-6E',
          crdHour: 3,
          grade:'A-',
          Type:'Core',
          Points:'3.67',
          Remarks:'',
        },
        {
          code:'CL117',
          courseName: "International Relations",
          section: 'BCS-6A',
          crdHour: 3,
          grade:'A-',
          Type:'Core',
          Points:'3.67',
          Remarks:'',
        }
      ]
    };
  }
  render() {
    return (
      <div style={{marginLeft:'3%'}}>
        <div id="mainnn">
          <div id="first">
            <h1>Student Transcript</h1>
          </div>
        </div>
          <div id="content">
            <div className="containerr">
              <h2></h2>
            </div>
            <div class="tbl-headerrr">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <thead><tr><td class="text" width="50px">Code</td><td class="text" width="110px">Course Name</td><td class="text" width="100px">Section</td><td class="text"width="60px">CrdHrs</td><td class="text"width="70px">Grade</td><td class="text"width="50px">Points</td><td class="text"width="100px">Type</td><td class="text"width="100px">Remarks</td></tr></thead>
              </table>
            </div>
            <div class="tbl-contenter">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {this.state.transcript.map((item) => (
                    <tr>
                      <td width="70px">{item.code}</td>
                      <td width="150px">{item.courseName}</td>
                      <td width="90px">{item.section}</td>
                      <td width="90px">{item.crdHour}</td>
                      <td width="90px">{item.grade}</td>
                      <td width="70px">{item.Points}</td>
                      <td width="100px">{item.Type}</td>
                      <td width="100px">{item.Remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    )
  }
}

const Transcript = MotionHoc(TranscriptComponent);

export default Transcript;