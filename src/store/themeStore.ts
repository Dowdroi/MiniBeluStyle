import { makeAutoObservable } from "mobx";

class ThemeStore {
  darkMode = localStorage.getItem("darkMode") === "true" || false;

  constructor() {
    makeAutoObservable(this); // Tự động theo dõi thay đổi của state
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode; // Đảo trạng thái darkMode
    localStorage.setItem("darkMode", String(this.darkMode));

    // Thêm lớp dark vào thẻ <html> để Tailwind hoạt động
    if (this.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

const themeStore = new ThemeStore();
export default themeStore;
