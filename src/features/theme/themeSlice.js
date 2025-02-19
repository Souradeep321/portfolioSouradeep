import { createSlice } from "@reduxjs/toolkit";

// Load theme from localStorage or default to "light"
const initialTheme = localStorage.getItem("theme") || "light";

// Apply theme class immediately on load
if (initialTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeMode: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.themeMode);

      // Add or remove "dark" class for Tailwind dark mode support
      if (state.themeMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
