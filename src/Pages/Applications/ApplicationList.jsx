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
          <thead>
            <tr>
              <th>Logo</th>
              <th>Company</th>
              <th>Applicant</th>
              <th>Title</th>
              <th>Port</th>
              <th>GitHub</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>
                  <img className="h-15 w-15" src={app.company_logo} alt="" />
                </td>
                <td>{app.company}</td>
                <td>{app.applicant}</td>
                <td>{app.title}</td>
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
