import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandedProducts from "../pages/BrandedProducts/BrandedProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/brands.json')
        },
        {
            path: '/addProduct',
            element: <AddProduct></AddProduct>
        },
        {
          path: '/brandedProducts',
          element: <BrandedProducts></BrandedProducts>,
          loader: () => fetch('http://localhost:5000/products')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;