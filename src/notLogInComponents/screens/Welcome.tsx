import React from "react";
import styled from "styled-components";
import { color } from "../../color";
import PageTitle from "../../shared/PageTitle";
import { LinkBtn, LinkBtnSmall } from "../components/LinkBtn";
import LinkToCreateAccount from "../components/LinkToCreateAccount";
import LinkToFindUser from "../components/LinkToFindUser";
import LinkToLogIn from "../components/LinkToLogIn";
import NotLogInLayout from "../layout/NotLogInLayout";

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
    <NotLogInLayout>
      <PageTitle titleName="Welcome" />
      <BodyContainer>
        <CreateAccountBtn>
          <LinkToCreateAccount />
        </CreateAccountBtn>
        <LinkBtn><LinkToLogIn /></LinkBtn>
        <LinkBtnSmall><LinkToFindUser /></LinkBtnSmall>
      </BodyContainer>
    </NotLogInLayout>  
  );
}
export default Welcome;