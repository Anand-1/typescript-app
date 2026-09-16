import ProductCard, { Product } from "./ProductCard";

type ProductsListProps = {
  products: Product[];
};

// Presentational list pattern: receives already-filtered data and maps it to cards.
const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {products &&
          products.map((product) => (
            // Prop spreading pattern: Product fields match ProductCard props exactly.
            <ProductCard key={product.Id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
