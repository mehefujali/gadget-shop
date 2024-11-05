import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import Error from './components/Error/Error';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import WishList from './components/WishList/WishList';
import { CreateCartContextPov } from './components/Context/CreateCartContextPov';
import { CreateWishListContextPovider } from './components/Context/CreateWishListContextPovider';
import AboutUs from './components/AboutUs/AboutUs';




const router = createBrowserRouter([
  {
    errorElement: <Error></Error>,
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' replace> </Navigate>
      },
      {
        path: '/home',
        element: <Home></Home>,
        children: [
          {
            path: '/home',
            element: <Navigate to='/home/products/all-products' replace></Navigate>
          },
          {
            path: '/home/products/:category',
            element: <Products></Products>

          }
        ]
      },
      {
        path: '/statistics',
        element: <h1>ok</h1>
      }
      ,
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <Navigate to="cart" replace ></Navigate>
          },

          {
            path: 'cart',
            element: <Cart></Cart>
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>
          }
        ]
      }
      ,
      {
        path: 'product/:productId',
        loader: () => fetch('/products.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateWishListContextPovider>
      <CreateCartContextPov>
        <RouterProvider router={router} />
      </CreateCartContextPov>
    </CreateWishListContextPovider>
  </StrictMode>,
)
