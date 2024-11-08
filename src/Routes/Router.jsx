import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllCategoriesCard from "../components/AllCategoriesCard";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch ('/public/categories.json'),
      
        children: [
          {
            path: '/',
            element: <AllCategoriesCard></AllCategoriesCard>
          }
        ]
      },
      {
        path: '/ProductDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/gadgets.json'),
        errorElement: <ErrorPage></ErrorPage>
      },
    
      {
        path: "/dashboard",
      element: <Dashboard></Dashboard>
      }
  
    ],
  
  },
]);

export default router;
