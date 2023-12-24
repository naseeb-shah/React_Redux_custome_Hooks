// useDarkMode.js
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Access localStorage to check if dark mode is enabled
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Update localStorage when isDarkMode changes
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    // Apply or remove dark mode styles
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // Return the state and a function to toggle dark mode
  return [isDarkMode, () => setIsDarkMode(!isDarkMode)];
};

export default useDarkMode;
