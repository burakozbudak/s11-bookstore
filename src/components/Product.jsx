import { useContext } from "react"; // useContext'i ekle
import { ScProduct } from "./scParts";
import { CartContext } from "../contexts/CartContextProvider"; // CartContext'i import et

const Product = ({ product }) => {
  // Sadece product'ı prop olarak al
  const { addItem } = useContext(CartContext); // addItem'ı Context'ten al

  return (
    <ScProduct>
      <img src={product.image} alt={`${product.title} book`} />
      <div className="details">
        <h1 className="title">{product.title}</h1>
        <div className="footer">
          <p className="price">${product.price}</p>
          <button onClick={() => addItem(product)}>
            {" "}
            {/* addItem'ı doğrudan kullan */}
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
