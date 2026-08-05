import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTemplates } from "../../context/TemplateContext";

const FilterAccordion = ({ title, items = [] }) => {
  const {
    categoryList,
    categories,
    setCategories,
  } = useTemplates();

  const [open, setOpen] = useState(true);

  const toggleCategory = (item) => {
    // Sirf Category accordion ke liye
    if (title !== "Category") return;

    if (categories.includes(item)) {
      setCategories(categories.filter((cat) => cat !== item));
    } else {
      setCategories([...categories, item]);
    }
  };

  // Dynamic Category List
  const displayItems =
    title === "Category" ? categoryList : items;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          bg-white/5
          px-5
          py-4
          transition
          hover:bg-white/10
        "
      >
        <span className="font-semibold text-white">
          {title}
        </span>

        <FiChevronDown
          className={`transition duration-300 text-white ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Body */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${
            open
              ? "max-h-[600px]"
              : "max-h-0"
          }
        `}
      >
        <div className="space-y-4 p-5">

          {displayItems.map((item) => (

            <label
              key={item}
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                text-slate-300
                transition
                hover:text-white
              "
            >

              <input
                type="checkbox"
                checked={
                  title === "Category"
                    ? categories.includes(item)
                    : false
                }
                onChange={() => toggleCategory(item)}
                className="
                  h-4
                  w-4
                  accent-sky-500
                "
              />

              <span>{item}</span>

            </label>

          ))}

        </div>
      </div>

    </div>
  );
};

export default FilterAccordion;