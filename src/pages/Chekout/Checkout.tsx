import { useSelector } from "react-redux";
import "./Checkout.css";
import CheckOutOrder from "../../components/CheckoutForm/CheckoutOrder/CheckoutOrder";

import "./Checkout.css";

const Checkout = (props: any) => {
  const cart = useSelector((state: any) => state.cart);

  if (cart.cartData.totalQuantity === 0) {
    props.history.push("/");
  }

  return (
    <div className="checkout-wrapper wrapper">
      <div className="checkout">
        <div>Cash on Delivery</div>
        <div>Please confirm your order so we can process it..</div>
        <div>
          <input
            type="email"
            className="email-address"
            placeholder="Enter your Email..."
          />
        </div>
        <div>
          <button
            className="btn submit__btn"
            onClick={() => alert("Redirect to Paypal")}
          >
            Complete Order
          </button>
        </div>
      </div>
      <CheckOutOrder />
    </div>
  );
};

export default Checkout;
