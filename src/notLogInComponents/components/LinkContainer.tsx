import React from "react";
import styled from "styled-components";
import { darkModeVar } from "../../client";

const Container = styled.div<{flex:number}>`
  display: flex;
  flex:${props=>props.flex};
  flex-direction: column;
  align-items: center;
`;
const DarkModeChange = styled.span`
  margin-top: 5px;
  font-size: 30px;
`;

const LinkContainer:React.FC<{flex:number}> = ({children,flex}) => {
  const onClick = () => {
    const darkmode = darkModeVar();
    darkModeVar(!darkmode);
  }
  return (<Container flex={flex}>
    {children}
    <DarkModeChange onClick={onClick}>
      {darkModeVar() ?"☀":"☽"}
    </DarkModeChange>
  </Container>)
}

export default LinkContainer;