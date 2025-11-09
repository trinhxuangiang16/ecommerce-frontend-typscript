import { createSlice } from "@reduxjs/toolkit";
import { actGetCategories } from "./act/actGetCategories";
import type { TLoading } from "@customTypes/shared";
import type { TCategory } from "@customTypes/category";

//khai báo kiểu dữ liệu
interface ICategoriedState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

//tạo initial state dựa vào interface => typescript
const initialState: ICategoriedState = {
  records: [],
  loading: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.records = action.payload;
        state.loading = "succeeded";
        //giá trị payload chính là giá trị bên actget return khi gọi api return response.data
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.error = action.payload as string;
        //nếu ko có ép kiểu as string thì ts ko xác định được kiểu dữ liệu của  error thì nó sẽ gạch chân đỏ
        state.loading = "failed";
      });
  },
});

// export const {} = categorySlice.actions;
export { actGetCategories }; // để cho nó được export cùng 1 chổ
export default categorySlice.reducer;
