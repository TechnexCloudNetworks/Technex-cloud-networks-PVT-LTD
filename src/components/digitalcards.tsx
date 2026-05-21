import { useEffect, useRef } from "react";

type Card = {
  title: string;
  desc: string;
};

const cards: Card[] = [
  { title: "Graphic Designing", desc: "Creative branding, posters, logos & visual identity design." },
  { title: "Performance Marketing", desc: "Data-driven ads to maximize ROI and conversions." },
  { title: "Social Media Marketing", desc: "Grow engagement and build strong online presence." },
  { title: "SEO Optimization", desc: "Improve ranking and visibility on search engines." },
  { title: "Web Development", desc: "Modern, responsive websites and web apps." },
];

export default function MarketingCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  const loopCards = [...cards, ...cards];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let scroll = 0;
    const speed = 0.8; // adjust speed here

    const animate = () => {
      if (!el || isPaused.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      scroll += speed;

      const halfWidth = el.scrollWidth / 2;

      // seamless loop
      if (scroll >= halfWidth) {
        scroll = 0;
      }

      el.style.transform = `translateX(-${scroll}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        ref={trackRef}
        className="flex gap-6 w-max"
      >
        {loopCards.map((card, i) => (
          <div
            key={i}
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
            className="relative min-w-[280px] h-[180px] rounded-2xl overflow-hidden shadow-md shrink-0 group bg-[#f2f2f2]"
          >
            {/* 🔥 Your bottom → top hover animation */}
            <div className="absolute inset-0 bg-[#2F3B43] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

            {/* Content */}
            <div className="relative z-10 p-5 flex flex-col justify-center h-full text-center transition-colors duration-500 group-hover:text-white">
              <h2 className="text-[20px] font-bold mb-2">{card.title}</h2>
              <p className="text-sm opacity-80 group-hover:opacity-100">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}