import { Navbar, Hero, About, Services } from "./components";

function App() {
  return (
    <div className="w-full relative">
      <div>
        <Navbar />
      </div>

      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
