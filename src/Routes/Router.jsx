import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllCategoriesCard from "../components/AllCategoriesCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
    ],
  },
]);

export default router;
