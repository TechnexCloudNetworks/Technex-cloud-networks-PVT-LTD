import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number;
};

export function CountUp({
  end,
  duration = 1000,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const ref = useRef<HTMLSpanElement | null>(null);

  // Detect when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count animation
  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setValue(end);
        clearInterval(counter);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [startCount, end, duration]);

  return <span ref={ref}>{value}</span>;
}