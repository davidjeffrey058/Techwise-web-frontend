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
import Login from "./pages/screens/login";
import AuthPage from "./pages/authPage";
import SignUp from "./pages/screens/signUp";


const url = "http://10.10.4.176:8080/techwise-api";

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
        element: <Wishlist />
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
    element: <Cart />
  },
  {
    path: '/category_page/:cat',
    element: <CategoryPage url={url} />
  },
  // {
  //   path: '/login',
  //   element: <Login />
  // },
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
