import { FiX, FiRefreshCw } from "react-icons/fi";
import FilterContent from "./FilterContent";

const MobileFilterDrawer = ({
  open,
  onClose,
}) => {

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[998]
          bg-black/60
          backdrop-blur-sm
          transition-all
          duration-300

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}

      <div
        className={`
          fixed
          bottom-0
          left-0
          right-0
          z-[999]
          h-[88vh]
          rounded-t-[34px]
          border-t
          border-white/10
          bg-[#081525]
          transition-all
          duration-500

          ${
            open
              ? "translate-y-0"
              : "translate-y-full"
          }
        `}
      >

        {/* Handle */}

        <div className="flex justify-center pt-4">

          <div className="h-1.5 w-16 rounded-full bg-slate-500"></div>

        </div>

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <h2 className="text-2xl font-bold text-white">

            Filters

          </h2>

          <button
            onClick={onClose}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/5
            text-white
            transition
            hover:bg-red-500
          "
          >

            <FiX size={22} />

          </button>

        </div>

        {/* Body */}
  

<div className="h-[calc(88vh-170px)] overflow-y-auto">

  <FilterContent />

</div>

        {/* Footer */}

        <div className="flex gap-4 border-t border-white/10 p-5">

          <button
            className="
            flex-1
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-4
            font-semibold
            text-white
          "
          >

            <FiRefreshCw className="inline mr-2"/>

            Reset

          </button>

          <button
            className="
            flex-1
            rounded-2xl
            bg-sky-500
            py-4
            font-semibold
            text-white
            transition
            hover:bg-sky-600
          "
          >

            Apply Filters

          </button>

        </div>

      </div>

    </>
  );
};

export default MobileFilterDrawer;