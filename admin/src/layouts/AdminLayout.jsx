import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <Sidebar />

      <div className="lg:ml-72">

        <Header />

        <main className="p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;