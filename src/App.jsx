import React from "react";
import ListProduct from "./comonent/listPage";

const App = () => {
  const ListOfproduct = [
    {
      id: 1,
      name: "product-1",
      price: "200$",
      image: "/src/imges/product-1.jpg",
      description: "Canon EOS 90D DSLR Camera – 32.5 MP, 4K Video, Dual Pixel Autofocus .Perfect for photography and videography with high-speed continuous shooting and exceptional image quality.",
    },
    {
      id: 2,
      name: "product-2",
      price: "200$",
      image: "/src/imges/product-2.jpeg",
      description: "Sony WH-1000XM5 Wireless Headphones – Premium noise-canceling headphones with 30 hours of battery life and superior sound quality.",
    },
    {
      id: 3,
      name: "product-3",
      price: "200$",
      image: "/src/imges/product-3.jpeg",
      description: "Fossil Gen 6 Smartwatch – Stylish smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
    },
    {
      id: 4,
      name: "product-4",
      price: "200$",
      image: "/src/imges/product-4.png",
      description: "Nivea Men Moisturizing Cream – Hydrates and nourishes skin, leaving it fresh, smooth, and healthy-looking all day.",
    },
  ];

  return (
    <div>
      <h1 style={{textAlign:"center"}}>product pageee</h1>
      <ListProduct products={ListOfproduct} />
    </div>
  );
};

export default App;
