import { aboutTransfrom, aboutStandOut } from "../assets";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="flex flex-col items-center lg:items-start justify-center py-24 lg:p-36 text-center lg:text-left">
          <h1 className="font-fraunces font-black text-4xl pb-8 px-6 lg:px-0 lg:pr-8">
            Transform your brand
          </h1>
          <p className="font-barlow text-grayish-blue text-md px-12 lg:px-0 lg:pr-6 pb-8">
            We are full-sevice creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="about-transform-btn relative font-fraunces font-bold uppercase z-10">
            Learn More
          </button>
        </div>
        <img
          src={aboutTransfrom}
          alt="about us - transform"
          className="w-full lg:w-1/2"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <img
          src={aboutStandOut}
          alt="about us - stand out"
          className="w-full lg:w-1/2"
        />
        <div className="flex flex-col items-center lg:items-start justify-center py-24 lg:p-36 text-center lg:text-left">
          <h1 className="font-fraunces font-black text-4xl pb-8 px-6 lg:px-0 lg:pr-8">
            Stand out to the right audience
          </h1>
          <p className="font-barlow text-grayish-blue text-md px-16 lg:px-0 lg:pr-6 pb-8">
            Using collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <button className="about-standout-btn relative font-fraunces font-bold uppercase">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
