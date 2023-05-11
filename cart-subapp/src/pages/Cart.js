import React, { useEffect } from "react";
import "./Cart.css";

const cartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 29,
    image:
      "https://www.nuskin.com/content/products/01/10/28/01102892/jcr:content/fullImage.img.160.160.png/1628091900209-cache.png?format=pjpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39,
    image:
      "https://www.nuskin.com/content/products/01/00/15/01001595/jcr:content/fullImage.img.160.160.png/1590000578617-cache.png?format=pjpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 35,
    image:
      "https://www.nuskin.com/content/products/01/00/22/01002272/jcr:content/fullImage.img.png/1678207627079-cache.png?format=pjpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 50,
    image:
      "https://www.nuskin.com/content/products/01/00/24/01002440/jcr:content/fullImage.img.png/1665589779464-cache.png?format=pjpg",
  },
];

const CartPage = () => {
  useEffect(() => {
    console.log("Cart Page mounted - Checking useEffect");
  }, []);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <div className="cart-items">
        <div className="cart-title">Your Cart</div>
        <ul className="cart-item-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <span>
                {item.name} - ${item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-summary">
        <div className="summary-title">Order Summary</div>
        <div className="total-price">Total Prices: ${totalPrice}</div>
        <button onClick={() => alert("Checkout")}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
