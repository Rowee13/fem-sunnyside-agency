import {
  galleryImage01,
  galleryImage02,
  galleryImage03,
  galleryImage04,
} from "../assets";

const Gallery = () => {
  return (
    <section id="projects">
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-flow-row">
        <img src={galleryImage01} alt="milk bottles" />
        <img src={galleryImage02} alt="orange" />
        <img src={galleryImage03} alt="cone" />
        <img src={galleryImage04} alt="sugar cubes" />
      </div>
    </section>
  );
};

export default Gallery;
