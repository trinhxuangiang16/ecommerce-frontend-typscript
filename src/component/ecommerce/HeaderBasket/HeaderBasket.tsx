import { useEffect, useState } from "react";
import { getToCartQuantiySelector } from "@store/cart/cartSlice";
import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { useAppSelector } from "@store/hook";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getToCartQuantiySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
