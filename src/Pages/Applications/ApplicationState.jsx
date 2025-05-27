import React from "react";

const ApplicationState = () => {
  return (
    <div className="stats shadow grid grid-cols-1 md:grid-cols-3 gap-4 bg-base-200 rounded-box">
      {/* Total Applications */}
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Applications</div>
        <div className="stat-value text-primary">1,245</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      {/* Pending Reviews */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Pending Reviews</div>
        <div className="stat-value text-secondary">312</div>
        <div className="stat-desc">Updated just now</div>
      </div>

      {/* Profile Completion */}
      <div className="stat">
        <div className="stat-figure">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/anakeen @192.webp"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Profile Completion</div>
        <div className="stat-desc text-secondary">
          Update your profile today!
        </div>
      </div>
    </div>
  );
};

export default ApplicationState;
