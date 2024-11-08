import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllCategoriesCard from "../components/AllCategoriesCard";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Statistics from "../components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch ('/categories.json'),
      
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
        loader: () => fetch('/gadgets.json'),
        errorElement: <ErrorPage></ErrorPage>
      },
    
      {
        path: "/dashboard",
      element: <Dashboard></Dashboard>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
  
    ],
  
  },
]);

export default router;
