import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { sidebarMenu } from "../../constants/sidebarMenu";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-white/10
          bg-[#0C1626]
          transition-transform
          duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          lg:translate-x-0
        `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between border-b border-white/10 p-8">

          <div>

            <h1 className="text-4xl font-black text-sky-400">

              imprenta

            </h1>

            <p className="mt-2 text-slate-400">

              Admin Dashboard

            </p>

          </div>

          {/* Mobile Close */}

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              rounded-xl
              p-2
              text-white
              hover:bg-white/10
              lg:hidden
            "
          >
            <FiX size={24} />
          </button>

        </div>

        {/* Menu */}

        <nav className="flex-1 space-y-2 overflow-y-auto px-5 py-8">

          {sidebarMenu.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-sky-500 text-white shadow-lg"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                `
                }
              >

                <Icon size={22} />

                <span className="font-medium">

                  {item.title}

                </span>

              </NavLink>

            );

          })}

        </nav>

      </aside>

    </>
  );
};

export default Sidebar;