import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import categories from "@/json/categories.json";
import Image from "next/image";
import CardBenefit from "@/components/molecules/card/card-benefit";
import CardPurpose from "@/components/molecules/card/card-purpose";
import ListingShowcase from "@/components/molecules/listing/listing-showcase";
import PromoSection from "@/components/atomics/PromoSection";
import FAQSection from "@/components/atomics/faq-section";

function Home() {
  return (
    <main>
      <section
        id="hero-section"
        className="h-screen rounded-b-[200px] w-full bg-cover bg-right lg:bg-center bg-no-repeat bg-[url('/images/hero-beauty.jpg')]"
      >
        <div className="relative z-10 flex items-center h-full container mx-auto px-4">
          <div className="max-w-full lg:max-w-[555px] mt-20">
            <Title
              title="Reveal Radiant Skin and Timeless Confidence"
              subtitle="Professional aesthetic care at the right price, always here to help you feel confident and beautiful."
              section="hero"
            />
            <div className="w-1/2 md:w-1/3 mt-4">
              <Button variant="default" size="default">
                <Image
                  src="/icons/wa.svg"
                  alt="Facial treatment"
                  width={25}
                  height={25}
                  className="rounded-lg object-cover mr-2"
                />
                reservation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ListingShowcase
        id="services-section"
        title="Our Beauty Services"
        subtitle="Enhance your natural beauty with our professional skin care services."
      />

      <PromoSection categories={categories} />

      <section
        id="benefits-section"
        className="px-6 md:px-10 xl:container xl:mx-auto mt-[100px]"
      >
        <div className="flex justify-center lg:justify-between flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-4">
          {/* Left Content */}
          <div className="max-w-[320px] xl:max-w-[383px]">
            <h1 className="font-bold text-[24px] md:text-[28px] leading-[36px] md:leading-[42px] max-w-[350px]">
              Beauty Treatments That Enhance Your Natural Glow
            </h1>
            <ul className="mt-[20px] md:mt-[30px] space-y-4 md:space-y-5 text-left">
              <CardBenefit benefit="Personalized skincare consultation and treatment" />
              <CardBenefit benefit="Certified dermatologists and beauty therapists" />
              <CardBenefit benefit="Modern aesthetic technology and equipment" />
              <CardBenefit benefit="Relaxing, clean, and luxurious environment" />
              <CardBenefit benefit="Safe, non-invasive procedures with visible results" />
            </ul>
            <div className="mt-[20px] md:mt-[30px] flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 xl:space-x-[14px]">
              <Button variant="default" size="default">
                <Image
                  src="/icons/wa.svg"
                  alt="Facial treatment"
                  width={25}
                  height={25}
                  className="rounded-lg object-cover mr-2"
                />
                reservation
              </Button>
              <Button variant="third" size="header">
                All Services
              </Button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="max-w-[650px] grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 xl:gap-[30px]">
            <CardPurpose
              image="/images/beauty-benefit-1.jpg"
              title="Facial Rejuvenation"
              purpose="Glowing & Healthy Skin"
            />
            <CardPurpose
              image="/images/beauty-benefit-2.jpg"
              title="Laser Hair Removal"
              purpose="Long-Lasting Smoothness"
            />
            <CardPurpose
              image="/images/beauty-benefit-3.jpg"
              title="Body Slimming"
              purpose="Safe & Effective Contouring"
            />
            <CardPurpose
              image="/images/beauty-benefit-4.jpg"
              title="Anti-Aging Treatments"
              purpose="Youthful Look"
            />
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}

export default Home;
