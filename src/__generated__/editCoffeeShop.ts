/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editCoffeeShop
// ====================================================

export interface editCoffeeShop_editCoffeeShop_addCategories {
  __typename: "AddCategoryObj";
  id: number | null;
  name: string | null;
}

export interface editCoffeeShop_editCoffeeShop {
  __typename: "EditCoffeeShopResult";
  ok: boolean;
  error: string | null;
  addCategories: (editCoffeeShop_editCoffeeShop_addCategories | null)[] | null;
  deleteCategories: (number | null)[] | null;
}

export interface editCoffeeShop {
  editCoffeeShop: editCoffeeShop_editCoffeeShop;
}

export interface editCoffeeShopVariables {
  id: number;
  name?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  deletePhotoIdArr?: (number | null)[] | null;
  addPhotoUrl?: string | null;
  prevCategories?: (string | null)[] | null;
  categories?: string | null;
}
