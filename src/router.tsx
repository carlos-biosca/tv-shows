import App from './App.tsx'
import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "./pages/error/Error"
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]
  },
]);

export default router;