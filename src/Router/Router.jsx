import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/Applications/MyApplication";
import AddJobs from "../Components/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";

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
      {
        path: "/myApplications",
        element: (
          <PrivateRoutes>
            <MyApplication></MyApplication>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-jobs",
        element: (
          <PrivateRoutes>
            <AddJobs></AddJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/applications/:jobs_id",
        element: (
          <PrivateRoutes>
            <ViewApplications></ViewApplications>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.jobs_id}`),
      },
    ],
  },
]);
