import axios from "axios";
import React from "react";
import { Links, NavLink } from "react-router";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { jobs_id } = useParams();
  const applications = useLoaderData();
  const handleStatusChange = (e, application) => {
    console.log(e.target.value, application);

    axios
      .patch(`http://localhost:3000/applications/${application}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Status Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="text-center my-10 font-bold">
        {" "}
        {applications.length} Application for {jobs_id}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Github</th>
              <th>LinkedIn</th>
              <th>Portfolio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((applicant, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{applicant.applicant}</td>
                <td>
                  <NavLink
                    className="underline text-blue-600"
                    to={applicant.github}
                  >
                    Github
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    className="underline text-blue-600"
                    to={applicant.linkedIn}
                  >
                    LinkedIn
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    className="underline text-blue-600"
                    to={applicant.portfolio}
                  >
                    Portfolio
                  </NavLink>
                </td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, applicant._id)}
                    defaultValue={applicant.status}
                    className="select"
                  >
                    <option disabled={true}>Updated Status</option>
                    <option>Under Review</option>
                    <option>Call for interview</option>
                    <option>Hired</option>
                    <option>Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
