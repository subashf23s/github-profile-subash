import subashphoto from "../../../public/subashphoto.jpg";
const Home = () => {
  return (
    <section className="container grid place-items-center" id="home">
      <img
        src={subashphoto}
        className="size-32 rounded-full object-top object-cover"
      />
      <h3 className="py-4">Hi! I'm Subash Thatheuse</h3>
    </section>
  );
};

export default Home;
