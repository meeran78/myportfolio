"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import NextAge from "./works/NextAge";
import Datumsoft from "./works/Datumsoft";

export default function Experience() {
  const [workNextage, setWorkNextage] = useState(true);
  const [workDatumsoft, setDatumsoft] = useState(false);

  const handleNextage = () => {
    setWorkNextage(true);
    setDatumsoft(false);
  };
  const handleDatumsoft = () => {
    setWorkNextage(false);
    setDatumsoft(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have work" titleNumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleNextage}
            className={`${
              workNextage 
              ? " border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"}
            border-l-2 bg-transparent hover:bg-[#112240]
    py-3  text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactBD
          </li>
          <li
            onClick={handleDatumsoft}
            className={`${
              workDatumsoft 
              ? " border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"}
            border-l-2 bg-transparent hover:bg-[#112240]
    py-3  text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240]
    py-3 text-sm cursor-pointer duration-300 px-8"
          >
            Apple
          </li>
          <li
            className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240]
    py-3 text-sm cursor-pointer duration-300 px-8"
          >
            Amazon
          </li>
          <li
            className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240]
    py-3 text-sm cursor-pointer duration-300 px-8"
          >
            QSA
          </li>
          <li
            className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240]
    py-3 text-sm cursor-pointer duration-300 px-8"
          >
            Nexage
          </li>
        </ul>
        {workNextage && <NextAge />}
        {workDatumsoft && <Datumsoft />}
      </div>
    </section>
  );
}
