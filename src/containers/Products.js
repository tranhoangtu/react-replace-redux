import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import { ProductContext } from "../context/product-context";
import "./Products.css";

const Products = (props) => {
  console.log("111");
  const productList = useContext(ProductContext).products;
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
