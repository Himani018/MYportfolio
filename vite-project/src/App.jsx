import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Background from "./components/background";
import Project from "./components/project";

function App() {
  return (
    <>
      <Background />
      <div className="app-content">
        <Navbar />
        <Hero />
        <About />
        <Project/>
      </div>
    </>
  );
}

export default App;
