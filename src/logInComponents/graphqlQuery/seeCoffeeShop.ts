import { gql } from "@apollo/client";

const SEE_COFFEE_SHOP = gql`
  query seeCoffeeShop ($id:Int!) {
    seeCoffeeShop (id:$id) {
      id
      name
      latitude
      longitude
      user {
        id
      }
      photos {
        id
        url
      }
      wholeCategories{
        id
        name
        slug
      }
    }
  }
`;

export default SEE_COFFEE_SHOP;