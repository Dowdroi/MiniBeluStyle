const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-700 dark:via-blue-600 dark:to-indigo-700 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <h2 className="mb-8 text-4xl font-bold">BeluStyle By The Numbers</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105 dark:hover:scale-105">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">
              10K+
            </div>
            <p className="mt-2 font-semibold">Happy Customers</p>
          </div>

          {/* Stat 2 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105 dark:hover:scale-105">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">
              1K+
            </div>
            <p className="mt-2 font-semibold">Products Sold</p>
          </div>

          {/* Stat 3 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105 dark:hover:scale-105">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">
              5+
            </div>
            <p className="mt-2 font-semibold">Years in Business</p>
          </div>

          {/* Stat 4 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105 dark:hover:scale-105">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">
              500+
            </div>
            <p className="mt-2 font-semibold">Positive Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
