import * as actionTypes from "./actionTypes";

export function getProductsSuccess(categories){
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: categories }
}

export function getCProducts() {
  return function(dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}
