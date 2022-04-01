import React from "react";

export default function Header(props) {
  return (
    <div className="row block center">
      <h1>Checkout Page</h1>
      <select>
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>
    </div>
  );
}
