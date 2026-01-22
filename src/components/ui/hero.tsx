import subashphoto from "../../../public/subashphoto.jpg";
const Hero = () => {
  return (
    <section className="container grid place-items-center">
      <img
        src={subashphoto}
        className="size-32 rounded-full object-top object-cover"
      />
      <h3 className="py-4">Hi! I'm Subash Thatheuse</h3>
    </section>
  );
};

export default Hero;
