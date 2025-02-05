import React from "react";
import { useSelector } from "react-redux";

const FaqList = ({ ABOUT_FAQ_LIST }) => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Dynamic theme-based classes
  const themeClasses = currentTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[#4a4a67]";

  return (
    <div>
      {ABOUT_FAQ_LIST.map((faq) => (
        <div key={faq.faqId} className={`collapse collapse-arrow my-2 ${themeClasses}`}>
          <input type="checkbox" id={faq.faqId} className="peer" />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
