import React, { Component } from 'react'
import axios from 'axios';

import MotionHoc from '../MotionHoc';
import marksCss from './style.css';
import UserProfile from '../../../Session';

class MarkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      courseName: '',
      courseId: 0,
      open: false,
      assignmentComp: false,
      quizComp: false,
      midsComp: false,
      finalsComp: false,
      assessments: [],
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/course/getCourse/${UserProfile.getId()}`)
      .then((res) => {
        this.setState({ courses: res.data })
      })
  }
  render() {
    const handleAssignbutton = () => {
      axios.get(`http://localhost:8080/api/assessment/getAssessment/${UserProfile.getId()}/${this.state.courseId}/assignment`)
        .then((res) => {
          this.setState({ assessments: res.data })
        })
    }
    const handleQuizbutton = () => {
      axios.get(`http://localhost:8080/api/assessment/getAssessment/${UserProfile.getId()}/${this.state.courseId}/quiz`)
        .then((res) => {
          this.setState({ assessments: res.data })
        })
    }
    const handleMidbutton = () => {
      axios.get(`http://localhost:8080/api/assessment/getAssessment/${UserProfile.getId()}/${this.state.courseId}/mid`)
        .then((res) => {
          this.setState({ assessments: res.data })
        })
    }
    const handleFinalbutton = () => {
      axios.get(`http://localhost:8080/api/assessment/getAssessment/${UserProfile.getId()}/${this.state.courseId}/final`)
        .then((res) => {
          this.setState({ assessments: res.data })
        })
    }
    return (
      <>
        <div id="main">
          <div id="first">
            <h1>Marks</h1>
          </div>
          <div id="second">
            {this.state.courses.map((item) =>
            (
              <button className="btun" onClick={() => this.setState({ courseName: item.name, open: true, assignmentComp: false, quizComp: false, midsComp: false, finalsComp: false, courseId: item.id })}>{item.courseCode}</button>
            ))}
          </div>
        </div>
        {this.state.open ?
          <div id="content">
            <div className="containerr">
              <h2>{this.state.courseName}</h2>
            </div>
            <div className="componenthead">
              <button className="componentbtn" onClick={() => this.setState({ assignmentComp: !this.state.assignmentComp, quizComp: false, midsComp: false, finalsComp: false }) || handleAssignbutton()}><h3>Assignments</h3></button>
            </div>
            {this.state.assignmentComp ?
              <div className="componentbody">
                <div class="tbl-headerr">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                  </table>
                </div>
                <div class="tbl-contentt">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      {this.state.assessments.map((item) => (
                        <tr>
                          <td className={marksCss.tdd} >{item.weightage}</td>
                          <td className={marksCss.tdd} >{item.obtainedMarks}</td>
                          <td className={marksCss.tdd} >{item.totalMarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> : null}
            <div className="componenthead">
              <button className="componentbtn" onClick={() => this.setState({ assignmentComp: false, quizComp: !this.state.quizComp, midsComp: false, finalsComp: false })|| handleQuizbutton()}><h3>Quiz</h3></button>
            </div>
            {this.state.quizComp ?
              <div className="componentbody">
                <div class="tbl-headerr">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                  </table>
                </div>
                <div class="tbl-contentt">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      {this.state.assessments.map((item) => (
                        <tr>
                          <td className={marksCss.tdd} >{item.weightage}</td>
                          <td className={marksCss.tdd} >{item.obtainedMarks}</td>
                          <td className={marksCss.tdd} >{item.totalMarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> : null}
            <div className="componenthead">
              <button className="componentbtn" onClick={() => this.setState({ assignmentComp: false, quizComp: false, midsComp: !this.state.midsComp, finalsComp: false })|| handleMidbutton()}><h3>Mids</h3></button>
            </div>
            {this.state.midsComp ?
              <div className="componentbody">
                <div class="tbl-headerr">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                  </table>
                </div>
                <div class="tbl-contentt">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      {this.state.assessments.map((item) => (
                        <tr>
                          <td className={marksCss.tdd} >{item.weightage}</td>
                          <td className={marksCss.tdd} >{item.obtainedMarks}</td>
                          <td className={marksCss.tdd} >{item.totalMarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> : null}
            <div className="componenthead">
              <button className="componentbtn" onClick={() => this.setState({ assignmentComp: false, quizComp: false, midsComp: false, finalsComp: !this.state.finalsComp })|| handleFinalbutton()}><h3>Finals</h3></button>
            </div>
            {this.state.finalsComp ?
              <div className="componentbody">
                <div class="tbl-headerr">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                  </table>
                </div>
                <div class="tbl-contentt">
                  <table id="example" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      {this.state.assessments.map((item) => (
                        <tr>
                          <td className={marksCss.tdd} >{item.weightage}</td>
                          <td className={marksCss.tdd} >{item.obtainedMarks}</td>
                          <td className={marksCss.tdd} >{item.totalMarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> : null}
          </div> : null}
      </>
    )
  }
}

const Mark = MotionHoc(MarkComponent);

export default Mark;