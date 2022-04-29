import * as actionTypes from "../actionTypes/addToCartTypes";

export const purchasingState =
  (productId: any) =>
  (
    dispatch: (arg0: { type: string; payload: any; id: any }) => void,
    getState: () => {
      (): any;
      new (): any;
      products: any;
      cart: { (): any; new (): any; cartData: any };
    },
  ) => {
    const data = getState().products;

    const product = data.vegetables.find(
      (x: { _id: any }) => x._id === productId,
    );

    dispatch({
      type: actionTypes.PURCHASING_STATE,
      payload: product,
      id: productId,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartData));
  };

export const incrementItem =
  (productId: any) =>
  (
    dispatch: (arg0: { type: string; id: any }) => void,
    getState: () => {
      (): any;
      new (): any;
      cart: { (): any; new (): any; cartData: any };
    },
  ) => {
    dispatch({
      type: actionTypes.INCREMENT_ITEM,
      id: productId,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartData));
  };

export const decrementItem =
  (productId: any) =>
  (
    dispatch: (arg0: { type: string; id: any }) => void,
    getState: () => {
      (): any;
      new (): any;
      cart: { (): any; new (): any; cartData: any };
    },
  ) => {
    dispatch({
      type: actionTypes.DECREMENT_ITEM,
      id: productId,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartData));
  };

export const sidebarOpen = () => {
  return {
    type: actionTypes.SIDEBAR_OPEN,
  };
};

export const sidebarClose = () => {
  return {
    type: actionTypes.SIDEBAR_CLOSE,
  };
};
