import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../pages/Book/BookDetails";
import BookPage from "../pages/Book/BookPage";
import Home from "../pages/Home/Home";
import NotFound from "../pages/shared/NotFound";
import Login from "./../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
