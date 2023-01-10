import { Navbar, Hero, About } from "./components";

function App() {
  return (
    <div className="w-full relative">
      <div>
        <Navbar />
      </div>

      <Hero />
      <About />
    </div>
  );
}

export default App;
