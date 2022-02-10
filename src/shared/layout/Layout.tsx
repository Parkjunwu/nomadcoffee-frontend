import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;
const CenterContainer = styled.div`
  max-width: 630px;
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex:1;
`;
const Header = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;1,800&display=swap');
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
`;

const Layout:React.FC<{title:string}> = ({children,title}) => {
  return (
    <Container>
      <CenterContainer>
        <HeaderContainer><Header>{title}</Header></HeaderContainer>
        {children}
      </CenterContainer>
    </Container>
  )
}
export default Layout;