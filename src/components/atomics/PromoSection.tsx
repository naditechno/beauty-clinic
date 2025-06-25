"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

import Title from "@/components/atomics/title";
import { Button } from "@/components/atomics/button";
import CardIndicator from "@/components/molecules/card/card-indicator";
import { CategoriesProps } from "@/interfaces/landing-page";

export default function PromoSection({
  categories,
}: {
  categories: { data: CategoriesProps[] };
}) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.25, spacing: 10 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  useEffect(() => {
    if (!slider) return;
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section
      id="promo-section"
      className="bg-gray-light container xl:mx-auto px-5 py-[50px]"
    >
      <div className="flex flex-col text-center lg:text-left sm:flex-row items-center justify-between gap-4">
        <Title
          title="Latest Beauty Promo"
          subtitle="Special skincare deals for a more radiant you"
        />
        <Button variant="default" size="button" className="shadow-button">
          Explore All
        </Button>
      </div>

      <div ref={sliderRef} className="keen-slider mt-[30px]">
        {categories.data.map((item: CategoriesProps, index: number) => (
          <div key={index} className="keen-slider__slide">
            <CardIndicator
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              promo={item.promo}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-4">
        <Button variant="default" size="button" className="shadow-button">
          Claim Promo Now
        </Button>
      </div>
    </section>
  );
}
