import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobApply from "../Pages/JobApply";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
