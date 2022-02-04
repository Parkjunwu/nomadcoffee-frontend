import React from "react";
import styled from "styled-components";
import { isLoggedInVar } from "../client";

const Btn = styled.span`
  display:inline-block;
  margin-top: 10px;
  background-color: #ff6666;
  padding: 5px 10px;
  border-radius: 30px;
  :hover{
    cursor: pointer;
  }
`;

const LogIn = () => {
  const logInClick = () => isLoggedInVar(true)
  return (
    <div>
      <h2>LogIn</h2>
      <Btn onClick={logInClick}>Log In</Btn>
    </div>
  );
}
export default LogIn;