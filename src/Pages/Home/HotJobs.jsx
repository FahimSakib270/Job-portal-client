import React, { use } from "react";

import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const hotJobs = use(jobsPromise);
  return (
    <div>
      <h1 className="text-center text-4xl my-20 font-bold">
        Hot Jobs of the day
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {hotJobs.map((jobs) => (
          <JobsCard key={jobs._id} jobs={jobs}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
