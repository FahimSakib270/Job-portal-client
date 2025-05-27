import React from "react";
import { useParams } from "react-router";

const JobApply = () => {
  const { id: jobId } = useParams();
  console.log(jobId);

  return (
    <div>
      <h3 className="text-4xl text-center font-bold ">Apply Now</h3>
    </div>
  );
};

export default JobApply;
