"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./ScrollRevealText.module.css";

type ScrollRevealTextProps = {
  /**
   * The copy to render. Separate paragraphs with a blank line ("\n\n").
   * Wrap a phrase in single asterisks — *like this* — to italicize it,
   * matching the reference site's convention for names/publications.
   */
  text: string;
  className?: string;
  /**
   * How many "words wide" the light/dark transition band is.
   * Smaller = sharper edge, larger = softer, slower fade. Default 4.
   */
  softness?: number;
  /** Opacity of a word before it's been reached by the reveal. Default 0.15. */
  dimOpacity?: number;
};

type Word = {
  text: string;
  italic: boolean;
  paragraphIndex: number;
};

/**
 * Splits "text" into paragraphs, then words, tracking which paragraph
 * each word belongs to and whether it was wrapped in *asterisks*.
 */
function parseParagraphs(text: string): Word[][] {
  const paragraphs = text.trim().split(/\n\s*\n/);
  return paragraphs.map((paragraph, paragraphIndex) => {
    const tokens = paragraph.trim().split(/\s+/);
    const words: Word[] = [];
    let italicOpen = false;
    for (const rawToken of tokens) {
      let token = rawToken;
      let startsItalic = false;
      let endsItalic = false;

      if (token.startsWith("*")) {
        startsItalic = true;
        token = token.slice(1);
      }
      if (token.endsWith("*") && token.length > 1) {
        endsItalic = true;
        token = token.slice(0, -1);
      }

      const isItalic = italicOpen || startsItalic;
      words.push({ text: token, italic: isItalic, paragraphIndex });

      if (startsItalic && !endsItalic) italicOpen = true;
      if (endsItalic) italicOpen = false;
    }
    return words;
  });
}

export default function ScrollRevealText({
  text,
  className,
  softness = 4,
  dimOpacity = 0.15,
}: ScrollRevealTextProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  wordRefs.current = [];

  const paragraphs = useMemo(() => parseParagraphs(text), [text]);
  const wordCount = useMemo(
    () => paragraphs.reduce((sum, p) => sum + p.length, 0),
    [paragraphs]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      wordRefs.current.forEach((el) => el.style.setProperty("--o", "1"));
      return;
    }

    let ticking = false;
    let globalIndex = 0; // reused inside the rAF closure per frame

    const applyOpacities = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // 0 when the section's top just enters the bottom of the viewport,
      // 1 when the section's bottom has passed the top of the viewport.
      const raw = (vh - rect.top) / (rect.height + vh);
      const progress = Math.min(1, Math.max(0, raw));

      const reveal = progress * wordCount;
      const band = Math.max(1, softness);

      for (let i = 0; i < wordRefs.current.length; i++) {
        const t = reveal - i; // how far the "light" has moved past word i
        const linear = Math.min(1, Math.max(0, (t + band / 2) / band));
        // smoothstep easing for a soft, non-mechanical transition
        const eased = linear * linear * (3 - 2 * linear);
        const opacity = dimOpacity + (1 - dimOpacity) * eased;
        wordRefs.current[i].style.setProperty("--o", opacity.toFixed(3));
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyOpacities);
      }
    };

    applyOpacities(); // set initial state on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordCount, softness, dimOpacity]);

  let runningIndex = 0;

  return (
    <section ref={sectionRef} className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        {paragraphs.map((words, pIdx) => (
          <p key={pIdx} className={styles.paragraph}>
            {words.map((w, wIdx) => {
              const idx = runningIndex++;
              return (
                <span
                  key={wIdx}
                  ref={(el) => {
                    if (el) wordRefs.current[idx] = el;
                  }}
                  className={`${styles.word} ${w.italic ? styles.italic : ""}`}
                  style={{ ["--o" as string]: dimOpacity }}
                >
                  {w.text}{" "}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </section>
  );
}
