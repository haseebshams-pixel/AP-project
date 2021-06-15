import React, { Component } from 'react'

import MotionHoc from '../MotionHoc';
import marksCss from './style.css';


class MarkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: '',
      open: false,
      assignmentComp:false,
      quizComp:false,
      midsComp:false,
      finalsComp:false,
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
      assessment: [
        {
          weightage: 2,
          ObtainedMarks: 30,
          TotalMarks: 40,
        },
        {
          weightage: 3,
          ObtainedMarks: 33,
          TotalMarks: 100,
        },
        {
          weightage: 2,
          ObtainedMarks: 100,
          TotalMarks: 100,
        },
        {
          weightage: 1,
          ObtainedMarks: 100,
          TotalMarks: 100,
        }
      ]
    };
  }
  render() {
    return (
      <>
        <div id="main">
          <div id="first">
            <h1>Marks</h1>
          </div>
          <div id="second">
            {this.state.course.map((item) =>
            (
              <button className="btun" onClick={() => this.setState({ courseName: item.name, open: true,assignmentComp:false,quizComp:false,midsComp:false,finalsComp:false})}>{item.code}</button>
            ))}
          </div>
        </div>
        {this.state.open ?
          <div id="content">
            <div className="containerr">
              <h2>{this.state.courseName}</h2>
            </div>
            <div className="componenthead">
              <button className="componentbtn" onClick={()=>this.setState({assignmentComp:!this.state.assignmentComp,quizComp:false,midsComp:false,finalsComp:false})}><h3>Assignments</h3></button>
            </div>
            {this.state.assignmentComp?
            <div className="componentbody">
              <div class="tbl-headerr">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                </table>
              </div>
              <div class="tbl-contentt">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    {this.state.assessment.map((item)=>(
                      <tr>
                      <td className={marksCss.tdd} >{item.weightage}</td>
                      <td className={marksCss.tdd} >{item.ObtainedMarks}</td>
                      <td className={marksCss.tdd} >{item.TotalMarks}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> : null}
            <div className="componenthead">
              <button className="componentbtn" onClick={()=>this.setState({assignmentComp:false,quizComp:!this.state.quizComp,midsComp:false,finalsComp:false})}><h3>Quiz</h3></button>
            </div>
            {this.state.quizComp?
            <div className="componentbody">
              <div class="tbl-headerr">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                </table>
              </div>
              <div class="tbl-contentt">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    {this.state.assessment.map((item)=>(
                      <tr>
                      <td className={marksCss.tdd} >{item.weightage}</td>
                      <td className={marksCss.tdd} >{item.ObtainedMarks}</td>
                      <td className={marksCss.tdd} >{item.TotalMarks}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> : null}
            <div className="componenthead">
              <button className="componentbtn" onClick={()=>this.setState({assignmentComp:false,quizComp:false,midsComp:!this.state.midsComp,finalsComp:false})}><h3>Mids</h3></button>
            </div>
            {this.state.midsComp?
            <div className="componentbody">
              <div class="tbl-headerr">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                </table>
              </div>
              <div class="tbl-contentt">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    {this.state.assessment.map((item)=>(
                      <tr>
                      <td className={marksCss.tdd} >{item.weightage}</td>
                      <td className={marksCss.tdd} >{item.ObtainedMarks}</td>
                      <td className={marksCss.tdd} >{item.TotalMarks}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> : null}
            <div className="componenthead">
              <button className="componentbtn" onClick={()=>this.setState({assignmentComp:false,quizComp:false,midsComp:false,finalsComp:!this.state.finalsComp})}><h3>Finals</h3></button>
            </div>
            {this.state.finalsComp?
            <div className="componentbody">
              <div class="tbl-headerr">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <thead><tr><td class="text">Weightage</td><td class="text">Obtained Marks</td><td class="text">Total Marks</td></tr></thead>
                </table>
              </div>
              <div class="tbl-contentt">
                <table id="example" cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    {this.state.assessment.map((item)=>(
                      <tr>
                      <td className={marksCss.tdd} >{item.weightage}</td>
                      <td className={marksCss.tdd} >{item.ObtainedMarks}</td>
                      <td className={marksCss.tdd} >{item.TotalMarks}</td>
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