import { observer } from "mobx-react-lite";
import themeStore from "../store/themeStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = observer(() => {
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
        <ul className="flex justify-center space-x-6 flex-grow">
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

        {/* Dark Mode Toggle */}
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
      </div>
    </nav>
  );
});

export default Navbar;
