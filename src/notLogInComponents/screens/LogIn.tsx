import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from "react-router-dom";
import { logInUser } from "../../client";
import PageTitle from "../../shared/PageTitle";
import { login, loginVariables } from "../../__generated__/login";
import BodyContainer from "../components/BodyContainer";
import { Form, SubmitBtn, TextInput } from "../components/FormComponent";
import { LinkBtn, LinkBtnSmall } from "../components/LinkBtn";
import LinkContainer from "../components/LinkContainer";
import LinkToCreateAccount from "../components/LinkToCreateAccount";
import LinkToFindUser from "../components/LinkToFindUser";
import LOGIN_MUTATION from "../graphqlQuery/logIn";
import Layout from "../layout/Layout";

interface Ilocation {
  username: string;
  password: string;
  result?: {message:string};
}

const LogIn = () => {
  const history = useHistory();
  const location = useLocation<Ilocation>();
  const { register, handleSubmit, errors, setError } = useForm<Ilocation>({
    mode:"onChange",
    defaultValues:{
      username:location?.state?.username,
      password:location?.state?.password,
    }
  });

  const [login,{loading}] = useMutation<login,loginVariables>(LOGIN_MUTATION)
  const onSubmit = async (data) => {
    if(loading) return;
    const { username, password } = data
    const result = await login({
      variables:{
        username,
        password,
      }
    })
    if(result.data.login.ok) {
      logInUser(result.data.login.token)
      history.push("/")
    } else {
      setError("result", {message:result.data.login.error})
    }
  };
  // console.log(data)
  return (
    <Layout>
      <PageTitle titleName="Create Account"/>
      <BodyContainer flex={1.5}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInput ref={register({required:true,})} name="username" type="text" placeholder="Username" />
          {errors?.username?.message}
          <TextInput ref={register({required:true,})} name="password" type="password" placeholder="Password" />
          {errors?.password?.message}
          <SubmitBtn type="submit" value="Log In" onSubmit={handleSubmit(onSubmit)} disabled={loading?true:false}/>
          {errors?.result?.message}
        </Form>
        
      </BodyContainer>
      <LinkContainer flex={0.5}>
        <LinkBtn><LinkToCreateAccount /></LinkBtn>
        <LinkBtnSmall><LinkToFindUser /></LinkBtnSmall>
      </LinkContainer>
    </Layout>
  );
}
export default LogIn;