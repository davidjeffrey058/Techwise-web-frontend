import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/components.css";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from "./pages/productPage";
import Cart from "./pages/cart";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/product_page',
    element: <ProductPage />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
