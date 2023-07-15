import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../pages/Book/BookDetails";
import BookPage from "../pages/Book/BookPage";
import Home from "../pages/Home/Home";
import NotFound from "../pages/shared/NotFound";
import Login from "./../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddNewBook from "../pages/Book/AddNewBook";
import WishlistPage from "../pages/Book/WishList";

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
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "add-new-book",
        element: <AddNewBook/>
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
