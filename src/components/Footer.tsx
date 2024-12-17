const FooterSection = () => {
  return (
    <footer className="w-full py-6 sm:py-8 text-gray-800 dark:text-gray-300 transition duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 text-center">
        <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          &copy; 2024 BeluStyle. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="#"
            className="transition duration-200 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="#"
            className="transition duration-200 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="#"
            className="transition duration-200 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
