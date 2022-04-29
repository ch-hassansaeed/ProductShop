import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { sidebarOpen } from "../../store/actions/actionCreators/addToCartAction";
import { filteredProducts } from "../../store/actions/actionCreators/productsListAction";

import "./Header.css";

const Header = () => {
  const history = useHistory();

  const cartInfo = useSelector((state: any) => state.cart.cartData);
  const searchTerm = useSelector((state: any) => state.searchFilter);

  const { totalQuantity, cartTotal } = cartInfo;

  const dispatch = useDispatch();

  return (
    <header className={"row"}>
      <div>
        <Link className="brand" to="/">
          ProductShop
        </Link>
      </div>
      {history.location.pathname === "/" ? (
        <div className="searchbox">
          <input
            type="text"
            name="search"
            className="searchinput"
            value={searchTerm}
            onChange={(e) =>
              dispatch(filteredProducts(e.target.value.toLowerCase()))
            }
            placeholder="Search for product..."
          />
        </div>
      ) : null}

      <div className="btn btnmain__header">
        {!totalQuantity ? (
          <div className="header__cart" onClick={() => dispatch(sidebarOpen())}>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <p className="mycart__header">My Cart</p>
          </div>
        ) : (
          <div className="header__cart" onClick={() => dispatch(sidebarOpen())}>
            <p className="quantity__counter">{totalQuantity}</p>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <p className="mycartprice__header">&euro;{cartTotal}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
