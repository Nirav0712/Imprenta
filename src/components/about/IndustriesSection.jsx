import {
  FiShoppingBag,
  FiShield,
  FiDroplet,
  FiTool,
  FiCpu,
  FiGlobe,
} from "react-icons/fi";

import { industries } from "../../data/aboutData";

const icons = [
  <FiShoppingBag size={34} />,
  <FiShield size={34} />,
  <FiDroplet size={34} />,
  <FiTool size={34} />,
  <FiCpu size={34} />,
  <FiGlobe size={34} />,
];

const IndustriesSection = () => {
  return (
    <section className="py-24">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-300 backdrop-blur-xl">

            Industries

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">

            Industries

            <span className="block text-sky-400">

              We Serve

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            Delivering dependable packaging and branding solutions across
            diverse industries where quality, durability and consistency
            matter.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {industries.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[60px_12px_60px_12px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)]"
            >

              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

              <div className="relative">

                {/* Organic Icon */}

                <div className="relative inline-flex">

                  <div className="absolute inset-0 rounded-[35%_65%_60%_40%/45%_35%_65%_55%] bg-sky-500/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-[35%_65%_60%_40%/45%_35%_65%_55%]
                      border
                      border-sky-400/20
                      bg-gradient-to-br
                      from-sky-500/20
                      via-cyan-500/10
                      to-transparent
                      backdrop-blur-xl
                      text-sky-300
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                      group-hover:border-sky-400/40
                    "
                  >
                    {icons[index]}
                  </div>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-xl sm:text-2xl font-bold text-white leading-snug">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default IndustriesSection;