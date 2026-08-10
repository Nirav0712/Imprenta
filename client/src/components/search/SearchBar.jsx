import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import allProducts from "../../data/allProducts";
import SearchDropdown from "./SearchDropdown";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

  setSelectedIndex(-1);
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 250);

  return () => clearTimeout(timer);
}, [search]);

useEffect(() => {

  if (!debouncedSearch.trim()) {
    setResults([]);
    return;
  }

  const filtered = allProducts.filter((item) =>
    item.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  setResults(filtered);

    console.log(filtered);

}, [debouncedSearch]);

  const handleKeyDown = (e) => {
  if (!results.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();

    setSelectedIndex((prev) =>
      prev < results.length - 1 ? prev + 1 : prev
    );
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();

    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : 0
    );
  }

  if (e.key === "Enter") {
    if (selectedIndex >= 0) {
      window.location.href = `/product/${results[selectedIndex].id}`;
    }
  }

  if (e.key === "Escape") {
    setFocused(false);
    setResults([]);
  }
};

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setResults([]);
      setSearch("");
      setFocused(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <div
        ref={wrapperRef}
        className="relative w-full max-w-[720px]"
    >

      {/* Search Input */}

      <div
        className={`relative overflow-hidden rounded-2xl border transition-all duration-300
        ${
          focused
            ? "border-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            : "border-white/20"
        }`}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() =>
            setTimeout(() => setFocused(false), 150)
          }
          placeholder="Search products, labels, packaging..."
          className="h-[54px] w-full bg-white/10 backdrop-blur-xl pl-6 pr-14 text-white placeholder:text-slate-300 outline-none"
        />

        <FiSearch
          className="absolute right-5 top-1/2 -translate-y-1/2 text-white"
          size={22}
        />
      </div>

      {/* Dropdown */}

      {focused && search.trim() !== "" && (
 <SearchDropdown
  results={results}
  search={search}
  setSearch={setSearch}
  setResults={setResults}
  selectedIndex={selectedIndex}
/>
)}

    </div>
  );
};


export default SearchBar;