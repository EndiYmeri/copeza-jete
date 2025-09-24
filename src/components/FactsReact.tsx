import { useState, useEffect, useRef } from "react";
import { animate, svg } from "animejs";
export default function FactsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const infinityRef = useRef(null);

  const stats = [
    { value: 200, suffix: "+", text: "Evente të mbuluara" },
    { value: 5, suffix: "+", text: "Vite eksperiencë" },
    { value: 500, suffix: "+", text: "Orë të edituara me pasion" },
    { value: 30, suffix: "+", text: "Vendodhje" },
  ];

  const specialStat = {
    value: 0,
    suffix: "",
    text: "Momente të humbura",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (infinityRef.current) {
      const [drawable] = svg.createDrawable(infinityRef.current);

      animate(drawable, {
        draw: ["0 0", "0 1", "1 1"],
        ease: "inOutQuad",
        duration: 2000,
        alternate: false,
        loop: true,
      });
    }

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({
    to,
    duration = 2000,
    suffix = "",
    isVisible,
  }: {
    to: number;
    duration?: number;
    suffix: string;
    isVisible: boolean;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const end = to;
      const incrementTime = duration / end;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }, [isVisible, to, duration]);

    return (
      <span className="font-bold text-5xl md:text-6xl">
        {count}
        {suffix}
      </span>
    );
  };

  return (
  
  );
}
