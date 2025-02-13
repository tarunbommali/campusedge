import React from "react";
import * as motion from "motion/react-client";

const AiToolCard = ({ toolDetails, index, bgColor, cardTitleClass, cardBodyClass }) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      
      onClick={() => window.open(toolDetails.website, "_blank")}
      target="_blank"
      rel="noopener noreferrer"
      className="card shadow-sm flex w-96 m-2 text-black rounded-lg hover:scale-110"
      style={{ backgroundColor: bgColor }}
    >
      <div className="card-body">
        <div className="flex items-center gap-3">
          <img
            src={toolDetails.icon}
            alt={toolDetails["AI Tool Name"]}
            className="w-12 h-12 rounded-lg"
          />
          <h2 className={`text-xl card-title ${cardTitleClass}`}>
            {toolDetails["AI Tool Name"]}
          </h2>
        </div>
        <p className={cardTitleClass}>{toolDetails["Use For"]}</p>
        <p className="text-sm text-gray-500">Free Version </p>
        <p className="text-lg">{toolDetails["Free Version"]}</p>
      </div>
    </motion.a>
  );
};

export default AiToolCard;
