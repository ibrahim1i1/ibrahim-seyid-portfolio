import { LanguageProvider } from "./context/LanguageContext";
import IntroVideo from "./Components/IntroVideo";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function App() {


  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">

        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}