import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

import category1 from "../../assets/images/categories/category-1.png";
import category2 from "../../assets/images/categories/category-2.png";
import category3 from "../../assets/images/categories/category-3.png";
import category4 from "../../assets/images/categories/category-4.png";
import category5 from "../../assets/images/categories/category-5.png";
import category6 from "../../assets/images/categories/category-6.png";

const categories = [
  {
    title: "Labels",
    image: category1,
  },
  {
    title: "Shrink Sleeves",
    image: category2,
  },
  {
    title: "Mono Cartons",
    image: category3,
  },
  {
    title: "Seamless Plastic Tubes",
    image: category4,
  },
  {
    title: "Corporate Branding",
    image: category5,
  },
  {
    title: "Design Services",
    image: category6,
  },
];

const Categories = () => {
  return (
   <section className="w-full px-4 sm:px-7 lg:px-11 xl:px-15 2xl:px-19">
      {/* Section Heading */}
      <div className="w-full mb-7 sm:mb-9 lg:mb-10 flex items-end justify-between">
        <div>
          {/* <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            What We Manufacture
          </p> */}

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Explore all categories
          </h2>
        </div>
      </div>

      {/* Category Slider */}
      <Swiper
        modules={[FreeMode]}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.8,
        }}
        grabCursor={true}
        centerInsufficientSlides={true}
        watchOverflow={true}
        spaceBetween={14}
        className="!overflow-visible"
        breakpoints={{
          0: {
            slidesPerView: 1.25,
            spaceBetween: 12,
          },

          480: {
            slidesPerView: 2.1,
            spaceBetween: 14,
          },

          640: {
            slidesPerView: 2.7,
            spaceBetween: 16,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 18,
          },

          1024: {
            slidesPerView: 4.5,
            spaceBetween: 18,
          },

          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

          1440: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },

          1600: {
            slidesPerView: 6,
            spaceBetween: 22,
          },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group cursor-pointer">

              {/* Image Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-white
                  shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-500
                  group-hover:-translate-y-1.5
                  group-hover:border-sky-400/40
                  group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]
                "
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Soft Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      left-3
                      top-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-black/30
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mt-3.5 px-1">
                <h3
                  className="
                    text-sm
                    sm:text-[15px]
                    lg:text-base
                    font-semibold
                    leading-6
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-sky-400
                  "
                >
                  {item.title}
                </h3>

                {/* Small Underline */}
                <div
                  className="
                    mt-2
                    h-[2px]
                    w-0
                    rounded-full
                    bg-sky-400
                    transition-all
                    duration-500
                    group-hover:w-8
                  "
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;