import { useState, useEffect } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";
import { PanelLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Keyboard shortcut: Cmd/Ctrl + S or Cmd/Ctrl + B toggles sidebar visibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        (e.key.toLowerCase() === "s" || e.key.toLowerCase() === "b")
      ) {
        e.preventDefault();
        setSidebarOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#FAF6EE] text-[#17232A]">
      {/* Sidebar (Desktop & Mobile) */}
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col relative transition-all duration-300">
        {/* Top Navbar */}
        <Navbar
          onMenuClick={() => setMobileOpen(true)}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        {/* Floating Restore Sidebar Pill when hidden (desktop) */}
        <AnimatePresence>
          {!sidebarOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="fixed bottom-6 left-6 z-40 hidden lg:block"
            >
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 rounded-lg glass-pill px-3 py-2 text-xs font-semibold text-[#17232A] shadow-md transition hover:border-[#299F95] hover:text-[#299F95] cursor-pointer"
                title="Show Sidebar (Shortcut: ⌘S)"
              >
                <PanelLeft size={16} className="text-[#299F95]" />
                <span>Show Sidebar</span>
                <kbd className="rounded border border-[#E8DFD1] bg-[#FAF6EE] px-1 text-[10px] text-[#5F6B70]">
                  ⌘S
                </kbd>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;