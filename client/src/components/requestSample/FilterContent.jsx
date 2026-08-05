import {
  FiFilter,
  FiRefreshCw,
  FiStar,
} from "react-icons/fi";

import FilterAccordion from "./FilterAccordion";

const colors = [
  "#000000",
  "#2563EB",
  "#EF4444",
  "#22C55E",
  "#F59E0B",
  "#9333EA",
  "#06B6D4",
];

const FilterContent = () => {
  return (
    <>

      {/* Header */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15">

              <FiFilter className="text-sky-400" />

            </div>

            <div>

              <h2 className="text-xl font-bold text-white">

                Filters

              </h2>

              <p className="text-sm text-slate-400">

                Refine Templates

              </p>

            </div>

          </div>

          <button
            className="
            rounded-xl
            p-3
            text-slate-400
            transition
            hover:bg-white/10
            hover:text-sky-400
          "
          >
            <FiRefreshCw />
          </button>

        </div>

      </div>

      {/* Search */}

      <div className="p-6">

        <input
          placeholder="Search Filter..."
          className="
          h-12
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-4
          text-white
          placeholder:text-slate-500
          outline-none
          focus:border-sky-400
        "
        />

      </div>

      <div className="px-6 space-y-5">

       <FilterAccordion title="Category" />

        <FilterAccordion
          title="Industry"
          items={[
            "FMCG",
            "Pharma",
            "Retail",
            "Cosmetics",
            "Industrial",
          ]}
        />

        <FilterAccordion
          title="Material"
          items={[
            "Paper",
            "PVC",
            "Vinyl",
            "Gloss",
            "Matte",
          ]}
        />

      </div>

      {/* Colors */}

      <div className="mt-8 border-t border-white/10 p-6">

        <h3 className="font-semibold text-white">

          Colors

        </h3>

        <div className="mt-5 flex flex-wrap gap-3">

          {colors.map((color) => (

            <button
              key={color}
              style={{ background: color }}
              className="
              h-10
              w-10
              rounded-full
              border-2
              border-white/10
              transition
              hover:scale-110
            "
            />

          ))}

        </div>

      </div>

      {/* Rating */}

      <div className="border-t border-white/10 p-6">

        <h3 className="font-semibold text-white">

          Rating

        </h3>

        <div className="mt-5 space-y-3">

          {[5,4,3].map((rating)=>(

            <button
              key={rating}
              className="flex items-center gap-2 text-slate-300 hover:text-yellow-400"
            >

              {Array.from({length:rating}).map((_,i)=>(

                <FiStar
                  key={i}
                  className="fill-yellow-400 text-yellow-400"
                />

              ))}

            </button>

          ))}

        </div>

      </div>

    </>
  );
};

export default FilterContent;