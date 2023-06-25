import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { image1, image2 } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";

function Projects() {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have built" titleNumber="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="https://myactivehealth.com"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={image1}
                  alt="image1"
                  width={175}
                  height={175}
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
      items-end text-right z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Projects
              </p>
              <h3 className="text-2xl font-bold">MyActivehealth</h3>
              <p className="bg-[#112240] text-sm md:text-base xl:-mr-16 p-2 md:p-6 rounded-md">
                An Amazon clone website for visualizing personalized Amazon
                website. View your products, Add your account with {""}
                <span className="text-textGreen">O-auth</span> and then make the
                purchase using
                <span className="text-texGreen">stripe</span>
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
        md:gap-5 justify-between text-textDark"
              >
                <li>.Net</li>
                <li>SQL Server</li>
                <li>Oracle</li>
                <li>Springboot</li>
                <li>IBM APIc</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github/meeran78"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://myactivehealth.com"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={image2}
                  alt="image2"
                  width={175}
                  height={175}
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
      items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Projects
              </p>
              <h3 className="text-2xl font-bold">MyActivehealth</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                An Amazon clone website for visualizing personalized Amazon
                website. View your products, Add your account with {""}
                <span className="text-textGreen">O-auth</span> and then make the
                purchase using
                <span className="text-texGreen">stripe</span>
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
        md:gap-5 justify-between text-textDark"
              >
                <li>.Net</li>
                <li>SQL Server</li>
                <li>Oracle</li>
                <li>Springboot</li>
                <li>IBM APIc</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github/meeran78"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
