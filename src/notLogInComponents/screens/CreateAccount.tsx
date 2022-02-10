import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import PageTitle from "../../shared/PageTitle";
import { createUser, createUserVariables } from "../../__generated__/createUser";
import { Form, SubmitBtn, TextInput } from "../components/FormComponent";
import { LinkBtnSmall } from "../components/LinkBtn";
import LinkToLogIn from "../components/LinkToLogIn";
import { useHistory } from "react-router-dom";
import { urlLink } from "../../urlLink";
import CREATE_USER_MUTATION from "../graphqlQuery/createUser";
import BodyContainer from "../../shared/layout/BodyContainer";
import LinkContainer from "../components/LinkContainer";
import NotLogInLayout from "../layout/NotLogInLayout";


function CreateAccount() {
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm({
    mode:"onBlur"
  });
  
  const [createAccount,{loading}] = useMutation<createUser,createUserVariables>(CREATE_USER_MUTATION)

  const onSubmit = async(data) => {
    if(loading) return;
    const {
      username,
      password,
      email,
      name,
      location,
      avatarURL,
      githubUsername
    } = data
    const result = await createAccount({
      variables:{
        username,
        password,
        email,
        name,
        location,
        ...( avatarURL && { avatarURL }),
        ...( githubUsername && {githubUsername}),
      }
    })
    if(result.data.createUser.ok) {
      history.push(urlLink.LOGIN,{
        message:"Account created. Please Log In",
        username,
        password,
      });
    } else {
      setError("result", {message:result.data.createUser.error})
    }
  };
  // console.log(data)
  return (
    <NotLogInLayout>
      <PageTitle titleName="Create Account"/>
      <BodyContainer flex={3}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInput ref={register({required:true,})} name="username" type="text" placeholder="Username" />
          {errors?.username?.type}
          <TextInput ref={register({required:true,})} name="name" type="text" placeholder="Name" />
          {errors?.name?.type}
          <TextInput ref={register({required:true,})} name="email" type="email" placeholder="Email" />
          {errors?.email?.type}
          <TextInput ref={register({required:true,})} name="password" type="password" placeholder="Password" />
          {errors?.password?.type}
          <TextInput ref={register({required:true,})} name="location" type="text" placeholder="Location" />
          {errors?.location?.type}
          <TextInput ref={register} name="avatarURL" type="url" placeholder="avatar URL" />
          <TextInput ref={register} name="githubUsername" type="email" placeholder="github Username" />
          {errors?.githubUsername?.type}
          
          <SubmitBtn type="submit" value="Create Account" onSubmit={handleSubmit(onSubmit)} disabled={loading?true:false}/>
          {errors?.result?.message}
        </Form>
      </BodyContainer>
      <LinkContainer flex={0.5}>
        <LinkBtnSmall><LinkToLogIn /></LinkBtnSmall>
      </LinkContainer>
    </NotLogInLayout>
  );
}
export default CreateAccount;