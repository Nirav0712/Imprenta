import Hero from "../../components/home/Hero";
import WhatWeOffer from "../../components/home/WhatWeOffer";

import AboutHero from "../../components/about/AboutHero";
import ManufacturingCapabilities from "../../components/about/ManufacturingCapabilities";
import IndustriesSection from "../../components/about/IndustriesSection";
import WorkflowSection from "../../components/about/WorkflowSection";
import WhyChooseSection from "../../components/about/WhyChooseSection";

import ContactCTA from "../../components/contact/ContactCTA";

import Categories from "../../components/home/Categories";
import CategoryProductShowcase from "../../components/home/CategoryProductShowcase";
import NewsletterSection from "../../components/home/NewsletterSection";

const Home = () => {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Imprenta */}
      <AboutHero />

      {/* 3. Manufacturing */}
      <ManufacturingCapabilities />

      {/* 4. What We Offer */}
      {/* <WhatWeOffer /> */}

      {/* Existing sections */}
      <Categories />
      <CategoryProductShowcase />


      {/* 5. Industries */}
      <IndustriesSection />

      {/* 6. Workflow */}
      <WorkflowSection />

      {/* 7. Why Imprenta */}
      <WhyChooseSection />

      <NewsletterSection />

      {/* 8. CTA */}
      <ContactCTA />


    </>
  );
};

export default Home;