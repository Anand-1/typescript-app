export type Product = {
  Id: string;
  Title: string;
};

// Typed props pattern: ProductCard documents the exact product fields it can render.
const ProductCard = ({ Title }: Product) => {
  return (
    <div className="product">
      <p>
        <b>Title:</b> {Title}
      </p>
      <hr />
    </div>
  );
};

export default ProductCard;
