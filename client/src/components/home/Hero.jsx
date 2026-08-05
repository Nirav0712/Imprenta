import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import heroSlides from "../../data/heroSlides";
import { Link } from "react-router-dom";
// import hero1 from "../../assets/hero/hero1.jpg";
// import hero2 from "../../assets/hero/hero2.jpg";
// import hero3 from "../../assets/hero/hero3.jpg";
// import hero4 from "../../assets/hero/hero4.jpg";

const Hero = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const slide = heroSlides[activeSlide];
  return (
   <section className="relative min-h-screen flex items-center overflow-hidden py-16">

  {/* Background Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#081525]/95 via-[#081525]/85 to-[#081525]/70"></div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-500/15 blur-[130px]"></div>

<div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]"></div>

<div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-sky-400/10 blur-[120px]"></div>

      {/* LEFT CONTENT */}

      <div
        key={activeSlide}
        className="animate-fadeLeft"
      >

        {/* Badge */}

        <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-300 backdrop-blur-xl">

          {slide.badge}

        </span>

        {/* Heading */}

        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-white">

          {slide.title1}

          <span className="block text-sky-400">

            {slide.title2}

          </span>

          <span className="block">

            {slide.title3}

          </span>

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-300">

          {slide.description}

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-5">

        <Link
  to="/request-sample"
  className="group inline-flex items-center justify-center rounded-2xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:scale-105"
>
  Request a Sample
  <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

          <button className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-4 text-lg font-semibold text-white transition hover:border-sky-400 hover:bg-white/10">

            Explore Products →

          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div
        key={activeSlide + "img"}
        className="relative animate-fadeRight"
      >

        {/* Glow */}

      <div className="absolute -inset-8 rounded-[50px] bg-sky-500/20 blur-[90px] animate-glow"></div>

        {/* Card */}

        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

         <img
  //  src={slide.image}
   alt={slide.title1}
   className="w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-[30px] object-cover animate-floating animate-zoom transition-all duration-700"
/>

        </div>

      </div>

    </div>

    {/* Indicators */}

    <div className="mt-12 flex gap-3">

      {heroSlides.map((_, index) => (

        <button
          key={index}
          onClick={() => setActiveSlide(index)}
          className={`h-2 rounded-full transition-all duration-500 ${
            activeSlide === index
              ? "w-12 bg-sky-400"
              : "w-3 bg-white/30"
          }`}
        />

      ))}

    </div>

  </div>

</section>
  );
};

export default Hero;