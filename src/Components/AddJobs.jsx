import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddJobs = () => {
  const { user } = use(AuthContext);
  const handleJobAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData); // Convert to plain object
    console.log(data);
    const { min, max, currency, ...newJobs } = data;

    newJobs.salaryRange = { min, max, currency };
    const requirements2 = newJobs.requirements
      .split(",")
      .map((req) => req.trim());
    newJobs.requirements = requirements2;
    const responsibilities2 = newJobs.responsibilities
      .split(",")
      .map((req) => req.trim());
    newJobs.responsibilities = responsibilities2;
    newJobs.status = "active";

    console.log(newJobs);

    // save job to db
    axios
      .post("http://localhost:3000/jobs", newJobs)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been Post Successfully",
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
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleJobAdd} className="space-y-6">
        {/* Basic Info */}
        <fieldset className="relative border border-base-300 rounded-box p-4 bg-base-200">
          <legend className="absolute -top-3 left-3 px-2 text-base-content bg-base-200 font-semibold">
            Basic Job Info
          </legend>

          <div className="space-y-2">
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input w-full"
              placeholder="Job title"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="label" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="input w-full"
              placeholder="Company name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="label" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="input w-full"
              placeholder="Company Location"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="label" htmlFor="logo">
              Logo URL
            </label>
            <input
              type="url"
              id="logo"
              name="company_logo"
              className="input w-full"
              placeholder="https://example.com/logo.png "
            />
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">Job Type</legend>

          <div className="flex flex-wrap gap-4">
            {["On-site", "Remote", "Hybrid"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="jobType"
                  value={type.toLowerCase()}
                  className="radio radio-primary"
                  required
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">Job Category</legend>

          <select name="category" className="select w-full" required>
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="teaching">Teaching</option>
            <option value="babysitting">Baby Sitting</option>
            <option value="finance">Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">
            Application Deadline
          </legend>

          <input
            type="date"
            name="applicationDeadline"
            className="input w-full"
            required
          />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">Salary Range</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="label" htmlFor="min-salary">
                Minimum Salary
              </label>
              <input
                type="number"
                id="min-salary"
                name="min"
                className="input w-full"
                placeholder="e.g., 20000"
              />
            </div>

            <div className="space-y-2">
              <label className="label" htmlFor="max-salary">
                Maximum Salary
              </label>
              <input
                type="number"
                id="max-salary"
                name="max"
                className="input w-full"
                placeholder="e.g., 40000"
              />
            </div>

            <div className="space-y-2">
              <label className="label" htmlFor="currency">
                Currency
              </label>
              <select name="currency" id="currency" className="select w-full">
                <option value="" disabled selected>
                  Select currency
                </option>
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">Job Description</legend>

          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Describe the job in detail..."
            rows="4"
          ></textarea>
        </fieldset>

        {/* Requirements */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">Job Requirements</legend>

          <textarea
            name="requirements"
            className="textarea w-full"
            placeholder="List requirements separated by commas"
            rows="3"
          ></textarea>
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">
            Job Responsibilities
          </legend>

          <textarea
            name="responsibilities"
            className="textarea w-full"
            placeholder="List responsibilities separated by commas"
            rows="3"
          ></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 space-y-4">
          <legend className="font-semibold text-lg">HR Contact Info</legend>

          <div className="space-y-2">
            <label className="label" htmlFor="hr-name">
              HR Name
            </label>
            <input
              type="text"
              id="hr-name"
              name="hr_name"
              className="input w-full"
              placeholder="HR Manager Name"
            />
          </div>

          <div className="space-y-2">
            <label className="label" htmlFor="hr-email">
              HR Email
            </label>
            <input
              defaultValue={user.email}
              type="email"
              id="hr-email"
              name="hr_email"
              className="input w-full"
              placeholder="hr@example.com"
            />
          </div>
        </fieldset>

        {/* Submit Button */}
        <div className="pt-4">
          <button type="submit" className="btn btn-primary w-full">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
