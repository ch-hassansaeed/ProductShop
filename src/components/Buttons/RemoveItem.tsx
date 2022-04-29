import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../Interfaces/Product";
import { decrementItem } from "../../store/actions/actionCreators/addToCartAction";

import "./Items.css";

interface RemoveItemProps {
  product: Product;
}
export const RemoveItemPrimary = (props: RemoveItemProps) => {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(decrementItem(product._id))}
      className="cartbtn"
    >
      &#8722;
    </button>
  );
};

export const RemoveItemSecondary = (props: RemoveItemProps) => {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(decrementItem(product._id))}
      className="cartbtn individual"
    >
      &#8722;
    </button>
  );
};

export const RemoveItemTertiary = (props: RemoveItemProps) => {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(decrementItem(product._id))}
      className="cartbtn item__cart"
    >
      &#8722;
    </button>
  );
};
