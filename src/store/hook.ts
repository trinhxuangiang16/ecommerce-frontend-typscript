import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from ".";

//Bên index định nghĩa bên đây tạo biến và tạo kiểu dữ liệu
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
