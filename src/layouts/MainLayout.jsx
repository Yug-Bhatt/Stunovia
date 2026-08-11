import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#08111F]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MainLayout;