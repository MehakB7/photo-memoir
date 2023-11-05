import { RouteObject, useRoutes } from "react-router-dom";
import MainWrapper from "../pages/mainwrapper/MainWrapper";
import Home from "../pages/home/Home";
import User from "../pages/user/User";
import Album from "../pages/album/Album";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "user/:id/album/:id",
        element: <Album />,
      },
    ],
  },
];

function Router() {
  const element = useRoutes(routes);
  return element;
}

export default Router;
