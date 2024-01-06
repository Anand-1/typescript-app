import ProductCard from "./ProductCard";

const ProductsList = ({ products }: any) => {
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
