import { useFormContext } from "react-hook-form";

const PublishSettings = () => {
  const {
    register,
    watch,
  } = useFormContext();

  const status = watch("status");

  return (
    <section className="rounded-3xl border border-white/10 bg-[#101B2D] p-6 lg:p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Publish Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Configure how this product appears on your website.
        </p>

      </div>

      {/* Status */}

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Product Status
        </label>

        <select
          {...register("status")}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-[#08111F]
            px-5
            py-4
            text-white
            outline-none
            focus:border-sky-500
          "
        >
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
          <option value="Archived">Archived</option>
        </select>

      </div>

      {/* Toggles */}

      <div className="mt-8 space-y-5">

        {[
          {
            title: "Featured Product",
            description: "Display on homepage.",
            field: "featured",
          },
          {
            title: "Trending Product",
            description: "Display in trending products.",
            field: "trending",
          },
          {
            title: "Best Seller",
            description: "Mark as bestseller.",
            field: "bestSeller",
          },
          {
            title: "New Arrival",
            description: "Show in new arrivals.",
            field: "newArrival",
          },
          {
            title: "Show on Homepage",
            description: "Display in homepage sections.",
            field: "showOnHome",
          },
        ].map((item) => (

          <label
            key={item.field}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/10
              bg-[#08111F]
              px-5
              py-4
            "
          >

            <div>

              <h4 className="font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                {item.description}
              </p>

            </div>

            <input
              type="checkbox"
              {...register(item.field)}
              className="h-5 w-5 accent-sky-500"
            />

          </label>

        ))}

      </div>

      {/* Status Preview */}

      <div className="mt-8 rounded-2xl bg-[#08111F] p-5">

        <p className="text-sm text-slate-400">
          Current Status
        </p>

        <div className="mt-3">

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold

              ${
                status === "Published"
                  ? "bg-green-500/20 text-green-400"
                  : status === "Draft"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }
            `}
          >
            {status}
          </span>

        </div>

      </div>

    </section>
  );
};

export default PublishSettings;