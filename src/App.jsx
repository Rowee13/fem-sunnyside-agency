import {
  Navbar,
  Hero,
  About,
  Services,
  Testimonials,
  Gallery,
  Footer,
} from "./components";

function App() {
  return (
    <div className="w-full relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
