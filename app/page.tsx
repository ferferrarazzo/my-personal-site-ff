import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-8 bg-white text-gray-900">
      <Hero />
      <About /> 
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
