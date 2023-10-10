import React from "react";


const Footer = ({footeroData}) => {
  return (
    <div className="px-[20px] md:px-[60px] pt-10 md:pt-[80px] flex flex-col w-full gradient-background gap-[128px] pb-5 md:pb-12">
      <div className="flex flex-col ">
        <div className="flex gap-10"><h2 className="leading-[30px] sm:leading-[60px] md:leading-[70px] lg:leading-[144px] text-gray-900 font-medium text-[30px] sm:text-[70px] md:text-[80px] lg:text-[160px]  flex">
          {footeroData.data[0] ?? null}{" "}
        </h2>{" "}
        <img src="/footer/arrow.svg" alt="arrow" className="w-[40px] sm:w-[70px] md:w-[80px] lg:w-[120px]" /></div>
        <h2 className="leading-[30px] sm:leading-[60px] md:leading-[70px] lg:leading-[144px] text-gray-900 font-medium text-[30px] sm:text-[70px] md:text-[80px] lg:text-[160px] flex gap-10">
          {" "}
          {footeroData.data[1] ?? null}
        </h2>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row justify-between">
        <div className="flex gap-5">
          <a className="text-gray-500 fhd:text-3xl" href="">
            GMP © 2023
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/instagram.svg" className="fhd:w-8" alt="inst" />
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/linkedin.svg" className="fhd:w-8" alt="linkedin" />
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/twitter.svg" className="fhd:w-8" alt="twitter" />
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/youtube.svg" className="fhd:w-8" alt="youtube" />
          </a>
        </div>
        <div className="flex gap-5 fhd:text-3xl">
          <a className="text-gray-950" href="">
          {footeroData.data[2] ?? null}
          </a>
          <a className="text-gray-950" href="">
          {footeroData.data[3] ?? null}
          </a>
          <a className="text-gray-950" href="">
          {footeroData.data[3] ?? null}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
