const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-700 dark:via-blue-600 dark:to-indigo-700 py-8 md:py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          BeluStyle By The Numbers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200 shadow-lg transition lg:hover:scale-105">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 md:text-5xl">
              10K+
            </div>
            <p className="mt-2 text-sm font-semibold md:text-base">
              Happy Customers
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200 shadow-lg transition lg:hover:scale-105">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 md:text-5xl">
              1K+
            </div>
            <p className="mt-2 text-sm font-semibold md:text-base">
              Products Sold
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200 shadow-lg transition lg:hover:scale-105">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 md:text-5xl">
              5+
            </div>
            <p className="mt-2 text-sm font-semibold md:text-base">
              Years in Business
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200 shadow-lg transition lg:hover:scale-105">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 md:text-5xl">
              500+
            </div>
            <p className="mt-2 text-sm font-semibold md:text-base">
              Positive Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
