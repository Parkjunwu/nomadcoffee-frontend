/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeCoffeeShop
// ====================================================

export interface seeCoffeeShop_seeCoffeeShop_user {
  __typename: "User";
  id: number;
}

export interface seeCoffeeShop_seeCoffeeShop_photos {
  __typename: "CoffeeShopPhoto";
  id: number | null;
  url: string | null;
}

export interface seeCoffeeShop_seeCoffeeShop_wholeCategories {
  __typename: "Category";
  id: number | null;
  name: string | null;
  slug: string | null;
}

export interface seeCoffeeShop_seeCoffeeShop {
  __typename: "CoffeeShop";
  id: number | null;
  name: string | null;
  latitude: string | null;
  longitude: string | null;
  user: seeCoffeeShop_seeCoffeeShop_user | null;
  photos: (seeCoffeeShop_seeCoffeeShop_photos | null)[] | null;
  wholeCategories: (seeCoffeeShop_seeCoffeeShop_wholeCategories | null)[] | null;
}

export interface seeCoffeeShop {
  seeCoffeeShop: seeCoffeeShop_seeCoffeeShop | null;
}

export interface seeCoffeeShopVariables {
  id: number;
}
