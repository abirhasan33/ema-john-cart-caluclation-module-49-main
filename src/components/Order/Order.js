import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewtiem from "../Reviewtiem/Reviewtiem";
import './Order.css'

const Order = () => {
  const [product, setProduct] = useProduct();
  const [cart, setCart] = useCart(product);

  const handleRemoveProudtc = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <Reviewtiem
            key={product.id}
            product={product}
            handleRemoveProudtc= {handleRemoveProudtc}
          ></Reviewtiem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <Link to='/inventory'>
                <button>Procced Cakut</button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
