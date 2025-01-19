import React from "react";
import { NAV_ITEMS } from "../utils/constants";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="px-48 flex flex-row justify-between py-4 text-black bg-white shadow-sm">
      <div className="flex flex-col text-[#707070]">
        <p className="text-4xl  font-semibold">
        Campus Edge
        </p>
        <p className="font-thin">Find. Apply. Succeed. Your IT Dream Job Awaits.</p>
      </div>
      <ul className="flex flex-row items-center">
        {NAV_ITEMS.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={`p-2 px-4 mx-2 rounded-md hover:text-[#4a4a4b] font-thin ${
              location.pathname === item.path
                ? "underline decoration-2 decoration-[#3b82f6] underline-offset-4"
                : ""
            }`}
          >
            <li>{item.link}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Header;
