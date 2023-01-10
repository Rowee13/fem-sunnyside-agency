import { heroImage, arrowDown } from "../assets";

const Hero = () => {
  return (
    <div className="relative">
      <img src={heroImage} alt="hero-img" />
      <div className="flex flex-col items-center absolute top-52 inset-x-0 mx-auto w-full">
        <h1 className="font-fraunces font-black text-white text-5xl text-center uppercase tracking-[0.2em]">
          We Are Creatives
        </h1>
        <img src={arrowDown} alt="arrow-down" className="pt-24" />
      </div>
    </div>
  );
};

export default Hero;
