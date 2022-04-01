import React, { useState } from "react";
import Product from "./product";

export default function ProductList(props) {
  const { products, onBuy, currentItems } = props;

  // const sorted = [...products].sort(
  //   (a, b) => b[sortProperty] - a[sortProperty]
  // );
  // console.log(sorted);
  // const [data, setData] = useState([sorted]);

  return (
    <div className="block col-2">
      <div className="column">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onBuy={onBuy}
            currentItems={currentItems}
          ></Product>
        ))}
      </div>
    </div>
  );
}
