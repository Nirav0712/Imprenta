import { FiAlertTriangle, FiX } from "react-icons/fi";

const DeleteModal = ({
  isOpen,
  title = "Delete Item",
  message = "Are you sure you want to delete this item?",
  onClose,
  onConfirm,
  loading = false,
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-5">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#101B2D] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">

              <FiAlertTriangle
                className="text-red-400"
                size={24}
              />

            </div>

            <h2 className="text-xl font-bold text-white">

              {title}

            </h2>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <FiX size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6">

          <p className="text-slate-400 leading-7">

            {message}

          </p>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t border-white/10 p-6">

          <button
            onClick={onClose}
            disabled={loading}
            className="
              rounded-2xl
              border
              border-white/10
              px-6
              py-3
              text-white
              hover:bg-white/5
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              rounded-2xl
              bg-red-500
              px-6
              py-3
              font-semibold
              text-white
              hover:bg-red-600
              disabled:opacity-60
            "
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;