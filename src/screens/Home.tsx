import { useReactiveVar } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../client";

const LogOutBtn = styled.span`
  display:inline-block;
  margin-top: 10px;
  background-color: #ff6666;
  padding: 5px 10px;
  border-radius: 30px;
  :hover{
    cursor: pointer;
  }
`;
const DarkModeBtn = styled(LogOutBtn)`
  background-color: #999999;
`;

const Home = () => {
  const darkMode = useReactiveVar(darkModeVar)
  const logOutClick = () => isLoggedInVar(false)
  const darkModeClick = () => darkModeVar(!darkMode)
  return (
    <div>
      <h2>Home</h2>
      <LogOutBtn onClick={logOutClick}>Log out</LogOutBtn>
      <br></br>
      <DarkModeBtn onClick={darkModeClick}>{darkMode?"change to light mode":"change to dark mode"}</DarkModeBtn>
    </div>
  );
}
export default Home;