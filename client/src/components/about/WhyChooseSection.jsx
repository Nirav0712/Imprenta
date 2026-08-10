import {
  FiLayers,
  FiCpu,
  FiCheckCircle,
  FiHome,
  FiArrowRight,
} from "react-icons/fi";

import { whyChoose } from "../../data/aboutData";
import { useNavigate } from "react-router-dom";

const icons = [
  <FiLayers size={34} />,
  <FiCpu size={34} />,
  <FiCheckCircle size={34} />,
  <FiHome size={34} />,
];

const WhyChooseSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-300">

            Why Imprenta

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">

            Why Leading Brands

            <span className="block text-sky-400">

              Choose Imprenta

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">

            Our manufacturing expertise, quality processes and customer-first
            approach help businesses build reliable and consistent packaging
            solutions.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {whyChoose.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-white/10"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">

                {icons[index]}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-[36px] border border-white/10 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-sky-500/10 backdrop-blur-xl p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

                Ready to partner 

                <span className="block text-4xl text-sky-400">

                  with a trusted packaging manufacturer ?

                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">

                Let's create packaging solutions that strengthen your brand, protect your products, and support your business growth. Reach out to our team today. 

              </p>

            </div>

            <div className="flex lg:justify-end">

             <button
  onClick={() => navigate("/contact#contact-form")}
  className="group inline-flex items-center gap-3 rounded-2xl bg-sky-500 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:scale-105"
>Request a Quote    <FiArrowRight />
</button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;