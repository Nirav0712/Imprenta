import { useParams } from "react-router-dom";
import {
  FiCheckCircle,
  FiShoppingCart,
  FiTruck,
  FiShield,
  FiAward,
} from "react-icons/fi";

import popularProducts from "../../data/popularProducts";
import trendingProducts from "../../data/trendingProducts";
import labelsProducts from "../../data/labelsProducts";
import exploreMoreProducts from "../../data/exploreMoreProducts";
import newArrivalsProducts from "../../data/newArrivalsProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const allProducts = [
    ...popularProducts,
    ...trendingProducts,
    ...labelsProducts,
    ...exploreMoreProducts,
    ...newArrivalsProducts,
  ];

  const product = allProducts.find(
  (item) => item.id === id
);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-4xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="relative py-16 lg:py-24">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-10 overflow-hidden">

              <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl"></div>

              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

              <img
                src={product.image}
                alt={product.title}
                className="relative w-full h-[300px] md:h-[500px] object-contain transition duration-500 hover:scale-105"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-flex rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">

              {product.badge}

            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">

              {product.title}

            </h1>

            <div className="mt-8">

              <h2 className="text-sky-400 text-5xl font-black">

                {product.price}

              </h2>

              <p className="mt-2 text-slate-400">

                Premium Quality • GST Invoice Available

              </p>

            </div>

            <p className="mt-8 text-lg leading-9 text-slate-300">

              Premium quality customised printing using industry-leading
              materials with superior finishing. Designed for businesses
              that demand professional branding, long-lasting durability
              and exceptional print quality.

            </p>

            {/* FEATURES */}

            {/* <div className="mt-10 grid sm:grid-cols-2 gap-5">

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-sky-400 text-xl" />

                Premium Printing

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiTruck className="text-sky-400 text-xl" />

                Fast Delivery

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiShield className="text-sky-400 text-xl" />

                Secure Packaging

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiAward className="text-sky-400 text-xl" />

                Best Quality

              </div>

            </div> */}

            {/* BUTTONS */}

            {/* <div className="mt-12 flex flex-col sm:flex-row gap-5">

              <button className="flex items-center justify-center gap-3 rounded-2xl bg-sky-500 hover:bg-sky-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-xl">

                <FiShoppingCart size={22} />

                Add To Cart

              </button>

              <button className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 text-lg font-semibold text-white transition hover:border-sky-400 hover:bg-white/10">

                Request Quote

              </button>

            </div> */}

            {/* TRUST BOX */}
{/* 
            <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <h3 className="text-2xl font-bold text-white">

                Why Choose Imprenta?

              </h3>

              <div className="mt-6 grid grid-cols-2 gap-6">

                <div>

                  <h4 className="text-4xl font-black text-sky-400">

                    1000+

                  </h4>

                  <p className="text-slate-400 mt-2">

                    Happy Businesses

                  </p>

                </div>

                <div>

                  <h4 className="text-4xl font-black text-sky-400">

                    15+

                  </h4>

                  <p className="text-slate-400 mt-2">

                    Years Experience

                  </p>

                </div>

                <div>

                  <h4 className="text-4xl font-black text-sky-400">

                    24×7

                  </h4>

                  <p className="text-slate-400 mt-2">

                    Customer Support

                  </p>

                </div>

                <div>

                  <h4 className="text-4xl font-black text-sky-400">

                    PAN India

                  </h4>

                  <p className="text-slate-400 mt-2">

                    Fast Shipping

                  </p>

                </div>

              </div>

            </div> */}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;