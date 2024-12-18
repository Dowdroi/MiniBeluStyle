import { makeAutoObservable } from "mobx";

class ThemeStore {
  darkMode = localStorage.getItem("darkMode") === "true" || false;

  constructor() {
    makeAutoObservable(this); // check state
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode; // darkMode
    localStorage.setItem("darkMode", String(this.darkMode));

    if (this.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

const themeStore = new ThemeStore();
export default themeStore;
