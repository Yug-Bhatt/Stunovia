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
  User,
  Settings,
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
    <aside className="w-64 h-screen bg-[#0B1020] border-r border-slate-800 flex flex-col">
      <div className="px-6 py-6">
        <h1 className="text-4xl font-bold text-violet-500">
          Stunovia
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Student Intelligence Platform
        </p>
      </div>

      <nav className="mt-4 flex-1">
        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`mx-3 mb-2 flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition ${
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

      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violet-500"></div>

          <div>
            <h3 className="text-white font-semibold">
              Yug Bhatt
            </h3>

            <p className="text-slate-400 text-sm">
              AIML Student
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}