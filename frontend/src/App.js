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
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
