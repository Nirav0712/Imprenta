import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ViewProduct = () => {
  return (
    <div className="space-y-8">

      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
      >
        <FiArrowLeft />
        Back to Products
      </Link>

      <div className="rounded-3xl border border-white/10 bg-[#101B2D] p-10">

        <h1 className="text-4xl font-black text-white">

          Product Details

        </h1>

        <p className="mt-4 text-slate-400">

          Product information will appear here after backend integration.

        </p>

      </div>

    </div>
  );
};

export default ViewProduct;