import { servicesGraphicDesign, servicesPhotography } from "../assets";

const Services = () => {
  return (
    <section id="services" className="flex flex-row">
      <div className="relative">
        <img src={servicesGraphicDesign} alt="graphic design service" />
        <div className="flex flex-col items-center absolute bottom-16 px-44">
          <h2 className="font-fraunces font-extrabold text-3xl text-desaturated-cyan pb-6">
            Graphic Design
          </h2>
          <p className="font-barlow text-desaturated-cyan text-center">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={servicesPhotography} alt="photography service" />
        <div className="flex flex-col items-center absolute bottom-16 px-44">
          <h2 className="font-fraunces font-extrabold text-3xl text-dark-blue pb-6">
            Photography
          </h2>
          <p className="font-barlow text-dark-blue text-center">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
