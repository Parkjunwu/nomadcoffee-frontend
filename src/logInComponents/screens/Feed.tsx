import { gql, useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { changeDarkMode, darkModeVar, logOutUser } from "../../client";
import { color } from "../../color";
import PageTitle from "../../shared/PageTitle";
import { seeCoffeeShops, seeCoffeeShopsVariables } from "../../__generated__/seeCoffeeShops";
import Post from "../components/Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid;
  border-color: ${props=>props.theme.borderColor};
  position: relative;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
  font-style: italic;
  padding:10px 0px;
  color:${color.btnBackgroundColor};
`;
const BtnContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  margin: auto 0px;
`;
const LogOutBtn = styled.span`
  display:inline-block;
  margin-right: 10px;
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
const CenterContainer = styled.div`
  max-width: 530px;
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
  /* background-color: tomato; */
`;

const SEE_COFFEE_SHOPS = gql`
  query seeCoffeeShops($cursor:Int){
    seeCoffeeShops(cursor:$cursor) {
      id
      name
      latitude
      longitude
      user{
        id
        username
        isMe
        avatarURL
      }
      photos{
        id
        url
      }
      wholeCategories{
        id
        name
        slug
      }
      # categories{
      #   id
      #   name
      #   slug
      # }
    }
  }
`;

const Feed = () => {
  const history = useHistory();
  const darkMode = useReactiveVar(darkModeVar)
  const logOutClick = () => logOutUser(history)
  const darkModeClick = () => changeDarkMode()
  const {data} = useQuery<seeCoffeeShops,seeCoffeeShopsVariables>(SEE_COFFEE_SHOPS,{
    // variables:{
    //   cursor: 10,
    // }
  });
  console.log(data)
  return (
    <Container>
      <PageTitle titleName="Feed"/>
      <Header>
        <Title>Nomad Coffee</Title>
        <BtnContainer>
          <LogOutBtn onClick={logOutClick}>Log out</LogOutBtn>
          <DarkModeBtn onClick={darkModeClick}>{darkMode?"light mode":"dark mode"}</DarkModeBtn>
        </BtnContainer>
      </Header>
      <CenterContainer>
        {data?.seeCoffeeShops?.map(shop => <Post {...shop} key={shop.id} />)}
      </CenterContainer>
    </Container>
  );
}
export default Feed;