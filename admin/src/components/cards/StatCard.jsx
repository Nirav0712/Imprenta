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

    p-5
    sm:p-6

    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-sky-400/30
  "
>
    <div className="flex items-start justify-between">

        <div>

        <p className="text-sm text-slate-400">
            {title}
          </p>

         <h2
  className="
    mt-2

    text-3xl

    sm:text-4xl

    font-black
    text-white
  "
>
            {value}
          </h2>

        </div>

       <div
  className="flex h-16 w-16 items-center justify-center rounded-2xl"
        >
          <Icon
  size={24}
  className="text-white sm:text-[28px]"
/>
        </div>

      </div>

   <div
  className="
    mt-6

    flex
    items-center

    text-xs

    sm:text-sm

    text-emerald-400
  "
>

        <FiArrowUpRight />

        <span className="ml-2">
          +12.5% this month
        </span>

      </div>

    </div>
  );
};

export default StatCard;