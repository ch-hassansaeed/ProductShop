import React from "react";
import { Link } from "react-router-dom";

import "./HeaderCheckout.css";

const HeaderCheckout = () => {
  return (
    <header className="row header-checkout">
      <div>
        <Link className="brand" to="/">
          ProductShop
        </Link>
      </div>
      <div className="header-item header-item--checkout-promise">
        <div className="checkout-promise-item">
          {`Hi Guest please complete your order`}
        </div>
      </div>
    </header>
  );
};

export default HeaderCheckout;
