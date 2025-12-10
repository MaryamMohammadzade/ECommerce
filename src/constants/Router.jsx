import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import Products from "../pages/products";
import Contact from "../pages/contact";
import About from "../pages/about";
import Basket from "../pages/basket";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard"
import Category from "../pages/category";
import SingleProduct from "../pages/single-product/SingleProduct";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "basket", element: <Basket /> },
      { path: "dashboard", element: <Dashboard />},
      { path: "category/:id", element: <Category />},
      { path: "products/:id", element: <SingleProduct /> },
      { path: "products", element: <Products /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ]
  },
  
]);
