import HeroReveal from "@/components/HeroReveal";
import ScrollRevealText from "@/components/ScrollRevealText";
import Credibility from "@/components/Credibility";
import Books from "@/components/Books";

const bioText = `YOUR EXISTING BIO TEXT`;

export default function Home() {
  return (
    <>
      <HeroReveal
        src="/hero-photo.jpg"
        alt=""
      />

      <ScrollRevealText text={bioText} />

      <Credibility />

      <Books />
    </>
  );
}
