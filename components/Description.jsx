import React from "react";

const Description = ({descriptionData}) => {
  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#1F293E] py-[30px] md:py-[144px] w-full px-[20px] md:px-[60px] flex items-center flex-col gap-[128px]">
      <div className="gap-[64px] items-center flex flex-col lg:grid grid-cols-7 max-w-[1800px]">
        <div className="flex relative p-0 md:p-10 flex-col gap-4 md:gap-6 lg:col-span-3">
        <div className="hidden md:block absolute w-10 h-10 top-0 left-0 border-t border-l border-gray-500 rounded-tl-2xl"></div>
            <div className="hidden md:block absolute w-10 h-10 bottom-0 right-0 border-b border-r border-gray-500 rounded-br-2xl"></div>
          <h3 className="text-3xl md:text-5xl font-medium leading-[36px] md:leading-[56px]">
            {descriptionData.data[0] ?? null}
          </h3>
          <p className="text-xl fhd:text-3xl text-gray-200 leading-[30px]">
          {descriptionData.data[1] ?? null}
          </p>
          <button className="pt-8 fhd:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#AC54F1] w-fit font-medium text-[18px]">
          {descriptionData.data[2] ?? null} →
          </button>
        </div>
        <video
        type="video/webm" 
        autoPlay 
        muted 
        loop
          src="/description/compaigns.webm"
          className="rounded-3xl col-span-7 lg:col-span-4 w-full"
        />
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-7 gap-4 md:gap-[64px] items-center max-w-[1800px]">
        <video
        type="video/webm" 
        autoPlay 
        muted 
        loop
          src="/description/camera.webm"
          className="rounded-3xl lg:col-span-4 w-full"
        />
        <div className="flex flex-col gap-6 lg:col-span-3 relative p-0 md:p-10">
            <div className="hidden md:block absolute w-10 h-10 top-0 right-0 border-t border-r border-gray-500 rounded-tr-2xl"></div>
            <div className="hidden md:block absolute w-10 h-10 bottom-0 left-0 border-b border-l border-gray-500 rounded-bl-2xl"></div>
          <h3 className="text-3xl md:text-5xl font-medium leading-[36px] md:leading-[56px]">
          {descriptionData.data[3] ?? null}
          </h3>
          <p className="text-xl fhd:text-3xl text-gray-200 leading-[30px]">
          {descriptionData.data[4] ?? null}
          </p>
          <button className="pt-8 bg-clip-text text-transparent fhd:text-3xl bg-gradient-to-r from-[#6366F1] to-[#AC54F1] w-fit font-medium text-[18px]">
          {descriptionData.data[5] ?? null} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
