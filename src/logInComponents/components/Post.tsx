import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../color";
import { urlLink } from "../../urlLink";
import { seeCoffeeShops_seeCoffeeShops } from "../../__generated__/seeCoffeeShops";

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  border: 1px solid;
  border-color: ${props=>props.theme.borderColor};
`;
const Header = styled.div`
  border-bottom: 1px solid ;
  border-color: ${props=>props.theme.borderColor};
  padding: 5px 20px 2px 20px;
`;
const CoffeeShopName = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;1,800&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 700;
`;
const CoffeeShopLocation = styled.div`
  margin-top: 2px;
  font-size: 14px;
`;
const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit:cover;
  border-bottom: 1px solid;
  border-color: ${props=>props.theme.borderColor};
`;
const Footer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* font-size: 18px; */
  width: 100%;
  flex-direction: column;
`;
const CoffeeShopCategoryContainer = styled.div`
  padding: 5px 30px;
  border-bottom: 1px solid;
  border-color: ${props=>props.theme.borderColor};
`;
const CoffeeShopCategory = styled.span`
  cursor: pointer;
  padding-right: 20px;
  color: ${color.btnBackgroundColor};
  :hover{
    color: inherit;
  }
`;
const UserContainer = styled.div`
  display: flex;
  /* flex: 1; */
  padding: 8px 16px;
  align-items: center;
  position: relative;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  object-fit: cover;
`;
const Username = styled.span`
  margin-left: 10px;
`;
const EditPhoto = styled.span`
  position: absolute;
  right: 10px;
  font-size: 10px;
`;

const Post = (props:seeCoffeeShops_seeCoffeeShops) => {
  return (
    <Container>
      <Header>
        <CoffeeShopName>{props.name}</CoffeeShopName>
        <CoffeeShopLocation>latitude : {props.latitude}, longitude : {props.longitude}</CoffeeShopLocation>
      </Header>
      {/* <Photo src={props.photos[0].url}/> */}
      {props.photos?.map(photo =>  <Photo key={photo.id} src={photo.url}/>)}
      <Footer>
        <CoffeeShopCategoryContainer>
          {/* <CoffeeShopCategory>#aaa</CoffeeShopCategory>
          <CoffeeShopCategory>#aaa</CoffeeShopCategory>
          <CoffeeShopCategory>#aaa</CoffeeShopCategory>
          <CoffeeShopCategory>#aaa</CoffeeShopCategory> */}
          {props.wholeCategories?.map(category => <CoffeeShopCategory key={category.id}>{category.name}</CoffeeShopCategory>)}
        </CoffeeShopCategoryContainer>
        <UserContainer>
          <UserAvatar src={props.user?.avatarURL ?? 'No-image.png'} />
          <Username>{props.user.username}</Username>
          {props.user.isMe?<EditPhoto><Link to={`${urlLink.EDIT_POST_BASE}/${props.id}`} >Edit&Delete</Link></EditPhoto>:null}
        </UserContainer>
      </Footer>
    </Container>
  )
}
export default Post;