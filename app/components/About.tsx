import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNumber="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello, My name is Meeran. Throughly experienced technical solution provider in computer programming with 16+ years of experience in System engineering, Technical lead using different technologies. Currently working in Activehealth Management as Engineering Manager.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            blanditiis veritatis velit ipsa, id animi. Quisquam, at dolorem.
            Beatae unde hic sit commodi quibusdam, cum itaque quod! Ullam, amet
            nesciunt!,{" "}
            <span className="text-textGreen">a huge corporation!!!</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            blanditiis veritatis velit ipsa, id animi. Quisquam, at dolorem.
            Beatae unde hic sit commodi quibusdam, cum itaque quod! Ullam, amet
            nesciunt!,{" "}
            <span className="text-textGreen">a huge corporation!!!</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            blanditiis veritatis velit ipsa, id animi. Quisquam, at dolorem.
            Beatae unde hic sit commodi quibusdam, cum itaque quod! Ullam, amet
            nesciunt!,{" "}
          </p>
          <div>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                NextJS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                ReactJs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                JavaScript (ES+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                NextJS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                ReactJs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                JavaScript (ES+)
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src="/assets/niagara.jpeg"
                alt="profileImg"
                fill={true}
              />
              <div
                className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 
                         rounded-md top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
              <div
                className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
                         rounded-md  group-hover:-translate-y-2 group-hover:-translate-x-2 
                         transition-transform duration-300"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
