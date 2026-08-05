import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product })  => {
  return (
    <Link
  to={`/product/${product.id}`}
  className="group block cursor-pointer"
>

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* Badge */}
        <div className="absolute top-3 left-3 z-20 rounded-full bg-sky-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
          {product.badge}
        </div>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50 hover:text-red-500">
          <FiHeart size={20} />
        </button>

        {/* Image */}
        <div className="aspect-[1/1] overflow-hidden bg-white">

          <img
            src={product.image}
            // alt={product.title}
            className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />

        </div>

      </div>

      {/* Content */}

      <div className="mt-4">

        <h3 className="line-clamp-2 text-[18px] font-semibold text-gray-300 transition group-hover:text-sky-600">
          {product.title}
        </h3>

        <p className="mt-3 text-lg font-semibold text-gray-500">
          From {product.price}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          ₹2.00 each / 100 units
        </p>

      </div>

    </Link>
  );
};

export default ProductCard;