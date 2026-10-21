import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Background from "./components/background";

function App() {
  return (
    <>
      <Background />
      <div className="app-content">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
