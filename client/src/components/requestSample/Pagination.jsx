import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { useTemplates } from "../../context/TemplateContext";

const Pagination = () => {

  const {

    currentPage,

    setCurrentPage,

    totalPages,

  } = useTemplates();

  if (totalPages <= 1) return null;

  return (

    <div
      className="
      mt-16
      flex
      justify-center
      items-center
      gap-3
    "
    >

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="
        h-12
        w-12
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-white
        transition
        hover:border-sky-400
        disabled:opacity-40
      "
      >

        <FiChevronLeft />

      </button>

      {Array.from({

        length: totalPages,

      }).map((_, index) => (

        <button
          key={index}
          onClick={() =>
            setCurrentPage(index + 1)
          }
          className={`

          h-12
          w-12
          rounded-xl
          transition

          ${
            currentPage === index + 1

              ? "bg-sky-500 text-white"

              : "bg-white/5 border border-white/10 text-slate-300"

          }

        `}
        >

          {index + 1}

        </button>

      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="
        h-12
        w-12
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-white
        transition
        hover:border-sky-400
        disabled:opacity-40
      "
      >

        <FiChevronRight />

      </button>

    </div>

  );

};

export default Pagination;