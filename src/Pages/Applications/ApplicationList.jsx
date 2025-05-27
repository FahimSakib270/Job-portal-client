import React, { use } from "react";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Jobs Applied So Far: {applications.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Applicant</th>
              <th>LinkedIn</th>
              <th>Portfolio</th>
              <th>GitHub</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>{app.jobId}</td>
                <td>{app.applicant}</td>
                <td>
                  <a
                    href={app.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    Profile
                  </a>
                </td>
                <td>
                  <a
                    href={app.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    View
                  </a>
                </td>
                <td>
                  <a
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    GitHub
                  </a>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline btn-info">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
