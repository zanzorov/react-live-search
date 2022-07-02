import { useState } from "react";

import Product from "./Product"

// import images
import adidas from "./img/adidas.jpg";
import newbalance from "./img/newbalance.jpg";
import nike from "./img/nike.jpg";
import puma from "./img/puma.jpg";
import reebok from "./img/reebok.jpg";
import underarmour from "./img/underarmour.jpg";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Adidas",
      image: adidas,
      price: "$120",
    },
    {
      name: "New Balance",
      image: newbalance,
      price: "$180",
    },
    {
      name: "Nike",
      image: nike,
      price: "$200",
    },
    {
      name: "Puma",
      image: puma,
      price: "$80",
    },
    {
      name: "Reebok",
      image: reebok,
      price: "$90",
    },
    {
      name: "Under Armour",
      image: underarmour,
      price: "$280",
    },
  ]);

  const [input, setInput] = useState("");

  

  return (
    <div className="app">
      <div className="form">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
          placeholder="Search product.."
        />
      </div>
      <div className="products">
      {products
        .filter((item) => {
          if (input === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(input.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
          <Product item={item} />
          );
        })}
    </div>
    </div>
  );
}

export default App;
