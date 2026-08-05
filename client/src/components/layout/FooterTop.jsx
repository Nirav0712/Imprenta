import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const FooterTop = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950">

      {/* Background Blur */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative w-full mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <span className="inline-block rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300">
              🚀 Premium Printing Solutions
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">

              Ready to Build

              <span className="block text-sky-400">

                Your Brand?

              </span>

            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">

              Design, print and grow your business with premium quality
              business cards, packaging, apparel and promotional products.
              Everything you need in one place.

            </p>

            {/* Features */}

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-sky-400 text-xl" />

                Premium Quality

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-sky-400 text-xl" />

                Fast Delivery

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-sky-400 text-xl" />

                Secure Payments

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-sky-400 text-xl" />

                24×7 Support

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <h3 className="text-3xl font-bold text-white">

                Let's Start Printing

              </h3>

              <p className="mt-4 text-slate-300 leading-7">

                Launch your next project with beautifully printed
                marketing materials and custom branding products.

              </p>

              <button className="mt-8 flex items-center gap-3 rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-xl">

                Start Designing

                <FiArrowRight />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FooterTop;