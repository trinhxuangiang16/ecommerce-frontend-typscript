import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layout
import MainLayout from "@Layouts/MainLayout/MainLayout";

//pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import AboutUs from "@pages/AboutUs";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/products/:prefix", //:prefix là 1 key trong api trong product đó, khi nhập url/product?<prefix>=men thì nó sẽ hiển thị những key prefix nào có giá trị  là men
        loader: ({ params }) => {
          //ngăn chặn việc tải trang nếu client nhập id sai ngay trước khi gọi api để bớt tải
          if (!/^[a-z]+$/i.test(params.prefix as string)) {
            throw new Response("Bad Request", {
              statusText: "Product not found",
              status: 400,
            });
          }

          return true;
        },
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
