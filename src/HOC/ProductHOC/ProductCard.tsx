const ProductCard = (props: any) => {
  return (
    <div className="product">
      <p>
        <b>Title:</b> {props.Title}
      </p>
      <hr />
    </div>
  );
};

export default ProductCard;
