import React, { Component } from 'react'

import './style.css';
import MotionHoc from '../MotionHoc';

class StudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    rollno: '18L-1171',
                    name: 'Haseeb Shams',
                    batch:'2018',
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 2,
                    rollno: '18L-1089',
                    name: 'Momin Iqbal',
                    batch:'2018',
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 3,
                    rollno: '18L-0939',
                    name: 'Saqlain Haider',
                    batch:'2018',
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 4,
                    rollno: '18L-2152',
                    name: 'Faiq Rauf',
                    batch:'2018',
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 5,
                    rollno: '18L-1227',
                    name: 'Naveed Ali',
                    batch:'2018',
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
                {
                    id: 6,
                    rollno: '18L-1062',
                    name: 'Hammad Ahmed',
                    batch:'2018',
                    degree:'BS(CS)',
                    cnic:'36501-6349484-7',
                    phonenumber:'0307-7044820',
                },
            ]
        };
    }
    render() {
        const listItems = this.state.students.map((item) => (
            <tr>
                <td width="100px">{item.rollno}</td>
                <td width="100px">{item.name}</td>
                <td width="170px">{item.cnic}</td>
                <td width="100px">{item.phonenumber}</td>
                <td width="100px">{item.batch}</td>
                <td width="100px">{item.degree}</td>
            </tr>
        ))
        return (
            <>
                <div class="first">
                    <div class="second">
                        <h3 style={{ color: 'black' }}> Students </h3>
                    </div>
                    <div>
                        <div class="table-header">
                            <table id="example" cellpadding="0" cellspacing="0" border="0">
                                <thead><tr><td class="text" width="100px">Roll Number</td><td class="text" width="100px">Name</td><td class="text" width="170px">CNIC</td><td class="text" width="100px">PhoneNumber</td><td class="text" width="100px">Batch</td><td class="text" width="100px">Degree</td></tr></thead>
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
                    <button className="btnddd"><h2>Add Student</h2></button>
                </div>

            </>
        )
    }
}

const Student = MotionHoc(StudentComponent);

export default Student;
