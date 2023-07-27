"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import NextAge from "./works/NexAge";
import Datumsoft from "./works/Datumsoft";
import AHM from "./works/AHM";
import ADM from "./works/ADM";

export default function Experience() {
  const [workNexage, setWorkNexage] = useState(false);
  const [workDatumsoft, setDatumsoft] = useState(false);
  const [workAHM, setworkAHM] = useState(true);
  const [workADM, setworkADM] = useState(false);

  const handleNexage = () => {
    setWorkNexage(true);
    setDatumsoft(false);
    setworkAHM(false);
    setworkADM(false)
  };

  const handleDatumsoft = () => {
     setDatumsoft(true);
     setWorkNexage(false);
     setworkAHM(false);
     setworkADM(false)
  };

  const handleAHM = () => {
    setWorkNexage(false);
    setDatumsoft(false);
    setworkAHM(true);
    setworkADM(false)
  };

  const handleADM = () => {
    setWorkNexage(false);
    setDatumsoft(false);
    setworkAHM(false);
    setworkADM(true)
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
            onClick={handleAHM}
            className={`${
              workAHM 
              ? " border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"}
            border-l-2 bg-transparent hover:bg-[#112240]
    py-3  text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            AHM
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
            Datumsoft
          </li>
          <li
            onClick={handleADM}
            className={`${
              workADM 
              ? " border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-textDark"}
            border-l-2 bg-transparent hover:bg-[#112240]
    py-3  text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ADM
          </li>
          <li
           onClick={handleNexage}
           className={`${
             workNexage 
             ? " border-l-textGreen text-textGreen" 
             : "border-l-hoverColor text-textDark"}
           border-l-2 bg-transparent hover:bg-[#112240]
   py-3  text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Nexage
          </li>
          
        </ul>
        {workADM && <ADM />}
        {workAHM && <AHM />}
        {workNexage && <NextAge />}
        {workDatumsoft && <Datumsoft />}
      </div>
    </section>
  );
}
