import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import MotionHoc from '../MotionHoc';
import './styles.css'
import UserProfile from '../../../Session';

class TranscriptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId : Cookies.get("userId"),
      transcript:[],
    };
  }
  componentDidMount(){
    axios.get(`http://localhost:8080/api/transcriptdata/${this.state.userId}`)
    .then((res)=>{
      this.setState({transcript:res.data});
      console.log(this.state.transcript)
    })
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
                <thead><tr><td class="text" width="100px">Code</td><td class="text" width="110px">Course Name</td><td class="text"width="60px">CrdHrs</td><td class="text"width="70px">Grade</td><td class="text"width="50px">Points</td><td class="text"width="100px">Type</td></tr></thead>
              </table>
            </div>
            <div class="tbl-contenter">
              <table id="example" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {this.state.transcript.map((item) => (
                    <tr>
                      <td width="100px">{item.courseCode}</td>
                      <td width="150px">{item.name}</td>
                      <td width="90px">{item.creditHrs}</td>
                      <td width="90px">{item.grade}</td>
                      <td width="70px">{item.points}</td>
                      <td width="100px">{item.type}</td>
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