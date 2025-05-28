import React from "react";
import { use } from "react";
import { Link } from "react-router";

const MyPostedJobsList = ({ jobsCreatedByPromise }) => {
  const jobsPromise = use(jobsCreatedByPromise);
  return (
    <div>
      <h1 className="text-4xl my-5 font-bold text-center">
        So far you have posted {jobsPromise.length} jobs
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {jobsPromise.map((jobs, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{jobs.title}</td>
                <td>{jobs.location}</td>
                <td>
                  {" "}
                  <Link
                    className="text-blue-400 underline"
                    to={`/applications/${jobs._id}`}
                  >
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
