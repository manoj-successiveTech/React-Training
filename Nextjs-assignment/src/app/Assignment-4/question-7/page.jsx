// 7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.


"use client";

import Input from "@/components/ProductComponent";
import React, { useState } from "react";
import "@/app/styles/welcome4.css";

const Page = () => {
  const [searchedItem, setSearchedItem] = useState("");

  const handleSearch = (event) => {
    setSearchedItem(event.target.value);
  };

  const products = [
    {
      id: 201,
      title: "Gaming Laptop",
      price: 1200,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 202,
      title: "Smartwatch",
      price: 250,
      image: "https://images.unsplash.com/photo-1606813902544-1b84a536f590?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 203,
      title: "DSLR Camera",
      price: 950,
      image: "https://images.unsplash.com/photo-1549921296-3a19608be6c6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 204,
      title: "Wireless Mouse",
      price: 350,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 205,
      title: "Mechanical Keyboard",
      price: 100,
      image: "https://images.unsplash.com/photo-1587202372775-d56ebd63ef1f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 206,
      title: "Noise Cancelling Headphones",
      price: 199,
      image: "https://images.unsplash.com/photo-1580894908361-7c73c6d89df7?auto=format&fit=crop&w=800&q=80",
    },
  ];

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
