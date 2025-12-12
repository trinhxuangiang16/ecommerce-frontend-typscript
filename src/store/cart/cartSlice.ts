import type { TProduct } from "@customTypes/product";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getToCartQuantiySelector } from "./selector";
interface ICartSate {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartSate = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      //id vị trí đó đóng vài trò ko phải id của state là là cái key: number phía trên. Nếu đã có key đó rồi thì sl ++
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export { getToCartQuantiySelector };
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
