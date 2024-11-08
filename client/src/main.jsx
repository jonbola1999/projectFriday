import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Topic from "./components/Topic.jsx";
import './index.css'

import Questoin from "./components/Questoin.jsx";
import Ans from "./components/Ans.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Topic />,
      },
      {
        path: "/topic/:themeId",
        element: <Questoin />,
      },
      {
        path: "/question/:id",
        element: <Ans />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
