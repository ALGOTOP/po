import Image from "next/image";
import styles from "./HeroReveal.module.css";

type HeroRevealProps = {
  /** Path to the image in /public, e.g. "/hero-photo.jpg" */
  src?: string;
  alt?: string;
};

/**
 * Load-in reveal effect:
 * 1. A small centered frame appears.
 * 2. The image wipes into view bottom-to-top inside that frame.
 * 3. The frame smoothly expands to fill the screen, image shown in full
 *    (object-fit: contain — nothing gets cropped).
 */
export default function HeroReveal({
  src = "/hero-photo.jpg",
  alt = "",
}: HeroRevealProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroMedia}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}
