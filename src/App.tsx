import IntroVideo from "./Components/IntroVideo";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
export default function App() {


  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}