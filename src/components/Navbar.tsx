import { observer } from "mobx-react-lite";
import menuStore from "../store/menuStore";
import themeStore from "../store/themeStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthenticator } from "@aws-amplify/ui-react";
import cartStore from "../store/cartStore";
import { useEffect, useRef } from "react";

const Navbar = observer(() => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement | null>(null);

  const handleSignOut = () => {
    menuStore.resetMenus();
    signOut();
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Close user menu if clicked outside
    if (
      menuStore.isUserMenuOpen &&
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target as Node)
    ) {
      menuStore.toggleUserMenu();
    }

    // Close hamburger menu if clicked outside
    if (
      menuStore.isMenuOpen &&
      hamburgerMenuRef.current &&
      !hamburgerMenuRef.current.contains(event.target as Node)
    ) {
      menuStore.toggleMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo và tên thương hiệu */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.imgur.com/MbT6Fhn.png"
            alt="BeluStyle Logo"
            className="h-10 w-10 transform transition-transform duration-500 hover:scale-110 hover:rotate-12"
          />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            BeluStyle
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center space-x-6 flex-grow">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/people/BeluStyle/61552976986503/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Dark Mode, Auth Controls & User Menu */}
        <div className="flex items-center space-x-4 relative">
          {/* Toggle Dark Mode */}
          <button
            onClick={() => themeStore.toggleDarkMode()}
            className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {themeStore.darkMode ? (
              <FontAwesomeIcon
                icon={faSun}
                className="text-yellow-400"
                size="lg"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="text-blue-500"
                size="lg"
              />
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => cartStore.toggleCart()}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-600 dark:text-gray-200"
              size="lg"
            />
            {cartStore.totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartStore.totalItems > 99 ? "99+" : cartStore.totalItems}
              </span>
            )}
          </button>

          {/* User Menu */}
          {user && (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => menuStore.toggleUserMenu()}
                className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-600 dark:text-gray-200"
                  size="lg"
                />
              </button>
              {menuStore.isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">
                    Thanks for being here!
                  </div>
                  <hr className="border-gray-300 dark:border-gray-700" />
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded transition"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Hamburger Menu Toggle */}
          <div ref={hamburgerMenuRef}>
            <button
              className={`block md:hidden text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
              onClick={() => menuStore.toggleMenu()}
            >
              <FontAwesomeIcon
                icon={menuStore.isMenuOpen ? faTimes : faBars}
                size="lg"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuStore.isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 py-6">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="https://www.facebook.com/people/BeluStyle/61552976986503/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
});

export default Navbar;
