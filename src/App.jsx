import {
  Navbar,
  Hero,
  About,
  Services,
  Testimonials,
  Gallery,
} from "./components";

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
      <Gallery />
    </div>
  );
}

export default App;
