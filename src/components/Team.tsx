const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nguyễn Tấn Minh",
      role: "CE180111",
      image: "https://i.imgur.com/FPrwYrP.jpeg",
    },
    {
      name: "Nguyễn Tấn Minh",
      role: "CE180111",
      image: "https://i.imgur.com/FPrwYrP.jpeg",
    },
    {
      name: "Nguyễn Tấn Minh",
      role: "CE180111",
      image: "https://i.imgur.com/FPrwYrP.jpeg",
    },
    {
      name: "Nguyễn Tấn Minh",
      role: "CE180111",
      image: "https://i.imgur.com/FPrwYrP.jpeg",
    },
    {
      name: "Nguyễn Tấn Minh",
      role: "CE180111",
      image: "https://i.imgur.com/FPrwYrP.jpeg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-700 to-blue-900 dark:from-blue-700 dark:to-blue-800 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-4xl font-bold">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="transform rounded-3xl bg-white dark:bg-gray-800 p-6 text-center text-gray-800 dark:text-gray-200 shadow-lg transition hover:scale-105 hover:shadow-xl dark:hover:shadow-blue-900/50"
            >
              <div className="relative mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-32 w-32 rounded-full border-4 border-blue-500 dark:border-blue-400 object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
