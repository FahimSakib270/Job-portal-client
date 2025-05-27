import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const { _id } = job;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Company Header */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center space-x-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={job.company_logo} alt={`${job.company} logo`} />
              </div>
            </div>
            <div>
              <h2 className="card-title">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="stat bg-base-200 shadow-md p-4 rounded-box">
          <div className="stat-title">Location</div>
          <div className="stat-value text-sm">{job.location}</div>
        </div>
        <div className="stat bg-base-200 shadow-md p-4 rounded-box">
          <div className="stat-title">Job Type</div>
          <div className="stat-value text-sm">{job.jobType}</div>
        </div>
        <div className="stat bg-base-200 shadow-md p-4 rounded-box">
          <div className="stat-title">Category</div>
          <div className="stat-value text-sm">{job.category}</div>
        </div>
        <div className="stat bg-base-200 shadow-md p-4 rounded-box">
          <div className="stat-title">Application Deadline</div>
          <div className="stat-value text-sm">
            {new Date(job.applicationDeadline).toLocaleDateString()}
          </div>
        </div>
        <div className="stat bg-base-200 shadow-md p-4 rounded-box">
          <div className="stat-title">Salary Range</div>
          <div className="stat-value text-sm">
            {`${job.salaryRange.min} - ${
              job.salaryRange.max
            } ${job.salaryRange.currency.toUpperCase()}`}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg">Description</h3>
          <p className="text-white">{job.description}</p>
        </div>
      </div>

      {/* Requirements */}
      <div className="mt-6 card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg">Requirements</h3>
          <ul className="list-disc pl-5 space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-white">
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mt-6 card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg">Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-1">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="text-white">
                {resp}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* HR Contact */}
      <div className="mt-6 card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg">Contact HR</h3>
          <p>
            <strong>{job.hr_name}</strong>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${job.hr_email}`} className="link link-primary">
              {job.hr_email}
            </a>
          </p>
        </div>
        <div className="card-actions justify-end my-2">
          <Link to={`/jobApply/${_id}`} className="btn btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
