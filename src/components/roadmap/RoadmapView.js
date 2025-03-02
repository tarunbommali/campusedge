import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const RoadmapView = ({ jobRole, setSelectedRole }) => {
  console.log({ jobRole }, "tarun");

  if (!jobRole) {
    return <p className="text-center text-red-500">Job role not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold ">
          {jobRole?.title || "No Title Available"}
        </h1>
        <button
          onClick={() => setSelectedRole(null)}
          className="text-xl p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          <IoMdArrowRoundBack />
        </button>
      </div>

      {/* Industry Outlook */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Industry Outlook</h2>
        <p>
          <strong>Demand:</strong>{" "}
          {jobRole?.industryOutlook?.demand || "No data available"}
        </p>
        <p>
          <strong>Key Skills:</strong>{" "}
          {jobRole?.industryOutlook?.keySkills?.join(", ") ||
            "No skills listed"}
        </p>
      </div>

      {/* Salary Trends */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Salary Trends</h2>
        {jobRole?.salaryTrends ? (
          Object.entries(jobRole.salaryTrends).map(([year, range]) => (
            <p key={year}>
              {year}: ₹{range?.min || "N/A"} - ₹{range?.max || "N/A"} (Avg: ₹
              {range?.avg || "N/A"})
            </p>
          ))
        ) : (
          <p>No salary data available</p>
        )}
      </div>

      {/* Top Locations & Companies */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Top Locations & Companies</h2>
        <p>
          <strong>Top Locations:</strong>{" "}
          {jobRole?.topLocationsAndCompanies?.topLocations?.join(", ") ||
            "No data"}
        </p>
        <p>
          <strong>Top Companies:</strong>{" "}
          {jobRole?.topLocationsAndCompanies?.topCompanies?.join(", ") ||
            "No data"}
        </p>
        <p>
          <strong>Top Industries:</strong>{" "}
          {jobRole?.topLocationsAndCompanies?.topIndustries?.join(", ") ||
            "No data"}
        </p>
      </div>

      {/* Technology Stacks */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Technology Stacks</h2>
        {jobRole?.technologyStacks ? (
          Object.entries(jobRole.technologyStacks).map(([category, stack]) => (
            <p key={category}>
              <strong>{category}:</strong>{" "}
              {Array.isArray(stack) ? stack.join(", ") : "No data available"}
            </p>
          ))
        ) : (
          <p>No technology stacks available</p>
        )}
      </div>

      {/* Learning Path */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Learning Path</h2>
        <ul className="list-disc ml-6">
          {jobRole?.learningPath?.length ? (
            jobRole.learningPath.map((step, index) => (
              <li key={index}>{step}</li>
            ))
          ) : (
            <p>No learning path available</p>
          )}
        </ul>
      </div>

      {/* Beginner Resources */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Beginner Resources</h2>
        {jobRole?.beginnerResources?.length ? (
          jobRole.beginnerResources.map((resource, index) => (
            <p key={index}>
              <a
                href={resource.link}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.name} - {resource.type}
              </a>
            </p>
          ))
        ) : (
          <p>No beginner resources available</p>
        )}
      </div>

      {/* Courses & Certifications */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Courses & Certifications</h2>
        {jobRole?.coursesAndCertifications?.length ? (
          jobRole.coursesAndCertifications.map((course, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>{course?.name || "Unknown Course"}</strong> -{" "}
                {course?.platform || "Unknown Platform"}
              </p>
              <p>
                Features:{" "}
                {course?.features?.join(", ") || "No features available"}
              </p>
            </div>
          ))
        ) : (
          <p>No courses or certifications available</p>
        )}
      </div>
    </div>
  );
};

export default RoadmapView;
