import { Route, Switch, useLocation } from "react-router";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";


import Sidebar from "../sideBar";
import Home from "../home"
import Student from "../student";
import Teacher from "../teacher";


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(137, 171, 245, 0.37);
`;

function Main() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/adminhome" component={Home} />
            <Route path="/adminhome/student" component={Student} />
            <Route path="/adminhome/teacher" component={Teacher} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default Main;