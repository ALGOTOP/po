import Image from "next/image";
import Link from "next/link";
import styles from "./HeroReveal.module.css";

type HeroRevealProps = {
  src?: string;
  alt?: string;
};

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

      <Link
        href="/"
        className={styles.logo}
        aria-label="Eman Ali — Home"
      >
        EA
      </Link>

      <div
        className={styles.heroRole}
        aria-label="Romance Ghostwriter"
      >
        <span>ROMANCE</span>
        <span>GHOSTWRITER</span>
      </div>

      <div className={styles.heroName} aria-label="Eman Ali">
        EMAN ALI
      </div>
    </div>
  );
}
