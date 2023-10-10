"use client";
import React from "react";

const Accordion = ({accordionData}) => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="bg-gray-900 flex flex-col w-full px-[20px] md:px-[60px] py-10 md:py-[128px] gap-10 md:gap-[96px]">
      <div className="flex flex-col items-center">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-br text-[32px] md:text-[64px] fhd:text-[80px] font-medium from-[#666A77] text-center to-[#FFFFFF] ">
          {accordionData.data[0] ?? null} <br className="hidden sm:flex"/> {accordionData.data[1] ?? null}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-[96px] w-full max-w-[1800px] self-center">
        <div className="col-span-1 lg:col-span-4 flex  flex-col gap-10">
          {accordionData.arr && accordionData.arr.map((el, index) => (
            <div
              key={el.title}
              className="flex flex-col gap-6 border-b border-gray-700 pb-[32px]">
              <div
                onClick={() => setActive(index)}
                className="flex cursor-pointer  text-[24px] fhd:text-4xl items-center text-white font-medium justify-between">
                <p>{el.title}</p>
                <img
                  src="/accordion/arrow.svg"
                  className={`transition-all duration-150 ease-linear ${
                    active === index && "rotate-180"
                  }`}
                  alt="arrow"
                />
              </div>
              <p
                className={`text-gray-200 fhd:text-3xl  ${
                  active === index ? "flex" : "hidden"
                }`}>
                {el.description}
              </p>
            </div>
          ))}
        </div>
        <div className="max-h-[650px] hidden lg:block col-span-5">
          <img
            src={
              active === 0
                ? "/accordion/first.png"
                : active === 1
                ? "/accordion/innovativeness.jpg"
                : active === 2
                ? "/accordion/communication.jpg"
                : active === 3
                ? "/accordion/client.jpg"
                : "/accordion/team.jpg"
            }
            alt="first"
            className="h-[100%] w-full object-cover rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
