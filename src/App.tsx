import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderCheckout from "./components/HeaderCheckout/HeaderCheckout";
import Home from "./pages/Home/Home";
import BadRequest from "./pages/BadRequest";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Chekout/Checkout";

import "./App.css";
//import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const location: any = useLocation();

  const getHeader = () => {
    if (location.pathname === "/checkout") {
      return <HeaderCheckout />;
    } else {
      return <Header />;
    }
  };

  const isModal = location.state && location.state.modal;

  return (
    <div className="grid-container">
      {getHeader()}
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route component={BadRequest} />
        </Switch>
        {isModal && (
          <Route exact path="/product/:id" component={ProductDetails} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
