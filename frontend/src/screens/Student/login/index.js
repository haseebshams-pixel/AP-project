import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";

import './style.css';
import { ReactComponent as BGIcon } from '../../../images/bg.svg';
import { ReactComponent as AvatarIcon } from '../../../images/avatar.svg';
import wave from '../../../images/wave.png';
import UserProfile from '../../../Session';

const Login = () => {
    const history = useHistory();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [userType,setUserType]=useState('student');
    function authenticate () {
        axios.get(`http://localhost:8080/api/user/${username}/${password}/${userType}`)
        .then((res)=>{
            console.log(res);
            if(res.data!=-1){
                history.push("/studhome");
                UserProfile.setID(res.data);
                UserProfile.setLoggedIn(true);
            } else {
                alert('Incorrect Credentials');
            }
            
        })
    }
    return (
        <div>
            <img className="wave" src={wave} />
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
                                <input type="text" class="input" placeholder ="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                <input type="password" class="input" placeholder = "Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <button className="btn" onClick={authenticate} >Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;
