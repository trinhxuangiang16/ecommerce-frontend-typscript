import { useAppSelector } from "@store/hook";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { getToCartQuantiySelector } from "@store/cart/selector";

const { basketContainer, basketQuantity } = styles;

export default function HeaderBasket() {
  const totalQuantity = useAppSelector(getToCartQuantiySelector);
  console.log("render");
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
}
