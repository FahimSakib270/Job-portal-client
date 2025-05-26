import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
const JobsCard = ({ jobs }) => {
  const {
    title,
    location,
    jobType,
    category,
    company_logo,
    requirements,
    company,
    applicationDeadline,
    description,
    salaryRange,
  } = jobs;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-2">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center ">
            <FaMapMarkerAlt size={10} />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{applicationDeadline}</div>
        </h2>
        <p className="font-medium">
          Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-2">
          <Link className="btn btn-primary">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
