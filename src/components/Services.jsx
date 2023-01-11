import {
  servicesGraphicDesign,
  servicesPhotography,
  servicesGraphicMobile,
  servicesPhotoMobile,
} from "../assets";

const Services = () => {
  return (
    <section id="services" className="flex flex-col lg:flex-row">
      <div className="relative">
        <img
          src={servicesGraphicDesign}
          alt="graphic design service"
          className="hidden lg:block"
        />
        <img
          src={servicesGraphicMobile}
          alt="graphic design service"
          className="lg:hidden"
        />
        <div className="flex flex-col items-center absolute bottom-16 px-10 lg:px-44">
          <h2 className="font-fraunces font-extrabold text-4xl lg:text-3xl text-desaturated-cyan pb-6">
            Graphic Design
          </h2>
          <p className="font-barlow text-desaturated-cyan text-center px-5 lg:px-3">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src={servicesPhotography}
          alt="photography service"
          className="hidden lg:block"
        />
        <img
          src={servicesPhotoMobile}
          alt="photography service"
          className="lg:hidden"
        />
        <div className="flex flex-col items-center absolute bottom-16 px-10 lg:px-44">
          <h2 className="font-fraunces font-extrabold text-4xl lg:text-3xl text-dark-blue pb-6">
            Photography
          </h2>
          <p className="font-barlow text-dark-blue text-center px-5 lg:px-3">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
