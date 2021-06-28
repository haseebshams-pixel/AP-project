import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import wave from '../../images/wave.png'
import { ReactComponent as UniIcon } from '../../images/university.svg';
import { ReactComponent as StudentIcon } from '../../images/student.svg';
import { ReactComponent as TeacherIcon } from '../../images/teacher.svg';


class Choose extends Component {
    render() {
        return (
            <>
                <div>
                    <img className="wave" src={wave} />
                </div>
                <div className="back">
                    <div className="head">
                        <UniIcon className="logoStyle" />
                        <h1 className="headtext">Flex Lite</h1>
                    </div>
                    <div className="firstcontent">
                        <Link className="box" to="/studLogin">
                            <div >
                                <StudentIcon className="studIcon" />
                                <h2>Student</h2>
                            </div>
                        </Link>
                        <Link className="box2" to="/teachLogin">
                            <div>
                                <TeacherIcon className="studIcon" />
                                <h2>Teacher</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Choose;