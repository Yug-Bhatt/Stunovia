import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 px-8 bg-[#111827] border-b border-slate-800 flex items-center justify-between">
      <div className="relative w-[500px]">
        <Search
          size={18}
          className="absolute left-4 top-4 text-slate-400"
        />

        <input
          className="w-full bg-[#1E293B] rounded-xl py-3 pl-12 pr-4 text-white outline-none"
          placeholder="Search for news, internships..."
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-white" />

        <div className="text-white font-semibold">
          Yug Bhatt
        </div>
      </div>
    </header>
  );
}