import { useFormContext } from "react-hook-form";

import InputField from "../../common/InputField";
import TextAreaField from "../../common/TextAreaField";

const SeoSettings = () => {

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const metaTitle = watch("metaTitle") || "";
  const metaDescription = watch("metaDescription") || "";

  return (

    <section className="rounded-3xl border border-white/10 bg-[#101B2D] p-6 lg:p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">

          SEO Settings

        </h2>

        <p className="mt-2 text-slate-400">

          Optimize your product for search engines.

        </p>

      </div>

      <div className="space-y-6">

        <InputField
          label="Meta Title"
          name="metaTitle"
          placeholder="Premium Business Card Printing"
          register={register}
          error={errors.metaTitle}
        />

        <div className="flex justify-end">

          <span
            className={`text-sm ${
              metaTitle.length > 60
                ? "text-red-400"
                : "text-slate-400"
            }`}
          >
            {metaTitle.length}/60
          </span>

        </div>

        <TextAreaField
          label="Meta Description"
          name="metaDescription"
          rows={4}
          placeholder="Write SEO description..."
          register={register}
          error={errors.metaDescription}
        />

        <div className="flex justify-end">

          <span
            className={`text-sm ${
              metaDescription.length > 160
                ? "text-red-400"
                : "text-slate-400"
            }`}
          >
            {metaDescription.length}/160
          </span>

        </div>

        <InputField
          label="Focus Keywords"
          name="keywords"
          placeholder="business cards, premium cards, visiting card"
          register={register}
          error={errors.keywords}
        />

        <InputField
          label="Canonical URL"
          name="canonical"
          placeholder="https://imprenta.in/products/business-card"
          register={register}
          error={errors.canonical}
        />

      </div>

      {/* SEO Preview */}

      <div className="mt-10 rounded-2xl border border-white/10 bg-[#08111F] p-6">

        <p className="text-sm text-green-400">

          https://imprenta.in/product/business-card

        </p>

        <h3 className="mt-2 text-xl font-semibold text-sky-400">

          {metaTitle || "Meta Title Preview"}

        </h3>

        <p className="mt-3 text-slate-400">

          {metaDescription ||
            "Meta description preview will appear here."}

        </p>

      </div>

    </section>

  );

};

export default SeoSettings;