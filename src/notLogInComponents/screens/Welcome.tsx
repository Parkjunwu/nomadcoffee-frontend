import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../color";
import PageTitle from "../../shared/PageTitle";
import { LinkBtn, LinkBtnSmall } from "../components/LinkBtn";
import LinkToCreateAccount from "../components/LinkToCreateAccount";
import LinkToFindUser from "../components/LinkToFindUser";
import LinkToLogIn from "../components/LinkToLogIn";
import Layout from "../layout/Layout";

const BodyContainer = styled.div`
  display: flex;
  flex:1.3;
  width:100%;
  /* background-color: white; */
  flex-direction: column;
  align-items: center;
`;
const CreateAccountBtn = styled.span`
  background-color: ${color.btnBackgroundColor};
  padding: 20px 50px;
  border-radius: 30px;
  font-size: 25px;
  text-align: center;
  width: 80%;
  a {
    color:${color.btnTextColor}
  }
`;
function Welcome() {
  return (
    <Layout>
      <PageTitle titleName="Welcome" />
      <BodyContainer>
        <CreateAccountBtn>
          <LinkToCreateAccount />
        </CreateAccountBtn>
        <LinkBtn><LinkToLogIn /></LinkBtn>
        <LinkBtnSmall><LinkToFindUser /></LinkBtnSmall>
      </BodyContainer>
    </Layout>  
  );
}
export default Welcome;