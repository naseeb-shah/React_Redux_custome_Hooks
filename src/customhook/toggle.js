// DarkModeToggle.js
import React from "react";
import useDarkMode from "./isDark";

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      </label>
      <p>{isDarkMode ? "Dark Mode Enabled" : "Dark Mode Disabled"}</p>
    </div>
  );
};

export default DarkModeToggle;
