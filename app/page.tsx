import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
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
      <Contact />
      <Social />
      <Footer />
    </main>
  );
}
