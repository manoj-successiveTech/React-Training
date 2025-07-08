"use client";

import React from "react";

const ProductComponent = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      className="search-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default ProductComponent;
