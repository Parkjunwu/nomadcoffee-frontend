import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import BodyContainer from "../../shared/layout/BodyContainer";
import Layout from "../../shared/layout/Layout";
import PageTitle from "../../shared/PageTitle";
import { editCoffeeShop, editCoffeeShopVariables } from "../../__generated__/editCoffeeShop";
import { seeCoffeeShop, seeCoffeeShopVariables } from "../../__generated__/seeCoffeeShop";
import DetailPost from "../components/DetailPost";
import { IForm } from "../form";
import EDIT_COFFEE_SHOP_MUTATION from "../graphqlQuery/editCoffeeShop";
import SEE_COFFEE_SHOP from "../graphqlQuery/seeCoffeeShop";
import editPostOnSubmit from "../logic/editPostOnSubmit";


const EditPost = () => {
  const params = useParams<{id:string}>();
  
  const history = useHistory();
  const {data:seeCoffeeShopData} = useQuery<seeCoffeeShop,seeCoffeeShopVariables>(SEE_COFFEE_SHOP,{
    variables:{
      id:Number(params.id)
    }
  })
  const {register,handleSubmit,setError,watch,errors,setValue} = useForm<IForm>();
  const [editCoffeeShop, {loading:editCoffeeShopLoading}] = useMutation<editCoffeeShop,editCoffeeShopVariables>(EDIT_COFFEE_SHOP_MUTATION)

  useEffect(()=>{
    if(!seeCoffeeShopData?.seeCoffeeShop?.user?.id) return;
    setValue("name",seeCoffeeShopData?.seeCoffeeShop?.name);
    setValue("latitude",seeCoffeeShopData?.seeCoffeeShop?.latitude);
    setValue("longitude",seeCoffeeShopData?.seeCoffeeShop?.longitude);
    setValue("photoUrl",seeCoffeeShopData?.seeCoffeeShop?.photos[0]?.url);
    setValue("categories",seeCoffeeShopData?.seeCoffeeShop?.wholeCategories[0].slug);
  },[seeCoffeeShopData])
  
  // console.log(seeCoffeeShopData)
const onSubmit = editPostOnSubmit({editCoffeeShopLoading,seeCoffeeShopData,editCoffeeShop,history,setError})

  return(
    <Layout title="Edit Post">
      <PageTitle titleName="Edit Post"/>
      <BodyContainer flex={4}>
        <DetailPost register={register} watch={watch} errors={errors} submitHandle={handleSubmit(onSubmit)} />
      </BodyContainer>
    </Layout>
  )
}

export default EditPost;