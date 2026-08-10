import {
  LayoutDashboard,
  Newspaper,
  Briefcase,
  Trophy,
  FileText,
  Code2,
  BookOpen,
  Bookmark,
  Bot,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Newspaper, title: "My Feed" },
  { icon: Briefcase, title: "Internships" },
  { icon: Trophy, title: "Hackathons" },
  { icon: FileText, title: "Research Papers" },
  { icon: Code2, title: "GitHub" },
  { icon: BookOpen, title: "Courses" },
  { icon: Bookmark, title: "Bookmarks" },
  { icon: Bot, title: "AI Assistant" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-slate-800 bg-[#0b1020]">

      {/* Logo */}
      <div className="px-5 pt-5">
        <h1 className="text-3xl font-bold text-violet-500">
          Stunovia
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Student Intelligence Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1 overflow-y-auto">

        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`mx-3 mb-2 flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition ${
                index === 0
                  ? "bg-violet-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </div>
          );
        })}

      </nav>

      {/* User Profile */}
      <div className="shrink-0 border-t border-slate-800 p-5">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-full bg-violet-500"></div>

          <div>
            <h3 className="font-semibold text-white">
              Yug Bhatt
            </h3>

            <p className="text-sm text-slate-400">
              AIML Student
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}