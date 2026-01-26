import CloudComputing from "../icon/cloud-computing";
import Web from "../icon/web";
import { Card, CardTitle } from "../ui/card";

const Services = () => {
  return (
    <section className="container min-h-dvh py-8" id="services">
      <div className="grid place-items-center text-center">
        <p>What I offer</p>
        <h2 className="text-5xl py-4">My Services</h2>
        <p className="w-3/4 leading-10 tracking-wider">
          I am a fullstack developer from Tamilnadu, India with 6+ years of
          experience in multiple companies like Obo Technology, Gadgeon Smart
          Systems and Litmus7.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 py-8">
        <Card>
          <Web />
          <CardTitle>Web Development</CardTitle>
        </Card>
        <Card>
          <CloudComputing />
          <CardTitle>Cloud Computing</CardTitle>
        </Card>
      </div>
    </section>
  );
};

export default Services;
