import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandedProducts from "../pages/BrandedProducts/BrandedProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

  
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
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/brandedProducts/:brand_name',
          element: <BrandedProducts></BrandedProducts>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}`)
        },
        {
          path: '/productDetails/:_id',
          element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}/${params._id}`)
        },
        {
          path: '/updateProduct/:_id',
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}/${params._id}`)
        },
        {
          path: '/cart',
          element: <PrivateRoute><Cart></Cart></PrivateRoute>
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