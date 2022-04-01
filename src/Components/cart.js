import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Cart(props) {
  const { cartItems, totalPrice, onRemove, onAdd, onDelete } = props;
  const [isHovering, setIsHovering] = useState(true);
  const handleMouseEnter = (e) => {
    setIsHovering(false);
  };
  const handleMouseLeave = (e) => {
    setIsHovering(true);
  };
  const hidden = () => {
    return `${isHovering ? "hidden" : "visible"}`;
  };

  return (
    <div className="block col-1 cart">
      <div>
        {cartItems.length === 0 && <div>No product in your shopping cart</div>}
      </div>
      {cartItems.length >= 1 && (
        <div>
          <h3>Products in your shopping cart</h3>
          <div className="row under">
            <p>Product</p>
            <p>Quantity</p>
            <p>Value</p>
          </div>
        </div>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div>
            {item.name}
            <BsQuestionCircleFill
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <p className={hidden()}>{item.description}</p>
          </div>
          <div>
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            {item.qty}
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
            <button
              className="delete"
              onClick={() => {
                onDelete(item);
              }}
            >
              x
            </button>
          </div>
          <div>{item.price.toFixed(2)}$</div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <div className="total">Total Price:${totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}
