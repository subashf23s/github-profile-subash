import Download from "../icon/download";
import MoveRight from "../icon/move-right";
const Home = () => {
  return (
    <section
      className="container grid place-items-center pt-16 min-h-dvh"
      id="home"
    >
      <img
        src="./subashphoto.jpg"
        className="size-32 rounded-full object-top object-cover "
      />
      <h3 className="py-4 flex items-center gap-2">
        Hi! I'm Subash Thatheuse{" "}
        <img src="./hand-shake.png" className="size-6" />
      </h3>
      <h2 className="text-6xl text-center py-4 tracking-wide leading-16">
        fullstack software developer
        <br /> based in India.
      </h2>
      <p className="text-center py-4 tracking-wide leading-8 w-3/4">
        I am a fullstack developer from Tamilnadu, India with 6+ years of
        experience in multiple companies like Obo Technology, Gadgeon Smart
        Systems and Litmus7.
      </p>
      <div className="flex gap-4 py-4">
        <a
          href="#contact-me"
          className="flex gap-2 items-center  px-10 py-2.5 rounded-full bg-linear-to-r from-[#b820e6] to-[#da7d20] text-white font-semibold"
        >
          contact me
          <MoveRight />
        </a>
        <a
          href="./Subash_fullstack.pdf"
          className="flex gap-2 items-center border px-10 py-2.5 text-foreground  rounded-full font-semibold"
          type="file/pdf"
          download={"Subash_Fullstack.pdf"}
        >
          my resume
          <Download />
        </a>
      </div>
    </section>
  );
};

export default Home;
