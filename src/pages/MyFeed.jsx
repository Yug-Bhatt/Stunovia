const MyFeed = () => {
  return (
    <div className="text-white">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Feed
        </h1>

        <p className="mt-2 text-slate-400">
          Personalized technology news based on your interests.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
          <span className="text-sm text-violet-400">
            AI & ML
          </span>

          <h2 className="mt-3 text-xl font-semibold">
            Latest developments in Artificial Intelligence
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Discover the latest AI models, research and industry
            developments personalized for you.
          </p>

          <button className="mt-5 text-sm text-violet-400 hover:text-violet-300">
            Read Article →
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
          <span className="text-sm text-blue-400">
            Data Science
          </span>

          <h2 className="mt-3 text-xl font-semibold">
            New trends in Data Science
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Explore new tools, techniques and opportunities in the
            data science ecosystem.
          </p>

          <button className="mt-5 text-sm text-violet-400 hover:text-violet-300">
            Read Article →
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
          <span className="text-sm text-green-400">
            Web Development
          </span>

          <h2 className="mt-3 text-xl font-semibold">
            Modern technologies for developers
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Stay updated with frameworks, developer tools and
            modern web technologies.
          </p>

          <button className="mt-5 text-sm text-violet-400 hover:text-violet-300">
            Read Article →
          </button>
        </div>

      </div>

    </div>
  );
};

export default MyFeed;