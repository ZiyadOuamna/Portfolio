import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Technologies from "@/components/sections/Technologies";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Technologies />
      <Skills />
      <Contact />
      <Social />
      <Footer />
    </main>
  );
}
