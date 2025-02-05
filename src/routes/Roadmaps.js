import { useState } from "react";
import { ROADMAPS_LIST } from "../utils/roadmapConstants";
import RoadmapContent from "../components/roadmap/RoadmapContent";
import RoadmapView from "../components/roadmap/RoadmapView";
import { useSelector } from "react-redux";

const Roadmaps = () => {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("technologies");

  const activeRoadmap = activeRoadmapIndex !== null ? ROADMAPS_LIST[activeRoadmapIndex] : null;
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Define theme-based classes
  const themeClasses = currentTheme === "dark"
    ? {
        container: "bg-gray-900 text-white",
        button: "bg-gray-800 text-white border-gray-600 hover:bg-blue-500 hover:text-white",
        header: "text-white",
        card: "bg-gray-800 text-white",
      }
    : {
        container: "bg-white text-gray-800",
        button: "bg-white text-gray-800 border-gray-300 hover:bg-blue-500 hover:text-white",
        header: "text-gray-800",
        card: "bg-white text-gray-800",
      };

  // Home screen to display all job roles
  const renderHomeScreen = () => (
    <div className={`p-6 ${themeClasses.container}`}>
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.header}`}>Roadmaps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ROADMAPS_LIST.map((roadmap, index) => (
          <button
            key={index}
            onClick={() => setActiveRoadmapIndex(index)}
            className={`p-4 border rounded-lg shadow-md transition ${themeClasses.button}`}
          >
            {roadmap.title}
          </button>
        ))}
      </div>
    </div>
  );

  const renderRoadmapView = () =>
    <RoadmapView
      setActiveRoadmapIndex={setActiveRoadmapIndex}
      activeRoadmap={activeRoadmap}
      setActiveTab={setActiveTab}
      activeTab={activeTab}
      renderContent={() => <RoadmapContent activeRoadmap={activeRoadmap} activeTab={activeTab} />}
    />;

  return (
    <div className={`w-full md:px-16 min-h-full ${themeClasses.container}`}>
      {activeRoadmapIndex === null ? renderHomeScreen() : renderRoadmapView()}
    </div>
  );
};

export default Roadmaps;
