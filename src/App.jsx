// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Route } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <div className="App">
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
