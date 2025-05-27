import React, { Suspense, use } from "react";
import ApplicationState from "./ApplicationState";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { myApplicationsPromise } from "../../Api/Applicationapi";

const MyApplication = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <ApplicationState></ApplicationState>
      <Suspense fallback={"application data is loading"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
