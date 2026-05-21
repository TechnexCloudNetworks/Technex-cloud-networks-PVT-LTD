import { useEffect, useState } from "react";

const offers = [
  {
    description: "Connecting Businesses With Innovation",
  },
  {
    description: "Reliable IT Solutions For Growing Companies",
  },
  {
    description: "Building The Future With Cloud & AI",
  },
  {
    description: "Secure, Fast & Reliable Digital Services",
  },
];

export default function TextCarousel() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  // Clone first slide at end
  const extendedOffers = [...offers, offers[0]];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    // When reaches cloned first slide
    if (current === offers.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 700);

      setTimeout(() => {
        setTransition(true);
      }, 750);
    }
  }, [current]);

  return (
    <div className="overflow-hidden bg-gray-900 text-white p-3 relative w-full">
      <div
        className={`flex ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {extendedOffers.map((offer, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center text-center"
          >
            <p className="text-lg md:text-xl font-bold text-gray-300">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}