import React from "react";

const Description = ({setIsModalOpen}) => {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#1F293E] py-[144px] w-full px-[60px] flex items-center flex-col gap-[128px]">
      <div className="gap-[64px] items-center grid grid-cols-7 max-w-[1800px]">
        <div className="flex relative p-10 flex-col gap-6 col-span-3">
        <div className="absolute w-10 h-10 top-0 left-0 border-t border-l border-gray-500 rounded-tl-2xl"></div>
            <div className="absolute w-10 h-10 bottom-0 right-0 border-b border-r border-gray-500 rounded-br-2xl"></div>
          <h3 className="text-5xl font-medium leading-[56px]">
            We do campaigns that works well for your idea
          </h3>
          <p className="text-xl text-gray-200 leading-[30px]">
            Our documentary campaigns feature leading figures, organisations and
            leaders, in open and candid discussions about transformative
            strategies and mindsets. Addressing complex trends.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="pt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#AC54F1] w-fit font-medium text-[18px]">
            All campaigns →
          </button>
        </div>
        <video
        type="video/webm" 
        autoPlay 
        muted 
        loop
          src="/description/compaigns.webm"
          className="rounded-3xl col-span-4 w-full"
        />
      </div>
      <div className="grid grid-cols-7 gap-[64px] items-center max-w-[1800px]">
        <video
        type="video/webm" 
        autoPlay 
        muted 
        loop
          src="/description/camera.webm"
          className="rounded-3xl col-span-4 w-full"
        />
        <div className="flex flex-col gap-6 col-span-3 relative p-10">
            <div className="absolute w-10 h-10 top-0 right-0 border-t border-r border-gray-500 rounded-tr-2xl"></div>
            <div className="absolute w-10 h-10 bottom-0 left-0 border-b border-l border-gray-500 rounded-bl-2xl"></div>
          <h3 className="text-5xl font-medium leading-[56px]">
            We make films that stick in your heart
          </h3>
          <p className="text-xl text-gray-200 leading-[30px]">
            This exclusive service provided by our team of professional content
            creators is available for global use. Our clients will have access
            and total creative control throughout the process of production,
            with resources and talent supplied by us.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="pt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#AC54F1] w-fit font-medium text-[18px]">
          I have an idea for film →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
