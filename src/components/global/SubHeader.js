import React from "react";

export const SubHeader = ({ ABOUT_US_NAV_ITEMS, activeNavId, themeClasses, setActiveNavId }) => {
  return (
    <ul className="flex justify-start mt-5">
      {ABOUT_US_NAV_ITEMS.map((item) => (
        <li
          key={item.navId}
          onClick={() => setActiveNavId(item.navId)}
          className={`flex items-center cursor-pointer bg-black rounded-lg mx-2 px-2 md:ml-8 text-sm font-semibold py-2 transition-all duration-300 ease-in-out transform hover:scale-95 hover:text-[#3b82f6] 
            ${activeNavId === item.navId ? themeClasses.navItemActive : themeClasses.navItem}`}
        >
          {typeof item.logo_url === "string" ? (
            <img src={item.logo_url} alt="icon" className="w-6 h-6 mr-2" />
          ) : (
            <item.logo_url className={`w-6 h-6 mr-2`} />
          )}
          <p className="no-underline capitalize">{item.navItem}</p>  
        </li>
      ))}
    </ul>
  );
};
