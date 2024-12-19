import { useEffect, useRef } from "react";

const HeroSection = () => {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const typingDuration = 4000; // Animation thời gian chạy (4s)

    const timer = setTimeout(() => {
      if (typewriterRef.current) {
        typewriterRef.current.classList.add("done");
      }
    }, typingDuration);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <section className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 sm:py-16">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between px-6 md:flex-row md:-ml-3.5">
        {/* Logo bên trái */}
        <div className="order-last flex justify-center mb-6 md:order-first md:w-1/3 md:justify-end md:mb-0">
          <img
            src="https://i.imgur.com/045SBNN.png"
            alt="BeluStyle Logo"
            className="w-28 sm:w-40 md:w-60 lg:w-80"
          />
        </div>

        {/* Typewriting Animation */}
        <div className="space-y-4 sm:space-y-6 text-center md:w-2/3 md:text-left">
          <div className="typewriter">
            <h1
              ref={typewriterRef}
              className="text-3xl sm:text-5xl font-bold leading-[1.3] text-gray-800 dark:text-white pb-2"
            >
              Welcome to{" "}
              <span className="text-blue-600 dark:text-blue-400">
                BeluStyle
              </span>
            </h1>
          </div>
          <p className="text-sm sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto md:mx-0">
            BeluStyle is your one-stop destination for modern fashion. Explore
            premium products, effortless shopping, and unparalleled support.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center md:justify-start">
            <a
              href="#"
              className="transform rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 text-sm sm:text-base text-white shadow-lg transition hover:scale-105 hover:opacity-90 hover:bg-blue-600 dark:from-blue-400 dark:to-blue-600 dark:hover:bg-blue-500 dark:hover:text-yellow-300"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="rounded-lg border border-gray-300 bg-gray-100 px-6 py-3 text-sm sm:text-base text-gray-700 shadow transition hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
