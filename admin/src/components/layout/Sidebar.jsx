import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarMenu";

const Sidebar = () => {
  return (
    <aside
      className="
      hidden
      lg:flex
      fixed
      left-0
      top-0
      h-screen
      w-72
      flex-col
      bg-[#0C1626]
      border-r
      border-white/10
      "
    >
      {/* Logo */}

      <div className="border-b border-white/10 p-8">

        <h1 className="text-4xl font-black text-sky-400">

          imprenta

        </h1>

        <p className="mt-2 text-slate-400">

          Admin Dashboard

        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 overflow-y-auto px-5 py-8 space-y-2">

        {sidebarMenu.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
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
  );
};

export default Sidebar;