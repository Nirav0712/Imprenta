import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  FiTrash2,
  FiStar,
} from "react-icons/fi";

const SortableImage = ({
  image,
  index,
  removeImage,
  setFeatured,
}) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: image.preview,
  });

  const style = {
    transform: CSS.Transform.toString(
      transform
    ),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        transition-all
        duration-300
        hover:border-sky-500
        hover:shadow-lg
        hover:shadow-sky-500/10

        ${
          isDragging
            ? "scale-105 rotate-2 opacity-70 z-50"
            : ""
        }
      `}
    >

      <img
        src={image.preview}
        alt=""
        className="
          h-40
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          right-3
          top-3
          flex
          gap-2
          opacity-0
          transition
          group-hover:opacity-100
        "
      >

        <button
          type="button"
          onClick={() =>
            setFeatured(index)
          }
          className={`rounded-full p-2 ${
            image.featured
              ? "bg-yellow-500 text-white"
              : "bg-black/60 text-white"
          }`}
        >
          <FiStar />
        </button>

        <button
          type="button"
          onClick={() =>
            removeImage(index)
          }
          className="rounded-full bg-red-500 p-2 text-white"
        >
          <FiTrash2 />
        </button>

      </div>

      {image.featured && (
        <div className="absolute bottom-3 left-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white">
          Featured
        </div>
      )}

    </div>
  );
};

export default SortableImage;