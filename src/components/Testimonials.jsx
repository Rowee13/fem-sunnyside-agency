import {
  testimonialImage01,
  testimonialImage02,
  testimonialImage03,
} from "../assets";

const TestimonialCard = ({
  customerImage,
  testimonial,
  customerName,
  title,
}) => (
  <div className="flex flex-col items-center justify-center font-barlow text-center max-w-sm px-5">
    <img
      src={customerImage}
      alt="customer img"
      className="w-20 h-20 rounded-full mb-14"
    />
    <p className="font-extrabold text-lg text-dark-grayish-blue px-5">
      {testimonial}
    </p>
    <h3 className="font-fraunces font-black text-lg pt-14">{customerName}</h3>
    <p className="text-grayish-blue">{title}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="flex flex-col items-center justify-center py-20 lg:py-36"
    >
      <h1 className="font-fraunces text-xl text-dark-grayish-blue uppercase tracking-widest lg:tracking-[0.2em] pb-20">
        Client Testimonials
      </h1>
      <div className="flex flex-col lg:flex-row gap-y-20">
        <TestimonialCard
          customerImage={testimonialImage01}
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          customerName="Emily R."
          title="Marketing Director"
        />
        <TestimonialCard
          customerImage={testimonialImage02}
          testimonial="Sunnyside's enthusiasm coupled with their keen interest in out brand's success made it a satisfying and enjoyable experience."
          customerName="Thomas S."
          title="Chief Operating Officer"
        />
        <TestimonialCard
          customerImage={testimonialImage03}
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          customerName="Jennie F."
          title="Business Owner"
        />
      </div>
    </section>
  );
};

export default Testimonials;
