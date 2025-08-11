import {
  CtaSection,
  Footer,
  Header,
  Hero,
  Problems,
  Solutions,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <CtaSection />
      <Footer />
    </div>
  );
}
