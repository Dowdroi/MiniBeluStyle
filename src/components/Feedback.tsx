const FeedbackSection = () => {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Feedback 1 */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg">
            <p className="italic text-sm sm:text-base text-gray-600 dark:text-gray-300">
              "BeluStyle has the best quality I've ever experienced! Highly
              recommended."
            </p>
            <h4 className="mt-4 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
              - Alex Johnson
            </h4>
          </div>
          {/* Feedback 2 */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg">
            <p className="italic text-sm sm:text-base text-gray-600 dark:text-gray-300">
              "Affordable and stylish! Love their customer support."
            </p>
            <h4 className="mt-4 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
              - Maria Lee
            </h4>
          </div>
          {/* Feedback 3 */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-lg">
            <p className="italic text-sm sm:text-base text-gray-600 dark:text-gray-300">
              "Fast shipping and great designs. BeluStyle is my go-to fashion
              store."
            </p>
            <h4 className="mt-4 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
              - Michael Brown
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
