import { useSelector } from "react-redux";

// Button Component with Theme
export const Button = ({ children, ...props }) => {
  const currentTheme = useSelector((state) => state.theme) || "light";
  const themeClasses = currentTheme === "dark"
    ? "bg-blue-700 text-white hover:bg-blue-600"
    : "bg-blue-500 text-white hover:bg-blue-400";

  return (
    <button className={`btn px-4 py-2 rounded ${themeClasses}`} {...props}>
      {children}
    </button>
  );
};

// Input Component with Theme
export const Input = (props) => {
  const currentTheme = useSelector((state) => state.theme) || "light";
  const themeClasses = currentTheme === "dark"
    ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
    : "bg-white text-gray-700 border-gray-300 placeholder-gray-500";

  return (
    <input
      className={`input input-bordered w-full max-w-xs ${themeClasses}`}
      {...props}
    />
  );
};

// Textarea Component with Theme
export const Textarea = (props) => {
  const currentTheme = useSelector((state) => state.theme) || "light";
  const themeClasses = currentTheme === "dark"
    ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
    : "bg-white text-gray-700 border-gray-300 placeholder-gray-500";

  return (
    <textarea
      className={`input input-bordered w-full max-w-xs ${themeClasses}`}
      {...props}
    />
  );
};
