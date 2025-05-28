import React, { Suspense, use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import MyPostedJobsList from "../Components/MyPostedJobsList";
import { jobsCreatedByPromise } from "../Api/JobsApi";

const MyPostedJobs = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Suspense>
        <MyPostedJobsList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></MyPostedJobsList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
