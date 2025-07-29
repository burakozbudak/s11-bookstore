// Products.jsx
import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/ProductContextProvider.jsx";
// import { CartContext } from "../contexts/CartContextProvider"; // Artık Products'ta addItem'a ihtiyacımız yok, kaldırabiliriz
import Product from "./Product";

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const Products = () => {
  const { products } = useContext(ProductContext);
  // const { addItem } = useContext(CartContext); // Artık burada addItem'a ihtiyacımız yok

  return (
    <ScProducts>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        /> /* addItem prop'unu kaldır */
      ))}
    </ScProducts>
  );
};

export default Products;
