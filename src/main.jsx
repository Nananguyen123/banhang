import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailProduct } from "./pages/DetailProduct.jsx";
import BaseLayout from "./components/Layout/BaseLayout.jsx";
import Home from "./pages/Home.jsx";
import { ProductsByFilter } from "./components/ProductsByFilter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout></BaseLayout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
  {
    path: "/products",
    element: <ProductsByFilter />,
  },
  {
    path: "products/:slug",
    element: <DetailProduct></DetailProduct>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
