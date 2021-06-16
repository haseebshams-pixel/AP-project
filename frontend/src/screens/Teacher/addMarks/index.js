import React, { Component } from 'react'

import MotionHoc from '../MotionHoc';
import './style.css'

class AddMarksComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '18-05-2021',
            students: [
                {
                    id: 1,
                    rollno: '18L-1171',
                    name: 'Haseeb Shams',
                },
                {
                    id: 2,
                    rollno: '18L-1089',
                    name: 'Momin Iqbal',
                },
                {
                    id: 3,
                    rollno: '18L-0939',
                    name: 'Saqlain Haider',
                },
                {
                    id: 4,
                    rollno: '18L-2152',
                    name: 'Faiq Rauf',
                },
                {
                    id: 5,
                    rollno: '18L-1227',
                    name: 'Naveed Ali',
                },
                {
                    id: 6,
                    rollno: '18L-1062',
                    name: 'Hammad Ahmed',
                },
            ],
            assesment: [],
        };
    }
    render() {
        const listItems = this.state.students.map((item) => (
            <tr>
                <td width="150px">{item.rollno}</td>
                <td width="140px">{item.name}</td>
                <td ><input width="50px" placeholder="Obtained Marks" /></td>
                <td ><input width="50px" placeholder="Total Marks" /></td>
                <td ><input width="50px" placeholder="Weightage" /></td>

            </tr>
        ))
        return (
            <>
                <div className="starter">
                    <div style={{ marginRight: "1%" }}>
                        <select className="options">
                            <option value="-">-</option>
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                            <option value="C">Section C</option>
                            <option value="D">Section D</option>
                        </select>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <select className="options">
                            <option value="-">-</option>
                            <option value="Quiz">Quiz</option>
                            <option value="Assignment">Assignment</option>
                            <option value="Mid">Mid</option>
                            <option value="Final">Final</option>
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
                                <thead><tr><td class="text" width="50px">Roll Number</td><td class="text" width="50px">Name</td><td class="text" width="100px">Obtained Marks</td><td class="text" width="100px">Total Marks</td><td class="text" width="100px">Weightage</td></tr></thead>
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
                <div className="btnCont">
                    <button className="btndd"><h2>Save</h2></button>
                </div>

            </>
        )
    }
}

const AddMarks = MotionHoc(AddMarksComponent);

export default AddMarks;