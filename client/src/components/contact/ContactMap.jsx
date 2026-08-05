import {
  FiMapPin,
  FiNavigation,
  FiClock,
} from "react-icons/fi";

const ContactMap = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">

          {/* Left Card */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-300">

              Visit Our Office

            </span>

            <h2 className="mt-6 text-4xl font-black text-white">

              Meet Our Team

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              We'd love to meet you. Visit our office to discuss
              your printing and packaging requirements.

            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">

                  <FiMapPin size={24} />

                </div>

                <div>

                  <h3 className="font-bold text-white">

                    Office Address

                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">

                    Imprenta Private Limited

                    <br />

                    Ahmedabad, Gujarat

                    <br />

                    India

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">

                  <FiClock size={24} />

                </div>

                <div>

                  <h3 className="font-bold text-white">

                    Office Hours

                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">

                    Monday - Saturday

                    <br />

                    09:00 AM - 07:00 PM

                  </p>

                </div>

              </div>

            </div>

            <button
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-sky-500
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-sky-600
              "
            >

              <FiNavigation />

              Get Directions

            </button>

          </div>

          {/* Map */}

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
              className="h-[600px] w-full border-0"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactMap;