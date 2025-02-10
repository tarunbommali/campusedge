import React from "react";
import { useSelector } from "react-redux";
import {
  ABOUT_JNTUGV,
  VISION_JNTUGV,
  MISSION_JNTUGV,
} from "../../utils/constants";

const UniversityDetails = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Dynamic classes for the theme
  const themeClasses =
    currentTheme === "dark"
      ? { bg: "bg-[#111827]", text: "text-white", btn: "btn-accent" }
      : { bg: "bg-white", text: "text-gray-700", btn: "btn-primary" };

  const renderSection = (title, items, imgSrc, altText) => (
    <div className={`hero ${themeClasses.bg}  w-full md:max-w-5xl mx-auto`}>
      <div className="hero-content flex-col flex flex-start">
        <img
          alt={altText}
          src={imgSrc}
          className="md:w-64 md:h-64 w-20 h-20 items-start rounded-lg shadow-2xl object-cover"
        />
        <div className="flex flex-col items-center">
          <h1 className={`text-lg md:text-5xl font-bold ${themeClasses.text}`}>{title}</h1>
          <ul className="list-disc md:pl-6 md:py-6 md:space-y-2">
            {items.map((item, index) => (
              <li key={index} className={`text-sm ${themeClasses.text}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-scroll min-h-full">
      {renderSection(
        "Mission",
        MISSION_JNTUGV,
        "https://thumbs.dreamstime.com/b/mission-icon-social-media-instagram-concept-business-goal-logo-isolated-white-background-eps-vector-mission-icon-179754614.jpg",
        "mission"
      )}
      {renderSection(
        "Vision",
        VISION_JNTUGV,
        "https://img.freepik.com/premium-vector/vision-logo-eye-icon-app-illustration_654297-176.jpg",
        "vision"
      )}
      {renderSection(
        "About",
        ABOUT_JNTUGV,
        "https://media.istockphoto.com/id/950039636/vector/about-us-flat-design-orange-round-vector-icon-in-eps-10.jpg?s=612x612&w=0&k=20&c=3eXs5SjFq4TWTIi7zoWifTn9q4xulmyB53dyuPP4ypg=",
        "about"
      )}
    </div>
  );
};

export default UniversityDetails;