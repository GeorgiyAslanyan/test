"use client";
import React from "react";

const arr = [
  {
    title: "Qualität",
    description:
      "Unsere höchste Priorität liegt dabei, content und storys zu produzieren, die qualitativ hochwertig sind. Dies spiegelt sich in jedem Aspekt unserer Arbeit wider. Dabei legen wir Wert unser Team und individuelle Fähigkeiten auf allen Ebenen zu unterstützen um möglichst erfolgversprechenden Output zu gewährleisten",
  },
  {
    title: "Innovativeness ",
    description:
      "Unsere höchste Priorität liegt dabei, content und storys zu produzieren, die qualitativ hochwertig sind. Dies spiegelt sich in jedem Aspekt unserer Arbeit wider. Dabei legen wir Wert unser Team und individuelle Fähigkeiten auf allen Ebenen zu unterstützen um möglichst erfolgversprechenden Output zu gewährleisten",
  },
  {
    title: "Communication ",
    description:
      "Unsere höchste Priorität liegt dabei, content und storys zu produzieren, die qualitativ hochwertig sind. Dies spiegelt sich in jedem Aspekt unserer Arbeit wider. Dabei legen wir Wert unser Team und individuelle Fähigkeiten auf allen Ebenen zu unterstützen um möglichst erfolgversprechenden Output zu gewährleisten",
  },
  {
    title: "Client-oriented",
    description:
      "Unsere höchste Priorität liegt dabei, content und storys zu produzieren, die qualitativ hochwertig sind. Dies spiegelt sich in jedem Aspekt unserer Arbeit wider. Dabei legen wir Wert unser Team und individuelle Fähigkeiten auf allen Ebenen zu unterstützen um möglichst erfolgversprechenden Output zu gewährleisten",
  },
  {
    title: "Team",
    description:
      "Unsere höchste Priorität liegt dabei, content und storys zu produzieren, die qualitativ hochwertig sind. Dies spiegelt sich in jedem Aspekt unserer Arbeit wider. Dabei legen wir Wert unser Team und individuelle Fähigkeiten auf allen Ebenen zu unterstützen um möglichst erfolgversprechenden Output zu gewährleisten",
  },
];

const Accordion = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="bg-gray-900 flex flex-col w-full px-[60px] py-[128px] gap-[96px]">
      <div className="flex flex-col items-center">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-br text-[64px] font-medium from-[#666A77] text-center to-[#FFFFFF] ">
          We put our key values <br /> in each project
        </h2>
      </div>
      <div className="grid grid-cols-9 gap-[96px] max-w-[1800px] self-center">
        <div className="col-span-4 flex flex-col gap-10">
          {arr.map((el, index) => (
            <div
              key={el.title}
              className="flex flex-col gap-6 border-b border-gray-700 pb-[32px]">
              <div
                onClick={() => setActive(index)}
                className="flex cursor-pointer  text-[24px] items-center text-white font-medium justify-between">
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
                className={`text-gray-200  ${
                  active === index ? "block" : "hidden"
                }`}>
                {el.description}
              </p>
            </div>
          ))}
        </div>
        <div className="max-h-[650px] col-span-5">
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
