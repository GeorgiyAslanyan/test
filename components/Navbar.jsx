"use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Navbar = ({ navData }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [isDe, setIsDe] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`transition-all ease-linear duration-200 fixed  rounded-[24px] lg:rounded-[32px]  px-3 sm:px-10  z-40 ${
          scrollY > 750
            ? " backdrop-blur-lg bg-[#030712] w-[90%] bg-opacity-70 mt-5 py-3 sm:py-5"
            : "lg:w-full py-3 sm:py-[50px]  mt-5 lg:mt-0 bg-[#030712] lg:bg-inherit w-[90%] bg-opacity-70 backdrop-blur-lg lg:backdrop-blur-none"
        }`}>
        <div className="flex justify-between items-center">
          <img
            src="/navbar/logo.svg"
            className="w-[123px] sm:w-[196px]"
            alt="logo"
          />
          <div className="gap-10 hidden lg:flex fhd:text-[30px]">
            <a href="#about">{navData.data[0] ?? null}</a>
            <a href="#compaigns">{navData.data[1] ?? null}</a>
            <a href="#partners">{navData.data[2] ?? null}</a>
            <a href="#contacts">{navData.data[3] ?? null}</a>
          </div>
          <div className="flex gap-2 max-h-12">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className={`hidden relative cursor-pointer rounded-2xl px-[14px] fhd:text-3xl lg:flex gap-3 py-3 items-center ${
                scrollY <= 750 && "border border-gray-500"
              }`}>
              <img
                src={isDe ? "/navbar/de.svg" : "/navbar/en.svg"}
                alt="activeLang"
              />
              <p>{isDe ? "De" : "En"}</p>
              <img
                src="/accordion/arrow.svg"
                className={`transition-all duration-150 ease-linear ${
                  !isOpen && "rotate-180"
                }`}
                alt="arrow"
              />
              {isOpen && (
                <div className="absolute w-full left-0 bottom-0 bg-white rounded-2xl translate-y-[110%]">
                  <button
                    onClick={() => setIsDe(true)}
                    className="grid border-b gap-3 border-gray-200 grid-cols-3 items-center px-3 py-4">
                    <img src="/navbar/de.svg" alt="de" />
                    <p className="text-gray-950">De</p>
                  </button>
                  <button
                    onClick={() => setIsDe(false)}
                    className="grid grid-cols-3 gap-3 items-center px-3 py-4">
                    <img src="/navbar/en.svg" alt="en" />
                    <p className="text-gray-950">En</p>
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 flex items-center fhd:text-3xl rounded-xl sm:rounded-2xl px-[14px] py-1 sm:py-3">
              Contact us
            </button>
            <button
              onClick={() => setBurger((prev) => !prev)}
              className={`flex items-center lg:hidden transition-all  ease-linear duration-100 ${
                burger ? "rotate-90" : "rotate-0"
              }`}>
              <img src="/navbar/burger.svg" alt="burger" />
            </button>
          </div>
        </div>
        <div
          className={`gap-5 pt-4 pb-2  ${
            burger ? "flex flex-col lg:hidden" : "hidden"
          }`}>
          <a href="#about">{navData.data[0] ?? null}</a>
          <a href="#compaigns">{navData.data[1] ?? null}</a>
          <a href="#partners">{navData.data[2] ?? null}</a>
          <a href="#contacts">{navData.data[3] ?? null}</a>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Navbar;
