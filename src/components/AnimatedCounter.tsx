"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 1600, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>("");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const valStr = String(value);
    const match = valStr.match(/^(.*?)(\d+)(.*)$/);

    if (!match) {
      setDisplayValue(valStr);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const targetNum = parseInt(numStr, 10);

    // Set initial text before scroll trigger
    setDisplayValue(`${prefix}0${suffix}`);

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Smooth ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOutProgress * targetNum);

            setDisplayValue(`${prefix}${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(`${prefix}${targetNum}${suffix}`);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue || String(value)}
    </span>
  );
}
