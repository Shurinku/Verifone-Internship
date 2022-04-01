import "./App.css";
import Header from "./Components/Header";
import Cart from "./Components/cart";
import ProductList from "./Components/productList";
import data from "./data";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const currentItems = {};

  products.map((current) => {
    currentItems[current.id] = true;
  });

  const setVisibility = (id, visibilty) => {
    currentItems[id] = visibilty;
  };

  const onBuy = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (!exist) {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      setVisibility(product.id, false);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setVisibility(product.id, true);
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    setVisibility(product.id, true);
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    const result = await Axios.get(
      "http://data.fixer.io/api/latest?access_key=f67316ed75a444619cdf4fec3a4f3fe0&symbols=USD,EUR,CAD,JPY"
    );
    console.log(result.data);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <ProductList
          onBuy={onBuy}
          products={products}
          onRemove={onRemove}
          currentItems={currentItems}
        ></ProductList>
        <Cart
          totalPrice={totalPrice}
          onBuy={onBuy}
          cartItems={cartItems}
          onRemove={onRemove}
          onAdd={onAdd}
          onDelete={onDelete}
          currentItems={currentItems}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
