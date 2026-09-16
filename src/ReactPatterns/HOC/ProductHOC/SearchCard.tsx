import React, { useState } from "react";
import ProductsList from "./ProductList";
import productsData from "./products.json";
import { Product } from "./ProductCard";

const products: Product[] = productsData;

const ProductsListWithSearch = () => {
  // Container component pattern: this component owns search state and passes
  // filtered products down to a presentational list.
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setfilteredData] = useState<Product[]>(products);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Controlled input pattern: the input value is mirrored in React state.
    setSearchTerm(event.target.value);
    setfilteredData(filteredProducts(event.target.value));
  };
  const filteredProducts = (searchTerm: string) => {
    // Derived data pattern: compute the visible products from immutable source data.
    searchTerm = searchTerm.toUpperCase();
    return products.filter((product) => {
      let str = `${product.Title}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    });
  };
  return (
    <>
      <input
        onChange={handleSearch}
        value={searchTerm}
        type="text"
        placeholder="Search"
      />
      <ProductsList products={filteredData} />
    </>
  );
};

export default ProductsListWithSearch;
