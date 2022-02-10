import { gql } from "@apollo/client";

const EDIT_COFFEE_SHOP_MUTATION = gql`
  mutation editCoffeeShop(
    $id:Int!,
    $name:String,
    $latitude:String,
    $longitude:String,
    $deletePhotoIdArr:[Int],
    $addPhotoUrl:String,
    $prevCategories:[String],
    $categories:String
  ) {
    editCoffeeShop(
      id:$id,
      name:$name,
      latitude:$latitude,
      longitude:$longitude,
      deletePhotoIdArr:$deletePhotoIdArr,
      addPhotoUrl:$addPhotoUrl,
      prevCategories:$prevCategories,
      categories:$categories,
    ) {
      ok
      error
    }
  }
`;

export default EDIT_COFFEE_SHOP_MUTATION;