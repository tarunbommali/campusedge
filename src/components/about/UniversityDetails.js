import React, { useState } from "react";

import {
  ABOUT_JNTUGV,
  VISION_JNTUGV,
  MISSION_JNTUGV,
} from "../../utils/constants";

const UniversityDetails = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 1 ? 3 : prev - 1));
  };

  return (
    <div className="carousel w-full">
      <div
        className={`carousel-item relative w-full ${
          activeSlide === 1 ? "block" : "hidden"
        }`}
      >
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <ul className="list-disc pl-6 space-y-2">
            {ABOUT_JNTUGV.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`carousel-item relative w-full ${
          activeSlide === 2 ? "block" : "hidden"
        }`}
      >
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <ul className="list-disc pl-6 space-y-2">
            {VISION_JNTUGV.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`carousel-item relative w-full ${
          activeSlide === 3 ? "block" : "hidden"
        }`}
      >
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <ul className="list-disc pl-6 space-y-2">
            {MISSION_JNTUGV.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={handlePrev} className="btn btn-circle">
          ❮
        </button>
        <button onClick={handleNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};

export default UniversityDetails;
