import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import ProductForm from "../../components/products/form/ProductForm";

const EditProduct = () => {
  return (
    <div className="space-y-8">

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
            Edit Product
          </h1>

          <p className="mt-2 text-slate-400">
            Update your product information.
          </p>

        </div>

      </div>

      <ProductForm />

    </div>
  );
};

export default EditProduct;