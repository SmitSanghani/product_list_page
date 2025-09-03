import React from "react";
import "../listPage.css";

function ListProduct({ products }) {
  return (
    <div id="product-container">
      {products.map((product) => (
        <div key={product.id} id="product-card">
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <img src={product.image} alt={product.name} width="300" />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ListProduct;
