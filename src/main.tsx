import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.tsx"
import MainLayout from "./layouts/MainLayout.tsx"
import Product from "./pages/Product.tsx"
import Basket from "./components/Basket.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
