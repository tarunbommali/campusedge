import React from "react";
import { AI_TOOLS } from "../../utils/constants";
import { useSelector } from "react-redux";
import AiToolCard from "./AiToolCard";

const HeroPage2 = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based class names
  const containerClass =
    currentTheme === "dark"
      ? "bg-[#111827] text-white"
      : "bg-[#f8f9fa] text-black";

  const cardTitleClass = currentTheme === "dark" ? "text-[#1f2937]" : "text-black";
  const cardBodyClass =
    currentTheme === "dark" ? "text-gray-300" : "text-gray-700";

  // Background colors for cards
  const bg_colors = ["#ffc0c7", "#dfd9d8", "#c8dbd0", "#8bc3c4", "#eab1b8", "#eae098"];

  return (
    <div className={`md:px-20 py-6 ${containerClass}`}>
      {/* AI Tool Cards */}
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-white">AI Tools</h1>
      <div className="flex flex-wrap  px-auto m-auto mt-4">
        {AI_TOOLS.map((tab, index) => (
          <AiToolCard
            key={tab.id}
            toolDetails={tab}
            index={index}
            bgColor={bg_colors[index % bg_colors.length]}
            cardTitleClass={cardTitleClass}
            cardBodyClass={cardBodyClass}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default HeroPage2;
