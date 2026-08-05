import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const categories = [
  {
    title: "Visiting Cards",
    image: "/images/categories/cards.png",
  },
  {
    title: "Custom Polo T-shirts",
    // image: "/images/categories/polo.png",
  },
  {
    title: "Custom Dress Shirts",
    // image: "/images/categories/shirt.png",
  },
  {
    title: "Custom T-shirts",
    // image: "/images/categories/tshirt.png",
  },
  {
    title: "Custom Caps",
    // image: "/images/categories/caps.png",
  },
  {
    title: "Signs, Posters & Marketing",
    // image: "/images/categories/signs.png",
  },
  {
    title: "Custom Stamps",
    // image: "/images/categories/stamp.png",
  },
  {
    title: "Umbrellas & Rainwear",
    // image: "/images/categories/umbrella.png",
  },
];

const Categories = () => {
  return (
  <section className="py-20 bg-transparent">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Explore all categories
          </h2>

        </div>

        {/* Slider */}

       <Swiper
  modules={[FreeMode]}
  freeMode={true}
  grabCursor={true}
  spaceBetween={16}
    className="!overflow-visible"
         breakpoints={{
  0: {
    slidesPerView: 1.3,
    spaceBetween: 12,
  },
  480: {
    slidesPerView: 2.2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3.5,
    spaceBetween: 18,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 7,
    spaceBetween: 20,
  },
  1600: {
    slidesPerView: 8,
    spaceBetween: 20,
  },
}}
        >

          {categories.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="group cursor-pointer">

                {/* Image */}

                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                  <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[82%] h-[82%] object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                </div>

                {/* Title */}

                <h3 className="mt-4 text-[15px] lg:text-[17px] font-medium text-white leading-6 group-hover:text-sky-600 transition">

                  {item.title}

                </h3>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Categories;
