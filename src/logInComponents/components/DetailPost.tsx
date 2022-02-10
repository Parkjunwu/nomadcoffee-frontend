import React from "react";
import styled from "styled-components";
import { color } from "../../color";

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const TextInput = styled.input`
  padding: 8px 15px;
  border-radius: 30px;
  margin-top: 10px;
  width: 60%;
  font-size: 16px;
`;
const SubmitBtn = styled.input`
  background-color: ${color.btnBackgroundColor};
  color:${color.btnTextColor};
  padding: 10px 15px;
  border-radius: 30px;
  margin-top: 20px;
  width: 50%;
  font-size: 16px;
  cursor: pointer;
`;

const DetailPost = ({register,watch,errors,submitHandle}) => {

  return (
    <>
      {/* <ImageInput ref={register} src='No-image.png' /> */}
        <img src={watch("photoUrl") }></img>
        {/* 이건 S3 넣는 거고 일단 url
        <input type="file" name="file" id="cheese" style={{display:"none"}}/>
        <label htmlFor="cheese">Choose Photo</label> */}
        <Form onSubmit={submitHandle}>
          <TextInput ref={register} type="url" name="photoUrl" placeholder="Photo Url"/>
          <TextInput ref={register({required:true})} type="text" name="name" placeholder="Coffee Shop Name"/>
          <TextInput ref={register({required:true})} type="text" name="latitude" placeholder="Latitude"/>
          <TextInput ref={register({required:true})} type="text" name="longitude" placeholder="Longitude"/>
          <TextInput ref={register} type="text" name="categories" placeholder="Categories"/>
          <SubmitBtn type="submit" value="Upload" onSubmit={submitHandle}/>
        </Form>
        {errors?.result?.message}
    </>
  );
}
export default DetailPost;