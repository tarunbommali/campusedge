import React from "react";

export const SubHeader = ({ ABOUT_US_NAV_ITEMS, activeNavId, themeClasses, setActiveNavId }) => {
  return (
    
      ABOUT_US_NAV_ITEMS.map((item) => (
        <li
          key={item.navId}
          onClick={() => setActiveNavId(item.navId)}
          className={`flex items-center cursor-pointer  px-4  text-sm font-semibold py-2 transition-all duration-300 ease-in-out transform hover:scale-95 hover:text-white 
            ${activeNavId === item.navId ? themeClasses.navItemActive  : themeClasses.navItem}
            
            ${activeNavId === item.navId &&  "bg-secondary text-white" }
            `}
        >
         
          <p className="no-underline capitalize">{item.navItem.toUpperCase()}</p>  
        </li>
      ))
    
  );
};
