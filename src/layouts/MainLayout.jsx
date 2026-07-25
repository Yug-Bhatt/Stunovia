import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8 bg-[#08111F] min-h-screen">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;