import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import Homepage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostListPage from "../pages/PostListPage";
import postListPageLoader from "../pages/PostListPage/PostListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/post",
        element: <PostListPage />,
        loader: postListPageLoader,
      },
      {
        path: "/post/:postId",
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
