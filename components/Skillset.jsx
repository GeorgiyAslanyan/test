import React from "react";

const arr = [
  {
    id: 0,
    title: "Storytelling",
    description:
      "Develop your storytelling abilities to effectively convey messages through motion graphics. Understand narrative structures, pacing, and visual storytelling techniques to engage viewers and create compelling animations",
    marked: null
  },
  {
    id: 1,
    title: "Motion Principles",
    description:
      "Gain a solid understanding of motion principles like timing, easing, and spatial relationships. Master techniques such as keyframing, motion paths, and transitions to bring your designs to life and create smooth and engaging animations",
    marked: null
  },
  {
    id: 2,
    title: "3D Rendering",
    description:
      "Knowledge of 3D modeling and rendering software like Cinema 4D or Autodesk Maya can elevate your motion graphic designs. Understanding how to create 3D objects, apply textures and materials, and render high-quality output will give.",
    marked: null
  },
  {
    id: 3,
    title: "Typography",
    description:
      "Typography plays a significant role in motion graphics. Learn how to select appropriate fonts:",
    marked: ['arrange and animate text;', 'reate kinetic typography;', 'echnique that combines motion and text']
  },
  {
    id: 4,
    title: "Visual Effects",
    description:
      "Typography plays a significant role in motion graphics. Learn how to select appropriate fonts:",
    marked: ['arrange and animate text;', 'reate kinetic typography;', 'echnique that combines motion and text']
  },
];

const Skillset = () => {
  return (
    <div className="bg-gray-100 w-full px-[60px] py-[128px] flex flex-col gap-[72px]">
      <div className="flex flex-col items-center">
        <h2 className="text-black text-6xl flex font-medium gap-4">
          Our skillset{" "}
          <img
            src="/description/camera.png"
            alt="camera"
            className="w-[72px] h-[72px] p-1 rounded-full border-dashed border-2 border-blue-600"
          />{" "}
          better than
        </h2>
        <h2 className="text-black text-6xl flex font-medium gap-4">
          other companies have
        </h2>
      </div>
      <div className="flex justify-center gap-4">
        <button className="bg-white px-[32px] py-[19px] text-gray-950 font-medium text-[18px] border rounded-2xl border-blue-500">
          Motion
        </button>
        <button className="bg-none px-[32px] py-[19px] text-gray-950 font-medium text-[18px] border rounded-2xl border-gray-400">
          Graphics
        </button>
        <button className="bg-none px-[32px] py-[19px] text-gray-950 font-medium text-[18px] border rounded-2xl border-gray-400">
          Web development
        </button>
        <button className="bg-none px-[32px] py-[19px] text-gray-950 font-medium text-[18px] border rounded-2xl border-gray-400">
          Events
        </button>
        <button className="bg-none px-[32px] py-[19px] text-gray-950 font-medium text-[18px] border rounded-2xl border-gray-400">
          Marketing
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {arr.map(el => <div className="p-8 border border-gray-400 rounded-3xl text-gray-950" key={el.id}>
            <h3 className="font-medium text-[32px]">{el.title}</h3>
            <p className="mt-12 mb-4 text-gray-700 text-[16px]">{el.description}</p>
            {el.marked && <ul className="list-disc text-[16px] list-inside marker:text-blue-600">
                {el.marked.map(mark => <li key={mark}>{mark}</li>)}
                </ul>}
        </div>)}
        <div className="p-8 border flex flex-col justify-between bg-gradient-to-br from-blue-500 to-[#9330D0] border-gray-400 rounded-3xl text-white">
            <h3 className="font-medium text-[32px]">Schedule a call</h3>
            <div>
            <p className="mt-12 mb-4 text-gray-200 text-[16px]">Familiarity with visual effects techniques like particle systems, compositing.</p>
            <button className="bg-white font-medium text-gray-950 rounded-2xl py-3 px-5">Book a call</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Skillset;
