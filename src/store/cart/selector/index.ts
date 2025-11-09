import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";

//Đây là mục 30 đã note. Dùng hàm này làm callback cho bên kia. Dùng RootState để cho TS biết c61 ả cá tate khác nữa có trong state của redux. để bên trong có thể gợi ý code đúng
const getToCartQuantiySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumalator, curValue) => accumalator + curValue,
      0
    );
    return totalQuantity;
  }
);

export { getToCartQuantiySelector };
