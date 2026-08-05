import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";

import popularProducts from "../../data/popularProducts";
import ProductCard from "../product/ProductCard";

const PopularProducts = () => {
  return (
    <section className="py-20 bg-transparent">

       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">


        {/* Heading */}

        <div className="mb-8">

          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our Most Popular Products
          </h2>

        </div>

        {/* Slider */}

        <Swiper
          modules={[FreeMode]}
          freeMode
          grabCursor
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },

            480: {
              slidesPerView: 1.6,
            },

            640: {
              slidesPerView: 2.2,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },

            1280: {
              slidesPerView: 5,
            },

            1536: {
              slidesPerView: 6,
            },
          }}
        >

          {popularProducts.map((product) => (

            <SwiperSlide key={product.id}>

             <ProductCard product={product} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default PopularProducts;