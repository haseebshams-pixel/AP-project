import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';
import { ReactComponent as BGIcon } from '../../../images/adminbg.svg';
import { ReactComponent as AvatarIcon } from '../../../images/avatar.svg';
import wave from '../../../images/wave.png';

const Login = () => {
    const history = useHistory();
    return (
        <div>
            <img class="wave" src={wave} />
            <div class="container">
                <div class="BGIcon">
                    <BGIcon className="img" />
                </div>
                <div class="login-content">
                    <div class="form">
                        <AvatarIcon className="avatar" />
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="div">
                                <input type="text" class="input" placeholder ="Username" />
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                <input type="password" class="input" placeholder = "Password"/>
                            </div>
                        </div>
                        <button class="btn" onClick={()=>history.push('/adminhome')}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;
