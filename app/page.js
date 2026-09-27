import ScrollFX from "@/components/ScrollFX";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import Guarantee from "@/components/Guarantee";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonials";
import Proof from "@/components/Proof";
import Partners from "@/components/Partners";
import Leadership from "@/components/Leadership";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollFX />
      <Header />
      <div className="parallax-intro">
        <Hero />
        <Statement />
      </div>
      <Numbers />
      <Services />
      <Guarantee />
      <Process />
      <Projects />
      <Videos />
      <Testimonials />
      <Proof />
      <Partners />
      <Leadership />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
