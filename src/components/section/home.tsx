import subashphoto from "../../../public/subashphoto.jpg";
import handshake from "../../../public/hand-shake.png";
const Home = () => {
  return (
    <section className="container grid place-items-center min-h-dvh" id="home">
      <img
        src={subashphoto}
        className="size-32 rounded-full object-top object-cover"
      />
      <h3 className="py-2 flex items-center gap-2">
        Hi! I'm Subash Thatheuse <img src={handshake} className="size-6" />
      </h3>
      <h2 className="text-6xl text-center py-2 tracking-wide leading-16">
        fullstack software developer
        <br /> based in India.
      </h2>
      <p className="text-center py-2 tracking-wide leading-8 w-3/4">
        I am a fullstack developer from Tamilnadu, India with 6+ years of
        experience in multiple companies like Obo Technology, Gadgeon Smart
        Systems and Litmus7.
      </p>
      <div className="space-x-8">
        <a href="#contact-me">contact me</a>
        <button>my resume</button>
      </div>
    </section>
  );
};

export default Home;
