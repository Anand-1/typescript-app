import React, { useState } from "react";
import ProductsList from "./ProductList";
import productsData from "./products.json";
import { Product } from "./ProductCard";

const products: Product[] = productsData;

const ProductsListWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setfilteredData] = useState<Product[]>(products);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setfilteredData(filteredProducts(event.target.value));
  };
  const filteredProducts = (searchTerm: string) => {
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
