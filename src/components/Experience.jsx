import React from "react";

function Experience() {
  return (
    <>
      <div className="experience-content flex flex-row justify-center">
        <div className="flex flex-col ">
          <h1 className="font-heading font-black sm:text-sm md:text-l lg:text-4xl sm:p-2 m-6">
            Education
          </h1>
        </div>
      </div>
      <div className="flex flex-row h-10 justify-between lg:px-48 lg:pr-48">
        <img src="./graduation-cap.svg" alt="logo" />
        <h2 className="p-2 font-bold">
          High School Diploma <span className="p-2">2019-2022</span>
        </h2>
        <h3 className="p-2"></h3>
      </div>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="0" x2="5" y2="5" stroke="grey" strokeWidth="0.1" />
      </svg>
    </>
  );
}

export default Experience;
