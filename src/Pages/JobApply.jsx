import React, { use } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
// import useAuth from "../Hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  console.log(jobId);
  const { user } = use(AuthContext);
  //   const { user } = use(useAuth);
  console.log(user);

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;
    const applyInfo = {
      jobId,
      applicant: user.email,
      linkedIn,
      portfolio,
      github,
    };
    console.log(applyInfo);
    axios
      .post("http://localhost:3000/applications", applyInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Application have been Submitted",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-4xl text-center font-bold ">
        Apply Now for this Jobs :{" "}
        <Link className="text-blue-500 underline" to={`/jobs/${jobId}`}>
          Info
        </Link>
      </h3>

      <form onSubmit={handleApplyForm} className="max-w-md mx-auto my-10">
        <fieldset className="border border-base-300 rounded-box p-6 bg-base-100 ">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">LinkedIn Link</span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="LinkedIn profile Link"
              name="linkedin"
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">GitHub Link</span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="GitHub profile Link"
              name="github"
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Portfolio Website</span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="Portfolio Website Link"
              name="portfolio"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6 flex justify-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
