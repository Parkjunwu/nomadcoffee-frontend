import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import BodyContainer from "../../shared/layout/BodyContainer";
import Layout from "../../shared/layout/Layout";
import PageTitle from "../../shared/PageTitle";
import { urlLink } from "../../urlLink";
import { createCoffeeShop, createCoffeeShopVariables } from "../../__generated__/createCoffeeShop";
import DetailPost from "../components/DetailPost";
import { IForm } from "../form";

const CREATE_COFFEE_SHOP_MUTATION = gql`
  mutation createCoffeeShop(
    $name:String!,
    $latitude:String!,
    $longitude:String!,
    $photoUrl:String,
    $categories:String
  ){
    createCoffeeShop(
      name:$name,
      latitude:$latitude,
      longitude:$longitude,
      photoUrl:$photoUrl,
      categories:$categories
    ) {
      ok
      error
    }
  }
`;

const AddPost = () => {
  const history = useHistory();
  const [createCoffeeShop,{loading}] = useMutation<createCoffeeShop,createCoffeeShopVariables>(CREATE_COFFEE_SHOP_MUTATION);
  const {register,handleSubmit,setError,watch,errors} = useForm<IForm>();
  const onSubmit = async(data) => {
    if(loading) return;
    const {
      name,
      latitude,
      longitude,
      photoUrl,
      categories,
    } = data
    const result = await createCoffeeShop({
      variables:{
        name,
        latitude,
        longitude,
        ...( photoUrl && { photoUrl }),
        ...( categories && { categories }),
      }
    })
    if(result.data.createCoffeeShop.ok) {
      history.push(urlLink.FEED)
    } else {
      setError("result", {message: result.data.createCoffeeShop.error})
    }
  }

  return (
    <Layout title="Add Post">
      <PageTitle titleName="Add Post"/>
      <BodyContainer flex={4}>
        <DetailPost register={register} watch={watch} errors={errors} submitHandle={handleSubmit(onSubmit)}/>
      </BodyContainer>
    </Layout>
  )
}
export default AddPost;