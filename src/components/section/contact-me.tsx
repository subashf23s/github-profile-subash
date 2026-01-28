import Mail from "../icon/mail";
import Phone from "../icon/phone";
import Logo from "../ui/logo";

const ContactMe = () => {
  return (
    <section className="container min-h-dvh py-8" id="contact-me">
      <div className="grid place-items-center text-center">
        <p>Connect with me</p>
        <h2 className="text-5xl py-4">Get in touch</h2>
        <p className="w-3/4 leading-10 tracking-wider">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </div>
      <div className="grid place-items-center text-center space-y-8">
        <Logo />
        <a href="mailto:subashsuni55@gmail.com" className="flex gap-4">
          <Mail />
          subashsuni55@gmail.com
        </a>
        <a href="tel:+919095213338" className="flex gap-4">
          <Phone />
          +91 9095213338
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
