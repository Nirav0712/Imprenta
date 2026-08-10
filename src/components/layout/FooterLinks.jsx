import {
  footerProducts,
  footerResources,
  footerCompany,
  footerLegal,
} from "../../data/footerData";

const FooterLinks = () => {
  return (
    <section className="bg-slate-950 border-t border-white/10">

      <div className="w-full mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Products */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Products
            </h3>

            <ul className="space-y-4">

              {footerProducts.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Resources
            </h3>

            <ul className="space-y-4">

              {footerResources.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              {footerCompany.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Legal
            </h3>

            <ul className="space-y-4">

              {footerLegal.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 hover:text-sky-400 transition duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FooterLinks;