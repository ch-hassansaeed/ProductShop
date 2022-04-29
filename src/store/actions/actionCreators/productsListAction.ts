import * as actionTypes from "../actionTypes/productsListTypes";
import { productsMockResponse } from "../../../data/dummyData";
import { Product } from "../../../Interfaces/Product";

const vegetablesList = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: actionTypes.VEGETABLE_LIST_REQUEST,
  });
  try {
    const data: Product[] = productsMockResponse;
    if (localStorage.getItem("cartItems")) {
      const products = getState().cart.cartData.vegetablesCart;
      products.map((product: Product) => {
        const index = data.findIndex((x) => x._id === product._id);
        data[index] = product;
        return data;
      });
    }

    dispatch({
      type: actionTypes.VEGETABLE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({ type: actionTypes.VEGETABLE_LIST_FAIL, payload: error.message });
  }
};

export const filteredProducts =
  (value: string) =>
  (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: actionTypes.VEGETABLE_FILTER_SEARCH,
      payload: value,
    });
  };

export default vegetablesList;
