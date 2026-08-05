import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import ProductForm from "../../components/products/form/ProductForm";

const AddProduct = () => {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
          >
            <FiArrowLeft />
            Back to Products
          </Link>

          <h1 className="mt-4 text-4xl font-black text-white">
            Add Product
          </h1>

          <p className="mt-2 text-slate-400">
            Create a new product for your website.
          </p>

        </div>

        {/* <button
          className="
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-sky-500
          px-8
          py-4
          font-semibold
          text-white
          hover:bg-sky-600
          transition-all
          "
        >
          <FiSave />
          Save Product
        </button> */}

      </div>

      {/* Form */}

     <ProductForm />

    </div>
  );
};

export default AddProduct;