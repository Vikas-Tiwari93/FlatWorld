import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import BookDetails from "../pages/BookDetails/BookDetails";
import ManageShelf from "../pages/ManageShelf/ManageShelf";
import QrSearch from "../pages/QrSearch/QrSearch";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "admin",
        element: <Admin />,
        errorElement: <p>something went wrong please refresh your page</p>,
      },
      {
        path: "bookdetails/:id",
        element: <BookDetails />,
        errorElement: <p>something went wrong please refresh your page</p>,
      },
      {
        path: "manage",
        element: <ManageShelf />,
        children: [
          {
            path: ":id",
            element: <BookDetails />,
            errorElement: <p>something went wrong please refresh your page</p>,
          },
        ],
      },
      {
        path: "qrSearch",
        element: <QrSearch />,
        errorElement: <p>something went wrong please refresh your page</p>,
      },
    ],
  },

  {
    path: "*",
    element: <p> path not found</p>,
  },
]);
