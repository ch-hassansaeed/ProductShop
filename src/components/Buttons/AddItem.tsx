import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../Interfaces/Product";
import { incrementItem } from "../../store/actions/actionCreators/addToCartAction";

import "./Items.css";
interface AddItemProps {
  product: Product;
}
export const AddItemPrimary = (props: AddItemProps) => {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(incrementItem(product._id))}
      className="cartbtn"
    >
      &#43;
    </button>
  );
};

export const AddItemSecondary = (props: AddItemProps) => {
  const dispatch = useDispatch();
  const { product } = props;

  return (
    <button
      onClick={() => dispatch(incrementItem(product._id))}
      className="cartbtn individual"
    >
      &#43;
    </button>
  );
};

export const AddItemTertiary = (props: AddItemProps) => {
  const dispatch = useDispatch();
  const { product } = props;

  return (
    <button
      onClick={() => dispatch(incrementItem(product._id))}
      className="cartbtn item__cart"
    >
      &#43;
    </button>
  );
};
