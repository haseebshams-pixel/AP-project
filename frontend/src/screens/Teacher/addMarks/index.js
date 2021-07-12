import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';


import MotionHoc from '../MotionHoc';
import './style.css'
import UserProfile from '../../../Session';

class AddMarksComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            totalMarks: 0,
            obtainedMarks: 0,
            weightage: 0,
            value: '',
            type: '',
            registrationID: 0,
            students: [],
            userId:Cookies.get("userId"),
        };
    }
    render() {
        const submit = () => {
            axios.post("http://localhost:8080/api/assessment/", {
                totalMarks: this.state.totalMarks,
                obtainedMarks: this.state.obtainedMarks,
                type:this.state.type,
                weightage:this.state.weightage,
                registrationID: this.state.registrationID
            })
        }
        const listItems = this.state.students.map((item) => (
            <tr>
                <td width="150px">{item.rollNo}</td>
                <td width="140px">{item.name}</td>
                <td ><input width="50px" placeholder="Obtained Marks" type="number" onChange={(e)=>this.setState({obtainedMarks:e.target.value,registrationID:item.registrationid})}/></td>
                <td ><input width="50px" placeholder="Total Marks" type="number" onChange={(e)=>this.setState({totalMarks:e.target.value,registrationID:item.registrationid})} /></td>
                <td ><input width="50px" placeholder="Weightage" type="number" onChange={(e)=>this.setState({weightage:e.target.value,registrationID:item.registrationid})}/></td>
                <td width="150px"><button className="button" onClick={()=>submit()}><h3>Save</h3></button></td>

            </tr>
        ))
        const handleClick = () => {
            axios.get(`http://localhost:8080/api/addAttendance/getRegisteredStudents/${this.state.value}/${this.state.userId}`)
                .then((res) => {
                    this.setState({students: res.data });
                    console.log(this.state.students);
                })
        }
        return (
            <>
                <div className="starter">
                    <div style={{ marginRight: "1%" }} onChange={(e) => this.setState({ value: e.target.value}, () => handleClick())} value={this.state.value}>
                        <select className="options">
                            <option value="-">-</option>
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                            <option value="C">Section C</option>
                            <option value="D">Section D</option>
                        </select>
                    </div>
                    <div style={{ textAlign: 'center' }} onChange={(e) => this.setState({ type: e.target.value })} value={this.state.type}>
                        <select className="options">
                            <option value="-">-</option>
                            <option value="quiz">Quiz</option>
                            <option value="assignment">Assignment</option>
                            <option value="mid">Mid</option>
                            <option value="final">Final</option>
                        </select>
                    </div>
                </div>

                <div class="first">
                    <div class="second">
                        <h3 style={{ color: 'black' }}> Add Marks </h3>
                    </div>
                    <div>
                        <div class="table-header">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <thead><tr><td class="text" width="50px">Roll Number</td><td class="text" width="50px">Name</td><td class="text" width="100px">Obtained Marks</td><td class="text" width="100px">Total Marks</td><td class="text" width="100px">Weightage</td><td class="text" width="100px">Status</td></tr></thead>
                            </table>
                        </div>
                        <div class="table-content">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    {listItems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

const AddMarks = MotionHoc(AddMarksComponent);

export default AddMarks;