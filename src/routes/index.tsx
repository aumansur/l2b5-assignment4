import App from "@/App";
import AllBooks from "@/pages/AllBooks";
import BorrowBook from "@/pages/BorrowBook";
import CreateBook from "@/pages/CreateBook";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "borrow-summary",
        element: <BorrowBook />,
      },
    ],
  },
]);
