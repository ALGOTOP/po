import HeroReveal from "@/components/HeroReveal";
import ScrollRevealText from "@/components/ScrollRevealText";
import Credibility from "@/components/Credibility";
import Books from "@/components/Books";
import Testimonials from "@/components/Testimonials";

const bioText = `Steven Kotler is a New York Times–bestselling author, award-winning journalist, and Distinguished Research Fellow at the Center for Complex Systems and Brain Sciences at Florida Atlantic University, where his work focuses on the neuroscience of flow, intuition, creativity, and human performance. He is the founder and executive director of the Flow Research Collective, a nonprofit research and training organization studying the brain at its best to heal it at its worst.

The author of seventeen books, including thirteen bestsellers, Kotler’s work has earned three Pulitzer Prize nominations, been translated into more than eighty languages, and appeared in over a hundred publications, ranging from scientific journals such as Nature and the Journal of Consciousness Studies to mainstream outlets including The Atlantic, Wired, TIME, and Harvard Business Review. The New York Times called him “one of the world’s leading experts on human performance.”`;

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

      <Testimonials />

      {/* Testimonials section comes above the future contact/form section */}

      {/* Contact / Form will be added here */}
    </>
  );
}
