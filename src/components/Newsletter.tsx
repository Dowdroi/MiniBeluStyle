const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
          Subscribe to Our Newsletter
        </h2>

        {/* Mô tả */}
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Stay updated with the latest trends and exclusive offers!
        </p>

        {/* Form */}
        <form
          action="#"
          method="POST"
          className="mx-auto flex max-w-md flex-col items-center gap-4 md:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 
                       px-4 py-3 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-8 py-3 text-white shadow-md transition 
                       hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
