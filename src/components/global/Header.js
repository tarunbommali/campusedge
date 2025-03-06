import { useSelector, useDispatch } from "react-redux";
import { Menu, X } from "lucide-react";
import { toggleSidebar } from "../../store/sidebarSlice";
import { NAV_ITEMS } from "../../utils/constants";
import { Link } from "react-router-dom";
import { toggleTheme } from "../../store/themeSlice";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const currentTheme = useSelector((state) => state.theme) || "light";
  const isDarkMode = currentTheme === "dark";

  const sidebarRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dispatch(toggleSidebar()); // Close sidebar if clicking outside
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded, dispatch, isDarkMode]);

  return (
    <>
      <header
        className={`flex justify-between items-center px-6 py-4 shadow-md ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1 className="text-xl font-bold">Campus Edge</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`hover:text-indigo-600 ${
                isDarkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700"
              }`}
            >
              {item.link}
            </Link>
          ))}
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center">
          <button
            className="mx-2 p-2 rounded-lg"
            onClick={() => dispatch(toggleSidebar())}
          >
            {expanded ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-64 shadow-md transform transition-transform duration-300 md:hidden ${
          expanded ? "translate-x-0" : "-translate-x-full"
        } ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        <nav className="flex flex-col p-4">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`py-2 px-3 rounded-md ${
                isDarkMode
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-black"
              }`}
              onClick={() => dispatch(toggleSidebar())} // Close menu after clicking
            >
              {item.link}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
