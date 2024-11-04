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
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
