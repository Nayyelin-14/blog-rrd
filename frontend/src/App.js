import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts";
import Main from "./layouts/Main";
import Createpost from "./pages/Createpost";
import { loader as PostLoader } from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import { loader as detailLoader } from "./pages/PostDetail";
import { action as createaction } from "./components/PostForm";
import Editpage from "./pages/Editpage";
import { action as updateaction } from "./components/PostForm";
import { action as deleteAction } from "./pages/PostDetail";
import Errorpage from "./pages/Errorpage";
import Auth from "./pages/Auth";
import { action as authaction } from "./pages/Auth";
import { loader as logoutloader } from "./pages/Logout";
import { checkTokenforRouteLoader, checkTokenLoader } from "./util/GetToken";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      id: "root",
      loader: checkTokenLoader,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: PostLoader,
        },
        {
          path: "/create-post",
          element: <Createpost />,
          action: createaction,
          loader: checkTokenforRouteLoader,
        },
        {
          path: "/login-page",
          element: <Auth />,
          action: authaction,
        },
        {
          path: "/logout",
          loader: logoutloader,
        },
        {
          path: ":id",
          id: "post-details",
          loader: detailLoader,
          children: [
            {
              index: true,
              element: <PostDetail />,
              action: deleteAction,
            },
            {
              path: "post-edit",
              element: <Editpage />,
              action: updateaction,
              loader: checkTokenforRouteLoader,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
