const FeaturesSection = () => {
  return (
    <section className="w-full bg-blue-600 py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose BeluStyle?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Feature Card 1 */}
          <div className="transform rounded-lg bg-white dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              01
            </div>
            <h3 className="text-lg font-semibold">High-Quality Products</h3>
            <p>Premium-quality fashion for modern trends.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="transform rounded-lg bg-white dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              02
            </div>
            <h3 className="text-lg font-semibold">Affordable Prices</h3>
            <p>Competitive prices without compromise.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="transform rounded-lg bg-white dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              03
            </div>
            <h3 className="text-lg font-semibold">Convenient Shopping</h3>
            <p>Effortless shopping anytime, anywhere.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="transform rounded-lg bg-white dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              04
            </div>
            <h3 className="text-lg font-semibold">Excellent Support</h3>
            <p>We are always here to help.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="transform rounded-lg bg-white dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              05
            </div>
            <h3 className="text-lg font-semibold">Trend Updates</h3>
            <p>Stay stylish with the latest fashion trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
