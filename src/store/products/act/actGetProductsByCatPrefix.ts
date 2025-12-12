import type { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//khai báo kiểu dữ liệu cho data xuất ra=> chèn kế bên phương thức get để dữ liệu gọi về có dạng đó
type TResponse = TProduct[];

export const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<TResponse>(
        `products?cat_prefix=${prefix}`
      );

      return response.data;
    } catch (error) {
      //kiểm tra xem phải lổi của axios không
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
