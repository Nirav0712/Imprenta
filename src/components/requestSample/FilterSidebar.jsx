import FilterContent from "./FilterContent";

const FilterSidebar = () => {

  return (

    <aside
      className="
      hidden
      xl:block
      sticky
      top-28
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      overflow-hidden
    "
    >

      <FilterContent />

      <div className="border-t border-white/10 p-6">

        <button
          className="
          w-full
          rounded-2xl
          bg-sky-500
          py-4
          font-semibold
          text-white
          hover:bg-sky-600
        "
        >
          Apply Filters
        </button>

      </div>

    </aside>

  );

};

export default FilterSidebar;