// ProcessCarousel.tsx
import React, { useRef } from "react";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    content:
      "We understand your business goals, hiring needs, and project expectations to create the right workforce strategy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    content:
      "We evaluate skill gaps, project scope, and technical requirements to build an efficient execution plan.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    content:
      "We source top professionals, conduct screenings, and ensure smooth onboarding into your organization.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    content:
      "We provide reliable placement and replacement support to ensure uninterrupted business operations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    content:
      "We manage payroll, compliance, and ongoing employee support for long-term workforce success.",
  },
];

export default function ProcessCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className=" py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* CAROUSEL */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-20px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 md:flex"
          >
            <span className="text-2xl font-bold text-black">‹</span>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="absolute right-[-20px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 md:flex"
          >
            <span className="text-2xl font-bold text-black">›</span>
          </button>

          {/* SCROLLABLE CARDS */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[360px] overflow-hidden rounded-[26px] bg-white shadow-md"
              >
                {/* IMAGE */}
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-sm leading-7 text-[#4b5563]">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}