export type Product = {
  Id: string;
  Title: string;
};

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
