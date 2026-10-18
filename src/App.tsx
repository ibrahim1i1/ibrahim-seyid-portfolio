import IntroVideo from "./Components/IntroVideo";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
export default function App() {


  return (
    <div className="min-h-screen bg-black text-white">
      <IntroVideo />
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}