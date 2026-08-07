import {
  FiX,
  FiHeart,
  FiStar,
  FiCheck,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const TemplatePreviewModal = ({
  open,
  onClose,
  template,
}) => {
  const navigate = useNavigate();

  if (!open || !template) return null;

  const handleRequestSample = () => {
    onClose();

    navigate("/request-wizard", {
      state: {
        template,
      },
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">

      {/* Background */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative
          w-full
          max-w-7xl
          max-h-[95vh]
          overflow-y-auto
          rounded-[36px]
          border
          border-white/10
          bg-[#09192F]
          shadow-[0_40px_120px_rgba(0,0,0,.45)]
        "
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-6
            top-6
            z-20
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-white
            transition
            hover:bg-sky-500
          "
        >
          <FiX size={22} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT */}
          <div className="p-8">

            <div className="overflow-hidden rounded-[28px] bg-white">

              <img
                src={template.image}
                alt={template.title}
                className="
                  h-[260px]
                  w-full
                  object-cover
                  sm:h-[380px]
                  lg:h-[520px]
                  transition
                  duration-700
                  hover:scale-110
                "
              />

            </div>

            {/* Thumbnails */}
            <div className="mt-5 grid grid-cols-4 gap-4">

              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  type="button"
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white
                    p-2
                  "
                >
                  <img
                    src={template.image}
                    alt=""
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="max-h-[90vh] overflow-y-auto p-8 lg:p-10">

            {/* Category */}
            <span
              className="
                inline-flex
                rounded-full
                border
                border-sky-400/20
                bg-sky-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-sky-300
              "
            >
              {template.category}
            </span>

            {/* Title */}
            <h2 className="mt-6 text-4xl font-black text-white">
              {template.title}
            </h2>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">

              <div className="flex items-center gap-1 text-yellow-400">

                <FiStar className="fill-yellow-400" />

                <span className="font-semibold text-white">
                  {template.rating}
                </span>

              </div>

              <span className="text-slate-500">
                |
              </span>

              <span className="text-slate-400">
                248 Reviews
              </span>

            </div>

            {/* Price */}
            <div className="mt-8">

              <h3 className="text-5xl font-black text-sky-400">
                {template.price}
              </h3>

              <p className="mt-2 text-slate-400">
                Starting Price (GST Extra)
              </p>

            </div>

            {/* Description */}
            <p className="mt-8 leading-8 text-slate-300">
              Professionally designed premium template with
              high-resolution artwork suitable for commercial
              printing. Fully customizable according to your
              branding requirements.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">

              {[
                "Editable Design",
                "Print Ready Files",
                "Premium Quality",
                "Fast Production",
                "Unlimited Customization",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-sky-500/15
                    "
                  >
                    <FiCheck className="text-sky-400" />
                  </div>

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Quantity */}
            <div className="mt-10">

              <h4 className="text-lg font-semibold text-white">
                Quantity
              </h4>

              <div className="mt-4 flex flex-wrap gap-3">

                {[100, 250, 500, 1000].map((qty) => (

                  <button
                    key={qty}
                    type="button"
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-6
                      py-3
                      text-white
                      transition
                      hover:border-sky-400
                      hover:bg-sky-500/10
                    "
                  >
                    {qty}
                  </button>

                ))}

              </div>

            </div>

            {/* Colors */}
            <div className="mt-10">

              <h4 className="text-lg font-semibold text-white">
                Available Colors
              </h4>

              <div className="mt-4 flex gap-4">

                <button
                  type="button"
                  className="h-10 w-10 rounded-full bg-black ring-2 ring-sky-400"
                />

                <button
                  type="button"
                  className="h-10 w-10 rounded-full bg-blue-600"
                />

                <button
                  type="button"
                  className="h-10 w-10 rounded-full bg-red-500"
                />

                <button
                  type="button"
                  className="h-10 w-10 rounded-full bg-green-500"
                />

                <button
                  type="button"
                  className="h-10 w-10 rounded-full bg-yellow-400"
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">

              {/* REQUEST SAMPLE */}
              <button
                type="button"
                onClick={handleRequestSample}
                className="
                  flex-1
                  rounded-2xl
                  bg-sky-500
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-sky-600
                  active:scale-[0.98]
                "
              >
                Request Sample
              </button>

              {/* CUSTOMIZE */}
              <button
                type="button"
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:border-sky-400
                "
              >
                Customize Design
              </button>

            </div>

            {/* Wishlist */}
            <button
              type="button"
              className="
                mt-6
                flex
                items-center
                gap-3
                text-slate-300
                transition
                hover:text-sky-400
              "
            >
              <FiHeart />
              Add to Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TemplatePreviewModal;