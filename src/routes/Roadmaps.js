import { useState } from "react";
import { roadmapDetails } from "../utils/roadmapDetails";
import RoadmapView from "../components/roadmap/RoadmapView";
import { useSelector } from "react-redux";

const Roadmaps = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [filteredRoadmaps, setFilteredRoadmaps] = useState(null);
  const roadmapArray = Object.entries(roadmapDetails);
  console.log(roadmapArray);
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Define theme-based classes
  const themeClasses =
    currentTheme === "dark"
      ? {
          container: "bg-gray-900 text-white",
          button:
            "bg-gray-800 text-white border-gray-600 hover:bg-blue-500 hover:text-white",
          header: "text-white",
          card: "bg-gray-800 text-white",
        }
      : {
          container: "bg-white text-gray-800",
          button:
            "bg-white text-gray-800 border-gray-300 hover:bg-blue-500 hover:text-white",
          header: "text-gray-800",
          card: "bg-white text-gray-800",
        };

  // Home screen to display all job roles
  const renderHomeScreen = () => (
    <div className={`p-6 ${themeClasses.container}`}>
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.header}`}>
        Roadmaps
      </h1>

      {/* Input field for filtering */}
      <input
        type="text"
        placeholder="Search Job Role..."
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase();
          const filtered = roadmapArray.filter(([key]) =>
            key.toLowerCase().includes(searchTerm)
          );
          setFilteredRoadmaps(filtered);
        }}
        className="p-2 border rounded-lg w-full mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(filteredRoadmaps || roadmapArray).map(([key, roadmap]) => (
          <button
            key={key}
            onClick={() => setSelectedRole(key)}
            className={`p-4 border rounded-lg shadow-md transition ${themeClasses.button}`}
          >
            {roadmap.title || key}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`w-full md:px-16 min-h-[100vh] ${themeClasses.container}`}>
      {selectedRole === null ? (
        renderHomeScreen()
      ) : (
        <RoadmapView
          selectedRole={selectedRole}
          jobRole={roadmapDetails[selectedRole]}
          setSelectedRole={setSelectedRole}
        />
      )}
    </div>
  );
};

export default Roadmaps;
