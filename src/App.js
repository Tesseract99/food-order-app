import Header from "./components/Layout/Header";
import React, { useState } from "react";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/UI/Cart";

const App = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const showCartItems = (value) => {
    setDisplayCart(value);
  };

  return (
    <React.Fragment>
      {displayCart && <Cart showCartItems={showCartItems} />}
      <Header showCartItems={showCartItems} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
