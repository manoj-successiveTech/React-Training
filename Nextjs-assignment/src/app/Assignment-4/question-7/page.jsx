// 7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.


"use client";

import React, { useState } from "react";
import Input from "@/components/ProductComponent"; // Custom Input component
import "@/app/styles/welcome4.css";

const products = [
  {
    id: 201,
    title: "Gaming Laptop",
    price: 1200,
    image: "/gaminglaptop.jpeg",
  },
  {
    id: 202,
    title: "Smartwatch",
    price: 2500,
    image: "/smartwatch.jpeg",
  },
  {
    id: 203,
    title: "DSLR Camera",
    price: 3500,
    image: "/dslrcamera.jpeg",
  },
  {
    id: 204,
    title: "Wireless Mouse",
    price: 500,
    image: "/wirelessmouse.jpeg",
  },
  {
    id: 205,
    title: "Mechanical Keyboard",
    price: 100,
    image: "/mechanicalkeyboard.jpeg",
  },
  {
    id: 206,
    title: "Noise Cancelling Headphones",
    price: 199,
    image: "/headphone.jpeg",
  },
];

const Page = () => {
  const [searchedItem, setSearchedItem] = useState("");

  const handleSearch = (e) => {
    setSearchedItem(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchedItem.toLowerCase())
  );

  return (
    <div className="search-page">
      <p className="search-instructions">
        7. Design a search filter component that consists of an input field.
        As the user types into the input, use controlled components to filter
        a list of items displayed below. The list should dynamically update to
        show only items matching the search query.
      </p>

      <div className="finder">
        <Input
          type="text"
          placeholder="Search Product..."
          onChange={handleSearch}
          value={searchedItem}
        />
      </div>

      <div className="searched-result-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <strong>Rs.{product.price}</strong>
            </div>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
