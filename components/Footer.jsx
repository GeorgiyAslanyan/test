import React from "react";

const Footer = () => {
  return (
    <div className="px-[60px] pt-[80px] flex flex-col w-full gradient-background gap-[128px] pb-12">
      <div className="flex flex-col ">
        <div className="flex gap-10"><h2 className="leading-[144px] text-gray-900 font-medium text-[160px]  flex">
          Global Media{" "}
        </h2>{" "}
        <img src="/footer/arrow.svg" alt="arrow" className="" /></div>
        <h2 className="leading-[144px] text-gray-900 font-medium text-[160px] flex gap-10">
          {" "}
          Production
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <a className="text-gray-500" href="">
            GMP © 2023
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/instagram.svg" alt="inst" />
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/linkedin.svg" alt="linkedin" />
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/twitter.svg" alt="twitter" />
          </a>
          <a className="text-gray-500" href="">
            <img src="/footer/youtube.svg" alt="youtube" />
          </a>
        </div>
        <div className="flex gap-5">
          <a className="text-gray-950" href="">
            Impressum
          </a>
          <a className="text-gray-950" href="">
            Datenschutz
          </a>
          <a className="text-gray-950" href="">
            Cookies erstellung
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
