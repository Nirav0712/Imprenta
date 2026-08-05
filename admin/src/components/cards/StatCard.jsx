import { FiArrowUpRight } from "react-icons/fi";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
}) => {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#101B2D]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-sky-400/30
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">
            {value}
          </h2>

        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: color }}
        >
          <Icon
            size={28}
            className="text-white"
          />
        </div>

      </div>

      <div className="mt-8 flex items-center text-sm text-emerald-400">

        <FiArrowUpRight />

        <span className="ml-2">
          +12.5% this month
        </span>

      </div>

    </div>
  );
};

export default StatCard;