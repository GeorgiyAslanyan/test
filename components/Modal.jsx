import React, { useState } from "react";

const Modal = ({ setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skillErr, setSkillErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [telErr, setTelErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [skill, setSkill] = useState(0);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const onHandleCheck = () => {
    skill === 0 ? setSkillErr(true) : setSkillErr(false);
    !name ? setNameErr(true) : setNameErr(false);
    !tel ? setTelErr(true) : setTelErr(false);
    EMAIL_REGEXP.test(email) ? setEmailErr(false) : setEmailErr(true);
  };

  return (
    <div className="fixed w-full h-screen z-50 items-center flex justify-center top-0 left-0">
      <div
        className="bg-black backdrop-blur-lg bg-opacity-25 absolute z-30 w-full h-screen"
        onClick={() => setIsModalOpen(false)}></div>
      <div className="bg-white relative max-w-[640px] rounded-[15px] md:rounded-[32px] flex flex-col gap-4 p-3 md:p-10 z-50">
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute right-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            color="black"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="font-medium text-[20px] md:text-[40px] text-gray-950">
          Drop us a line
        </h2>
        <p className="text-gray-700 text-[16px] md:text-[20px] mb-4">
          Our documentary campaigns feature leading figures, organisations and
          leaders, in open and candid discussions.
        </p>
        <form className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`bg-gray-100 border rounded-[20px] w-full placeholder:text-gray-400 text-gray-950 py-[10px] md:py-[18px] px-5 ${
                nameErr ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              name=""
              placeholder="Name"
              id=""
            />
            <p className="text-red-500">{nameErr && "Required"}</p>
          </div>
          <div className="col-span-1">
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className={`bg-gray-100 border rounded-[20px] w-full placeholder:text-gray-400 text-gray-950 py-[10px] md:py-[18px] px-5 ${
                telErr ? "border-red-500" : "border-gray-200"
              }`}
              type="tel"
              name=""
              placeholder="Phone"
              id=""
            />
            <p className="text-red-500">{telErr && "Required"}</p>
          </div>
          <div className="col-span-1 ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-gray-100 border rounded-[20px] w-full placeholder:text-gray-400 text-gray-950 py-[10px] md:py-[18px] px-5 ${
                emailErr ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name=""
              placeholder="E-mail"
              id=""
            />
            <p className="text-red-500">{emailErr && "Wrong email"}</p>
          </div>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`relative col-span-2 cursor-pointer px-5 bg-gray-100 border rounded-[20px] flex justify-between py-[10px] md:py-[18px] items-center ${
              skillErr ? "border-red-500 " : "border-gray-200 "
            }`}>
            {skill === 0 && <p className="text-gray-400">Your skill</p>}
            {skill === 1 && <p className="text-gray-950">Junior</p>}
            {skill === 2 && <p className="text-gray-950">Middle</p>}
            {skill === 3 && <p className="text-gray-950">Senior</p>}
            {skill === 4 && <p className="text-gray-950">Lead</p>}
            {skill === 5 && <p className="text-gray-950">CTO</p>}
            <img
              src="/accordion/arrowBlack.svg"
              className={`transition-all duration-150 ease-linear ${
                !isOpen && "rotate-180"
              }`}
              alt="arrow"
            />
            {isOpen && (
              <div className="absolute w-full left-0 bottom-0 bg-gray-100 border border-gray-200 rounded-xl md:rounded-[20px] translate-y-[102%] text-[14px] md:text-[18px] font-medium ">
                <button
                  onClick={() => setSkill(1)}
                  className="border-b border-gray-200 items-center w-full px-3 py-2 md:py-4  text-start">
                  <p
                    className={`${
                      skill === 1 ? "text-gray-950" : "text-gray-400"
                    }`}>
                    Junior
                  </p>
                </button>
                <button
                  onClick={() => setSkill(2)}
                  className="border-b border-gray-200 items-center w-full px-3 py-4  text-start">
                  <p
                    className={`${
                      skill === 2 ? "text-gray-950" : "text-gray-400"
                    }`}>
                    Middle
                  </p>
                </button>
                <button
                  onClick={() => setSkill(3)}
                  className="border-b border-gray-200 items-center w-full px-3 py-4  text-start">
                  <p
                    className={`${
                      skill === 3 ? "text-gray-950" : "text-gray-400"
                    }`}>
                    Senior
                  </p>
                </button>
                <button
                  onClick={() => setSkill(4)}
                  className="border-b border-gray-200 items-center w-full px-3 py-4  text-start">
                  <p
                    className={`${
                      skill === 4 ? "text-gray-950" : "text-gray-400"
                    }`}>
                    Lead
                  </p>
                </button>
                <button
                  onClick={() => setSkill(5)}
                  className="items-center w-full px-3 py-4 text-start">
                  <p
                    className={`${
                      skill === 5 ? "text-gray-950" : "text-gray-400"
                    }`}>
                    CTO
                  </p>
                </button>
              </div>
            )}
          </div>
          <p className="text-red-500">{skillErr && "Сhoose a skill"}</p>
          <div className="col-span-2 gap-4 items-center flex">
            <input
              required
              type="checkbox"
              name=""
              id="checkbox"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-200 rounded-lg"
            />
            <label htmlFor="checkbox" className="text-[18px] text-gray-500">
              I’m agree with every data you collect
            </label>
          </div>
          <button
            onClick={onHandleCheck}
            className="col-span-2 bg-blue-600 text-white py-4 items-center justify-center flex rounded-full font-medium">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
