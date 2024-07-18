import App from './App.tsx'
import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "./pages/error/Error"
import Home from "./pages/home/Home";
import { loader as homeloader } from './pages/home/home.loader.ts';
import Details from './pages/details/Details.tsx';
import { loader as detailsloader} from './pages/details/details.loader.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeloader
      },
      {
        path: "details/:showId",
        element: <Details />,
        loader: detailsloader
      },
    ]
  },
]);

export default router;