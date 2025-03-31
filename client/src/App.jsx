import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Event,
  ErrorPage,
  KnowledgeHub,
  Login,
  Register,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "knowledgehub",
        element: <KnowledgeHub />,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
