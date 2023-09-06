import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./routes/Home";
import Who from "./routes/Who";
import What from "./routes/What";
import How from "./routes/How";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "ABOUT", element: <Who /> },
      { path: "WORKS", element: <What /> },
      { path: "how", element: <How /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
