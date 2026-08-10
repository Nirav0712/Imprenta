import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const SearchDropdown = ({
  results,
  search,
  setSearch,
  setResults,
  selectedIndex,
}) => {
  const navigate = useNavigate();

  

  const openProduct = (product) => {
    navigate(`/product/${product.id}`);
    setSearch("");
    setResults([]);
  };

  const openAllResults = () => {
  navigate(`/search?query=${encodeURIComponent(search)}`);
  setResults([]);
};

  

  return (
    <div
      className="
      absolute left-0 top-[64px]
      w-full
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-[#0E1C32]/95
      backdrop-blur-2xl
      shadow-2xl
      animate-[fadeIn_.25s_ease]
      z-[999]
    "
    >
      {/* No Products */}

     {results.length === 0 ? (

  <div className="py-12 text-center">

    <div className="text-6xl mb-3">
      🔍
    </div>

    <h3 className="text-white text-xl font-semibold">
      No Products Found
    </h3>

    <p className="mt-2 text-slate-400">
      Try another keyword.
    </p>

  </div>

) : (
        <>
          <div className="max-h-[420px] overflow-y-auto">

            {results.slice(0, 8).map((product, index) => (

              <button
                key={product.id}
                onClick={() => openProduct(product)}
              className={`
  w-full
  flex
  items-center
  gap-5
  p-5
  transition-all
  duration-300

  ${
    index === selectedIndex
      ? "bg-sky-500/20"
      : "hover:bg-white/10"
  }
`}
              >

                {/* Image */}

                <div className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />

                </div>

                {/* Content */}

                <div className="flex-1 text-left">

                  <h3 className="text-white font-semibold text-lg">

                    {product.title}

                  </h3>

                  <p className="mt-2 text-sky-300">

                    {product.price}

                  </p>

                </div>

                <FiArrowRight
                  className="text-slate-400"
                  size={22}
                />

              </button>

            ))}

          </div>

          {/* Footer */}

        <button
  onClick={openAllResults}
  className="
    w-full
    border-t
    border-white/10
    py-4
    text-sky-400
    font-semibold
    hover:bg-white/10
    transition
  "
>
  View All Results
</button>
        </>
      )}
    </div>
  );
};

export default SearchDropdown;