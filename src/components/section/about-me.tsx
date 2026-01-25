import Aws from "../icon/aws";
import Code from "../icon/code";
import Docker from "../icon/docker";
import Education from "../icon/education";
import Git from "../icon/git";
import Linux from "../icon/linux";
import Project from "../icon/project";
import { Card, CardContent, CardTitle } from "../ui/card";

const AboutMe = () => {
  return (
    <section className="container min-h-dvh py-8" id="about-me">
      <div className="text-center">
        <p>Introduction</p>
        <h2 className="text-5xl py-4">About me</h2>
      </div>
      <div className="grid grid-cols-5 gap-8 items-center">
        <div className="col-span-2">
          <div className="relative max-w-max">
            <img
              src="./subashphoto.jpg"
              className="h-96 rounded-4xl border border-gray-300 object-cover"
            />
            <div className="absolute right-0 bottom-0  translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] w-1/2 bg-white rounded-full">
              <img
                src="./circular-text.png"
                className="animate-spin-slow duration-"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <p className="leading-10">
            I am an experienced Fullstack Developer with over 6+ years of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <div className="grid grid-cols-3 gap-4 py-8">
            <Card>
              <Code />
              <CardTitle>Languages</CardTitle>
              <CardContent>
                HTML, CSS, JavaScript, Typescript, React, Next, Express, AWS,
                Amplify, Serverless
              </CardContent>
            </Card>
            <Card>
              <Education />
              <CardTitle>Education</CardTitle>
              <CardContent>Master of Computer Application (MCA)</CardContent>
            </Card>
            <Card>
              <Project />
              <CardTitle>Projects</CardTitle>
              <CardContent>Built more than 5 projects</CardContent>
            </Card>
          </div>
          <div className="py-8">
            <p>Tools I use</p>
            <ul className="flex items-center gap-4 py-8">
              <li className="shadow-md p-4 border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-2 duration-500">
                <Git />
              </li>
              <li className="shadow-md p-4 border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-2 duration-500">
                <Aws />
              </li>
              <li className="shadow-md p-4 border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-2 duration-500">
                <Linux />
              </li>
              <li className="shadow-md p-4 border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-2 duration-500">
                <Docker />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
