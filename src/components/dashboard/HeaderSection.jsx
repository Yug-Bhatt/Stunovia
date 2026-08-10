import { Settings2 } from "lucide-react";

const HeaderSection = () => {
  return (
    <section className="flex justify-between items-start mb-8">

      <div>
        <h1 className="text-4xl font-bold">
          Good Evening, Yug! 👋
        </h1>

        <p className="mt-2 text-lg text-slate-400">
          Here's your personalized tech intelligence for today.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#111827] px-5 py-3 transition hover:border-violet-500">
        <Settings2 size={18} />
        Customize Interests
      </button>

    </section>
  );
};

export default HeaderSection;