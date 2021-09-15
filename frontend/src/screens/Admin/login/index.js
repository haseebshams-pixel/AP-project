import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import "./style.css";
import { ReactComponent as BGIcon } from "../../../images/adminbg.svg";
import { ReactComponent as AvatarIcon } from "../../../images/avatar.svg";
import wave from "../../../images/wave.png";
import Main from "../../Student/main";
import Main2 from "../../Teacher/main";
import Main3 from "../main";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");
  const [loggedin, setLoggedin] = useState(Cookies.get("loggedin"));
  const [type, setType] = useState(Cookies.get("type"));
  function authenticate() {
    axios
      .get(
        `http://localhost:8080/api/user/${username}/${password}/${userType}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data != -1) {
          toast.success("User Logged In Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          history.push("/adminhome");
        } else {
          alert("Incorrect Credentials");
        }
      });
  }
  if (loggedin != "true") {
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
                  <input
                    type="text"
                    class="input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input
                    type="password"
                    class="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button class="btn" onClick={authenticate}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (type === "student") {
      history.push("/studhome");
      return <Main />;
    } else if (type === "teacher") {
      history.push("/teachhome");
      return <Main2 />;
    } else if (type === "admin") {
      history.push("/adminhome");
      return <Main3 />;
    }
  }
};
export default Login;
