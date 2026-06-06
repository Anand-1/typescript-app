import ProductCard, { Product } from "./ProductCard";

type ProductsListProps = {
  products: Product[];
};

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
            <ProductCard key={product.Id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
