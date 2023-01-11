import {
  galleryImage01,
  galleryImage02,
  galleryImage03,
  galleryImage04,
} from "../assets";

const Gallery = () => {
  return (
    <section id="projects">
      <div className="flex flex-row w-full">
        <img src={galleryImage01} alt="milk bottles" className="w-3/12" />
        <img src={galleryImage02} alt="orange" className="w-3/12" />
        <img src={galleryImage03} alt="cone" className="w-3/12" />
        <img src={galleryImage04} alt="sugar cubes" className="w-3/12" />
      </div>
    </section>
  );
};

export default Gallery;
