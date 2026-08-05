const NewsletterSection = () => {
  return (
   <section className="py-20 bg-transparent">
     
     <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Top */}

        <div className="grid lg:grid-cols-2 gap-10 bg-gray-100 rounded-2xl p-6 lg:p-8 items-center">

          {/* Left */}

          <div>

            <img
              src="/images/newsletter/newsletter.webp"
              alt="Newsletter"
              className="w-full rounded-xl object-cover"
            />

          </div>

          {/* Right */}

          <div>

            <h2 className="text-4xl font-bold text-center lg:text-left">

              It's good to be on the list.

            </h2>

            <p className="mt-5 text-2xl font-semibold text-center lg:text-left">

              Get 15% off* your first order when you sign up for our emails

            </p>

            <input
              type="email"
              placeholder="Subscription email"
              className="w-full mt-8 h-14 rounded-lg border border-gray-400 px-5 outline-none focus:border-black"
            />

            <p className="mt-5 text-sm text-gray-600 leading-7">

              Yes, I'd like to receive special offer emails from Imprenta,
              as well as news about products, services and my designs in
              progress.

            </p>

            <button
              className="mt-8 h-14 w-60 rounded-lg bg-gray-300 text-lg font-semibold hover:bg-sky-500 hover:text-white duration-300"
            >

              Submit

            </button>

          </div>

        </div>

        {/* Bottom */}

        {/* <div className="grid lg:grid-cols-2 gap-16 mt-20"> */}

          {/* Left */}

          {/* <div>

            <h2 className="text-3xl text-white font-bold mb-8">

              Imprenta India : The leader in customisation

            </h2>

            <p className="text-gray-700 leading-9 text-lg">

              For more than 20 years, Imprenta has helped business owners,
              entrepreneurs and individuals create their identities with
              custom designs and professional marketing.

              Our online printing services are intended to help you find
              high quality customised products you need — visiting cards,
              personalized clothing, gifting products and much more.

            </p>

          </div> */}

          {/* Right */}

          {/* <div className="space-y-10">

            <div>

              <h3 className="text-2xl font-bold text-gray-400">

                Even Low Quantities @ Best Prices

              </h3>

              <p className="mt-3 text-gray-700 text-lg">

                We offer low/single product quantities at affordable prices.

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-gray-400">

                High quality products and Easy design

              </h3>

              <p className="mt-3 text-gray-700 text-lg">

                Our wide selection of high-quality products and online
                design tools make it easy for you to customize and order
                your favourite products.

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-gray-400">

                Free replacement or Full Refund

              </h3>

              <p className="mt-3 text-gray-700 text-lg">

                We stand by everything we sell. If you're not satisfied,
                we'll make it right.

              </p>

            </div>

          </div> */}

        {/* </div> */}

      </div>

    </section>
  );
};

export default NewsletterSection;