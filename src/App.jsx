import { Navbar, Hero, About, Services, Testimonials } from "./components";

function App() {
  return (
    <div className="w-full relative">
      <div>
        <Navbar />
      </div>

      <Hero />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
