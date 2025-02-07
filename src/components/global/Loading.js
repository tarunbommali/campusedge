import React from "react";
import { Slab } from "react-loading-indicators";
import { useSelector } from "react-redux";

const Loading = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Dynamic text based on theme
  const loadingText = "Generating Ai Mock Interview......"

  return (
    <div className={`min-h-full flex text-center justify-center items-center ${
      currentTheme === "dark" ? "bg-[#111827]" : "bg-white"
    }`}>
      <Slab  size="large" text={loadingText} color={currentTheme === "dark" ? "#white" : "black"} />
    </div>
  );
};

export default Loading;
