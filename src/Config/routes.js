import { useRoutes } from "react-router-dom";
import { CategoryProduct, ErrorPage, SharedLayout } from "../Components";
import {
  About,
  Cart,
  Checkout,
  Contact,
  Home,
  ProductDetails,
  ProductLayout,
  TodayDeal,
} from "../Pages";

export function Route() {
  return useRoutes([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "products",
          element: <ProductLayout />,
        },
        { path: "/product/:productId", element: <ProductDetails /> },

        { path: "category/:category", element: <CategoryProduct /> },

        {
          path: "/deals-of-the-day",
          element: <TodayDeal />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
}
