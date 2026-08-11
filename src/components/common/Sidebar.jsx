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

import { NavLink } from "react-router-dom";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: Newspaper,
    title: "My Feed",
    path: "/feed",
  },
  {
    icon: Briefcase,
    title: "Internships",
    path: "/internships",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    path: "/hackathons",
  },
  {
    icon: FileText,
    title: "Research Papers",
    path: "/research-papers",
  },
  {
    icon: Code2,
    title: "GitHub",
    path: "/github",
  },
  {
    icon: BookOpen,
    title: "Courses",
    path: "/courses",
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    path: "/bookmarks",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    path: "/ai-assistant",
  },
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

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `mx-3 mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
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