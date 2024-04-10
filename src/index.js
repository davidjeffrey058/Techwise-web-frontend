import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/components.css";
import './styles/otherPages.css';
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from "./pages/productPage";
import Cart from "./pages/cart";
import Home from "./pages/navPages/home";
import Category from './pages/navPages/category'
import Wishlist from './pages/navPages/wishlist'
import Profile from './pages/navPages/profile'
import CategoryPage from "./pages/categoryPage";
import AuthPage from "./pages/authPage";
const { url, url2 } = require('./methods/urls');


// const url = "http://localhost:8080/techwise-api";
// const url2 = "http://localhost:8080/user";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/',
        element: <Home title={'Techwise'} url={url} />
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/wishlist',
        element: <Wishlist uri={url2} />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  },
  {
    path: '/product_page/:id',
    element: <ProductPage url={url} />
  },
  {
    path: '/cart',
    element: <Cart url={url2} />
  },
  {
    path: '/category_page/:cat',
    element: <CategoryPage url={url} />
  },
  {
    path: '/auth',
    element: <AuthPage />,
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
