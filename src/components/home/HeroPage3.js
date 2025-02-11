/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useSelector } from "react-redux";
import {
  DISCORD_JOIN_URL,
  DISCORD_LOGO_BLACK_THEME,
  DISCORD_LOGO_WHITE_THEME,
  HEROPAGE3_BG_IMG_URL,
  
} from "../../utils/constants";

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
  
  const discordImgUrl =
    currentTheme === "dark"
      ? DISCORD_LOGO_WHITE_THEME
      : DISCORD_LOGO_BLACK_THEME;

  return (
    <div
      className={heroClass}
      style={{
        backgroundImage: `url(${HEROPAGE3_BG_IMG_URL})`,
      }}
    >
      <div className={overlayClass}></div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={discordImgUrl}
            className="max-w-sm w-1/5 mx-4 rounded-lg shadow-2xl"
            alt="Discord Logo"
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold">
              Why Join the Campus Edge Discord Community?
            </h1>
            <ul className="space-y-4 text-gray-300 py-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🚀</span>
                <p>
                  <strong>Stay Active & Engage –</strong> Connect with IT
                  professionals, ask questions, and grow together.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">💡</span>
                <p>
                  <strong>Learn by Helping –</strong> Solve others' issues and
                  discover new insights along the way.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">👥</span>
                <p>
                  <strong>Build Connections –</strong> Make new friends and
                  network with professionals.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🎙️</span>
                <p>
                  <strong>Voice Channels & Collaboration –</strong> Join
                  discussions and collaborate in real time.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🌟</span>
                <p>
                  <strong>Become a Better Developer –</strong> Enhance
                  problem-solving skills and grow as a developer.
                </p>
              </li>
            </ul>
            <a href={DISCORD_JOIN_URL} className="btn btn-secondary text-white">
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage3;
