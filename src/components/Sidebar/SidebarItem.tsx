import React from "react";
import { Product } from "../../Interfaces/Product";
import { AddItemTertiary } from "../Buttons/AddItem";
import { RemoveItemTertiary } from "../Buttons/RemoveItem";

interface SidebarItemProps {
  key: string;
  vegetable: Product;
}
const SidebarItem = (props: SidebarItemProps): any => {
  const { vegetable } = props;
  const vegetablePrice = vegetable?.price ?? 0;
  const vegetableQuantity = vegetable?.quantity ?? 0;
  return (
    <div className="cart__item">
      <img
        className="cart__item--img"
        src={vegetable.image}
        alt={vegetable.name}
      />
      <div className="cart--item--details">
        <h6>{vegetable.name}</h6>
        <p className="quantity__cart--ind">{vegetable.unit}</p>
        <div className="btnpurchasing btnpurchasing__finalcart">
          <div className="btnpurchasing__cart">
            <RemoveItemTertiary product={vegetable} />
            <p className="tertiary__counter">{vegetable.quantity}</p>
            <AddItemTertiary product={vegetable} />
            <p className="multiplication__cart">&#10006;</p>
            <p className="priceitem__cart">&euro;{vegetable.price}</p>
          </div>
          <div className="priceitem__total">
            <p>&euro;{vegetablePrice * vegetableQuantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
