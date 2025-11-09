import { createSlice } from "@reduxjs/toolkit";
import { actGetProductsByCatPrefix } from "./act/actGetProductsByCatPrefix";
import type { TLoading } from "@customTypes/shared";
import type { TProduct } from "@customTypes/product";

//khai báo kiểu dữ liệu
interface ICategoriedState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

//tạo initial state dựa vào interface => typescript
const initialState: ICategoriedState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByCatPrefix.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
        state.records = action.payload;
        state.loading = "succeeded";
        //giá trị payload chính là giá trị bên actget return khi gọi api return response.data
      })
      .addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
        state.error = action.payload as string;
        //nếu ko có ép kiểu as string thì ts ko xác định được kiểu dữ liệu của  error thì nó sẽ gạch chân đỏ
        state.loading = "failed";
      });
  },
});

export const { productCleanUp } = productsSlice.actions;
export { actGetProductsByCatPrefix };
export default productsSlice.reducer;
