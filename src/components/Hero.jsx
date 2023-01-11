import { heroImage, arrowDown, heroImageMobile } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <img src={heroImage} alt="hero-img" className="hidden lg:block" />
      <img src={heroImageMobile} alt="hero-img" className="lg:hidden" />
      <div className="flex flex-col items-center absolute top-40 lg:top-52 inset-x-0 mx-auto w-full">
        <h1 className="font-fraunces font-black text-white text-4xl lg:text-5xl text-center uppercase tracking-[0.2em]">
          We Are Creatives
        </h1>
        <img src={arrowDown} alt="arrow-down" className="pt-16 lg:pt-24" />
      </div>
    </section>
  );
};

export default Hero;
