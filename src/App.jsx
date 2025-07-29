// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Route } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider.jsx";
import CartContextProvider from "./contexts/CartContextProvider.jsx";
import Navigation from "./components/Navigation.jsx";
import Products from "./components/Products.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

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
