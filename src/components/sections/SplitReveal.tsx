'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SplitRevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * The homepage's heading animation, reusable. Same GSAP SplitText settings as the
 * home-8 sections so every page reveals its headings identically.
 */
export default function SplitReveal({ as: Tag = 'h2', className = '', children }: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let split: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const SplitText = (await import('gsap/SplitText')).default;
      gsap.registerPlugin(SplitText, ScrollTrigger);
      if (cancelled || !ref.current) return;

      split = new SplitText(ref.current, { type: 'lines,words,chars', linesClass: 'split-line' });
      const chars = (split as unknown as { chars: Element[] }).chars;
      gsap.set(chars, { opacity: 0, x: 50 });
      gsap.to(chars, {
        scrollTrigger: { trigger: ref.current, start: 'top 95%' },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.02,
      });
    })();

    return () => {
      cancelled = true;
      split?.revert();
    };
  }, []);

  return (
    <Tag className={className} ref={ref}>
      {children}
    </Tag>
  );
}
