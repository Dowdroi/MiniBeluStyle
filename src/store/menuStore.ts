import { makeAutoObservable } from "mobx";

class MenuStore {
  isMenuOpen = false;
  isUserMenuOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.isUserMenuOpen = false; // Đóng User Menu
    }
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) {
      this.isMenuOpen = false; // Đóng Hamburger Menu
    }
  }
}

const menuStore = new MenuStore();
export default menuStore;
