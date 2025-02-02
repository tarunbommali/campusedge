import { useState } from "react";
import { ROADMAPS_LIST } from "../utils/roadmapConstants";
import RoadmapContent from "../components/RoadmapContent";
import RoadmapView from "../components/RoadmapView";


const Roadmaps = () => {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("technologies");

  const activeRoadmap = activeRoadmapIndex !== null ? ROADMAPS_LIST[activeRoadmapIndex] : null;

  // Home screen to display all job roles
  const renderHomeScreen = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Roadmaps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ROADMAPS_LIST.map((roadmap, index) => (
          <button
            key={index}
            onClick={() => setActiveRoadmapIndex(index)}
            className="p-4 border rounded-lg bg-white shadow-md hover:bg-blue-500 hover:text-white transition"
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
    <div className="w-full md:px-16">
      {activeRoadmapIndex === null ? renderHomeScreen() : renderRoadmapView()}
    </div>
  );
};

export default Roadmaps;
