const FAQSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {/* FAQ 1 */}
          <details className="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 shadow-md">
            <summary className="cursor-pointer px-6 py-4 font-bold text-gray-800 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700">
              What is BeluStyle's return policy?
            </summary>
            <p className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-gray-600 dark:text-gray-300">
              We offer a 30-day return policy for all items. Simply contact our
              support team to initiate the return process.
            </p>
          </details>
          {/* FAQ 2 */}
          <details className="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 shadow-md">
            <summary className="cursor-pointer px-6 py-4 font-bold text-gray-800 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700">
              How long does shipping take?
            </summary>
            <p className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-gray-600 dark:text-gray-300">
              Shipping typically takes 5-7 business days, depending on your
              location. Expedited shipping options are also available.
            </p>
          </details>
          {/* FAQ 3 */}
          <details className="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 shadow-md">
            <summary className="cursor-pointer px-6 py-4 font-bold text-gray-800 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700">
              Do you ship internationally?
            </summary>
            <p className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-gray-600 dark:text-gray-300">
              Yes, we ship to most countries worldwide. International shipping
              rates and times vary by destination.
            </p>
          </details>
          {/* FAQ 4 */}
          <details className="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 shadow-md">
            <summary className="cursor-pointer px-6 py-4 font-bold text-gray-800 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700">
              How can I track my order?
            </summary>
            <p className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-gray-600 dark:text-gray-300">
              Once your order is shipped, you'll receive a tracking number via
              email. Use it to track your order on our website.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
