"use client";

import { useState } from "react";
import faq from "@/json/faq.json";
import { IFaq } from "@/interfaces/faq";
import { Button } from "@/components/atomics/button";
import Image from "next/image";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section id="faq-section" className="container mx-auto my-[100px] px-5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary dark:text-primary-dark">
          Best Beauty Clinic with Affordable Prices
        </h2>
        <p className="text-subtitle mt-4">
          Want an economical yet effective treatment? Register and make a
          reservation at the nearest Beauty Clinic now!
        </p>
        <div className="w-full flex justify-center mt-4">
          <div className="w-1/2 md:w-1/4">
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

      <div className="mx-auto max-w-3xl divide-y divide-border rounded-lg border border-border">
        {faq.data.map((item: IFaq, index: number) => (
          <div key={index} className="bg-white">
            <button
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              className="flex justify-between w-full px-6 py-5 text-left text-charcoal font-semibold hover:bg-warm-beige transition"
            >
              <span>{item.question}</span>
              <span className="ml-4 text-primary text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6 text-subtitle text-sm bg-gray-light">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
