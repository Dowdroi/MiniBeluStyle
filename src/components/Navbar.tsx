import { useState } from "react";
import { observer } from "mobx-react-lite";
import themeStore from "../store/themeStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Navbar = observer(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo và tên thương hiệu */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.imgur.com/MbT6Fhn.png"
            alt="BeluStyle Logo"
            className="h-10 w-10"
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
              href="#"
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

          {/* User Menu */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-600 dark:text-gray-200"
                  size="lg"
                />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">
                    Thanks for being here!
                  </div>
                  <hr className="border-gray-300 dark:border-gray-700" />
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded transition"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Hamburger Menu Toggle */}
          <button
            className="block md:hidden text-gray-600 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
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
            href="#"
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
