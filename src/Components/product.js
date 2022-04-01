import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
  const { product, onBuy, currentItems } = props;

  if (currentItems[product.id]) {
    return (
      <div>
        <Item product={product} onBuy={onBuy}></Item>
      </div>
    );
  }
};

const Item = (props) => {
  const { product, onBuy } = props;
  return (
    <div>
      <div className="row item">
        <h3>{product.name}</h3>
        <div className="row">
          <h3>
            Price:<span className="price">${product.price}</span>
          </h3>
          <button
            onClick={() => {
              onBuy(product);
            }}
            className="btn"
          >
            <FaShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
