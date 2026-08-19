import { Bell, Search, Menu, Sparkles, PanelLeft, PanelLeftClose } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar({
  onMenuClick = () => {},
  sidebarOpen = true,
  onToggleSidebar = () => {},
}) {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between glass-header px-6 sm:px-8 animate-fadeIn">
      {/* Left: Sidebar Toggle (Desktop & Mobile), Brand (when collapsed) & Global Search */}
      <div className="flex items-center gap-3 flex-1 max-w-2xl">
        {/* Mobile menu hamburger */}
        <button
          onClick={onMenuClick}
          className="flex h-9 w-9 items-center justify-center rounded-lg glass-pill text-[#17232A] transition hover:bg-white lg:hidden cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu size={18} />
        </button>

        {/* Desktop sidebar restore button (only shown when sidebar is collapsed) */}
        {!sidebarOpen && (
          <button
            onClick={onToggleSidebar}
            className="hidden lg:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg glass-pill text-[#5F6B70] transition hover:bg-white hover:text-[#299F95] cursor-pointer"
            title="Show Sidebar (⌘S)"
            aria-label="Show sidebar"
          >
            <PanelLeft size={18} className="text-[#299F95]" />
          </button>
        )}

        {/* Brand shown in Navbar when sidebar is hidden on desktop */}
        {!sidebarOpen && (
          <Link to="/" className="hidden lg:flex items-center mr-2 transition hover:opacity-90">
            <Logo variant="compact" iconSize={28} />
          </Link>
        )}

        {/* Search Bar */}
        <div className="relative w-full">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6B70]"
          />
          <input
            type="text"
            className="w-full rounded-lg glass-input py-2 pl-9 pr-4 text-sm text-[#17232A] placeholder-[#5F6B70] outline-none transition focus:border-[#299F95] focus:bg-white focus:ring-1 focus:ring-[#299F95]"
            placeholder="Search opportunities, news, skills, research..."
          />
          <kbd className="absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-[#E8DFD1] bg-[#FAF6EE]/80 px-1.5 py-0.5 text-[10px] font-semibold text-[#5F6B70] sm:inline-block">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Ask AI, Notifications & Profile Avatar */}
      <div className="flex items-center gap-3 ml-4">
        <Link
          to="/ai-assistant"
          className="hidden sm:flex items-center gap-1.5 rounded-lg border border-[#299F95]/30 bg-[#299F95]/10 px-3 py-1.5 text-xs font-semibold text-[#299F95] backdrop-blur-xs transition hover:bg-[#299F95]/20"
        >
          <Sparkles size={13} />
          <span>Ask AI</span>
        </Link>

        {/* Notifications */}
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg glass-pill text-[#5F6B70] transition hover:bg-white hover:text-[#17232A] cursor-pointer"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#299F95]"></span>
        </button>

        {/* Avatar pill */}
        <div className="flex items-center gap-2 rounded-lg glass-pill px-2.5 py-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#299F95] text-[11px] font-bold text-white shadow-2xs">
            YB
          </div>
          <span className="hidden md:inline-block text-xs font-semibold text-[#17232A]">
            Yug Bhatt
          </span>
        </div>
      </div>
    </header>
  );
}