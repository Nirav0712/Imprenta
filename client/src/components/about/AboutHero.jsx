import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-300 backdrop-blur-xl">

              About Imprenta

            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white">

              Engineering

              <span className="block text-sky-400">

                Packaging

              </span>

              That Performs

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">

              Imprenta Private Limited manufactures packaging that performs
              beyond appearance. Every label, shrink sleeve, mono carton,
              plastic tube and branding material is engineered to survive
              production, logistics, retail shelves and customer handling
              without compromising quality.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

             <button
  onClick={() => navigate("/contact#contact-form")}
  className="flex items-center justify-center gap-3 rounded-2xl bg-sky-500 hover:bg-sky-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
>
  Request a Quote

  <FiArrowRight />
</button>

              <button className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 text-lg font-semibold text-white transition hover:border-sky-400 hover:bg-white/10">

                Explore Products

              </button>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10">

              <h2 className="text-3xl font-bold text-white">

                Why Imprenta?

              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <FiCheckCircle className="mt-1 text-sky-400 text-2xl" />

                  <div>

                    <h3 className="text-white font-semibold">

                      End-to-End Packaging

                    </h3>

                    <p className="mt-2 text-slate-400">

                      Design, manufacturing, quality inspection and delivery.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FiCheckCircle className="mt-1 text-sky-400 text-2xl" />

                  <div>

                    <h3 className="text-white font-semibold">

                      Advanced Manufacturing

                    </h3>

                    <p className="mt-2 text-slate-400">

                      Flexographic, Offset, Gravure and Digital technologies.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <FiCheckCircle className="mt-1 text-sky-400 text-2xl" />

                  <div>

                    <h3 className="text-white font-semibold">

                      Trusted Production

                    </h3>

                    <p className="mt-2 text-slate-400">

                      Prototype approval before every production run.

                    </p>

                  </div>

                </div>

              </div>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-3 gap-5 border-t border-white/10 pt-8">

                <div>

                  <h3 className="text-4xl font-black text-sky-400">

                    2

                  </h3>

                  <p className="mt-2 text-slate-400">

                    Manufacturing Units

                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black text-sky-400">

                    5+

                  </h3>

                  <p className="mt-2 text-slate-400">

                    Packaging Categories

                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black text-sky-400">

                    100%

                  </h3>

                  <p className="mt-2 text-slate-400">

                    Quality Inspection

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;