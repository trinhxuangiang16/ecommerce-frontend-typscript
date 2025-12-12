import type { TProduct } from "@customTypes/product";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hook";
import { addToCart } from "@store/cart/cartSlice";
import { useEffect, useState, memo } from "react";

const { product, productImg, maximunNotice } = styles;

const Product = memo(({ id, title, img, price, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };

  console.log(typeof price);
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{Number(price).toFixed(2)} EGP</h3>
      <p className={maximunNotice}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can addd ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        onClick={addToCartHandler}
        variant="info"
        style={{ color: "white" }}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
