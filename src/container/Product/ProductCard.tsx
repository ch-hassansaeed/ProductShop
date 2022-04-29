import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddItemPrimary } from "../../components/Buttons/AddItem";
import { RemoveItemPrimary } from "../../components/Buttons/RemoveItem";
import { Product } from "../../Interfaces/Product";
import { purchasingState } from "../../store/actions/actionCreators/addToCartAction";

import "./ProductCard.css";
interface ProductCardProps {
  product: Product;
}
const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const dispatch = useDispatch();

  useSelector((state: any) => state.cart);

  return (
    <div key={product._id} className="card">
      <Link
        to={{
          pathname: `/product/${product._id}`,
          state: {
            modal: true,
          },
        }}
      >
        <img src={product.image} alt={product.name} className="medium" />
      </Link>
      <div className="cardBody">
        <Link
          to={{
            pathname: `/product/${product._id}`,
            state: {
              modal: true,
            },
          }}
        >
          <h2>{product.name}</h2>
        </Link>

        <div className="description">{product.description}</div>
        <div className="quantity">{product.unit}</div>

        <div className="priceCart">
          <div className="price">&euro;{product.price}</div>
          {!product.purchasing ? (
            <button
              onClick={() => dispatch(purchasingState(product._id))}
              className="cartbtn"
            >
              Add to Cart{" "}
              <i
                className="fa fa-shopping-basket add-to-cart-basket"
                aria-hidden="true"
              ></i>
            </button>
          ) : (
            <div className="btnpurchasing">
              <RemoveItemPrimary product={product} />
              <p className="quantityCounter">{product.quantity}</p>
              <AddItemPrimary product={product} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
