import { FiPlus, FiSearch, FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

import { productCategories } from "../../constants/productCategories";
import { productStatus } from "../../constants/productStatus";

const ProductToolbar = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
}) => {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-[#101B2D] p-5">

      <div className="grid gap-4 xl:grid-cols-[1fr_220px_220px_auto]">

        {/* Search */}

        <div className="relative">

          <FiSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
            size={20}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#08111F]
              pl-14
              pr-5
              text-white
              outline-none
              transition
              focus:border-sky-500
            "
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            h-14
            rounded-2xl
            border
            border-white/10
            bg-[#08111F]
            px-5
            text-white
            outline-none
            focus:border-sky-500
          "
        >
          {productCategories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            h-14
            rounded-2xl
            border
            border-white/10
            bg-[#08111F]
            px-5
            text-white
            outline-none
            focus:border-sky-500
          "
        >
          {productStatus.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Button */}

        <Link
          to="/products/add"
          className="
            flex
            h-14
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-sky-500
            px-8
            font-semibold
            text-white
            transition
            hover:bg-sky-600
          "
        >
          <FiPlus />

          Add Product

        </Link>

      </div>

    </div>
  );
};

export default ProductToolbar;