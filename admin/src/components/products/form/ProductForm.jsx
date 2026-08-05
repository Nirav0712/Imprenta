import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { productService } from "../../../services/productService";
import { productSchema } from "../../../utils/productSchema";
import { productInitialValues } from "../../../constants/productInitialValues";

import BasicInfo from "./BasicInfo";
import PricingInventory from "./PricingInventory";
import ProductImages from "./ProductImages";
import SeoSettings from "./SeoSettings";
import PublishSettings from "./PublishSettings";

const ProductForm = () => {
  const methods = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: productInitialValues,
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await productService.createProduct(data);

      console.log("Product Saved:", data);

      methods.reset();

      alert("Product saved successfully.");
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid gap-8 xl:grid-cols-[2fr_1fr]"
      >
        {/* LEFT SIDE */}

        <div className="space-y-8">
          <BasicInfo />

          <PricingInventory />

          <SeoSettings />
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-8">
          <ProductImages />

          <PublishSettings />
        </div>

        {/* ACTION BAR */}

        <div className="xl:col-span-2">
          <div className="sticky bottom-6 rounded-3xl border border-white/10 bg-[#101B2D] p-5 backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => methods.reset()}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  px-8
                  py-4
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/5
                "
              >
                Reset
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  rounded-2xl
                  bg-sky-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-sky-600
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isSubmitting ? "Saving..." : "Save Product"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProductForm;