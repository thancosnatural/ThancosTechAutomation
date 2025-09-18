import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const MainLayout = () => {

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0D0D0D]">
      {/* Right section: header + main content */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">

        <Header />

        {/* Scrollable main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
