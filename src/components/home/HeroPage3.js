/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useSelector } from "react-redux";

const HeroPage3 = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based class names
  const heroClass =
    currentTheme === "dark"
      ? "hero min-h-screen bg-[#f3f4f6]"
      : "hero min-h-screen bg-white";
  const overlayClass =
    currentTheme === "dark"
      ? "hero-overlay bg-opacity-80"
      : "hero-overlay bg-opacity-60";
  const cardClass =
    currentTheme === "dark"
      ? "card bg-neutral text-neutral-content"
      : "card bg-white text-black";
  const cardBodyClass =
    currentTheme === "dark" ? "card-body text-white" : "card-body text-black";
  const btnClass =
    currentTheme === "dark"
      ? "btn btn-primary text-white"
      : "btn btn-primary text-black";
  const dicordImgUrl =
    currentTheme === "dark"
      ? "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
      : "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b5061df290f5892d944_full_logo_black_RGB.svg";
  return (
    <div
      className={heroClass}
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className={overlayClass}></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className={`card w-96 ${cardClass}`}>
            <div className={`items-center text-center ${cardBodyClass}`}>
              <img alt="logo" src={dicordImgUrl} className="w-40 h-30" />

              <div className="card-actions justify-end">
                <a
                  href="https://discord.gg/Ptuvsvs2"
                  target="_blank"
                  className={btnClass}
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage3;
