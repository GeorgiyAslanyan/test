'use client'
import React, { useEffect } from "react";

const Skillset = ({ setIsModalOpen }) => {
    const [activeCategory, setActiveCategory] = React.useState(0)
    const [data, setData] = React.useState()

    const fetchData = async () => {
        let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/skillset', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => res.json())
        setData(res.filter(el => el.categoryId === activeCategory))
    }

    useEffect(() => {
        fetchData()
    }, [activeCategory])

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
        <button onClick={() => setActiveCategory(0)} className={`px-[32px] py-[19px] transition-all duration-150 ease-linear text-gray-950 font-medium text-[18px] border rounded-2xl ${activeCategory === 0 ? 'bg-white border-blue-500' : 'bg-none border-gray-400'}`}>
          Motion
        </button>
        <button onClick={() => setActiveCategory(1)} className={`px-[32px] py-[19px] transition-all duration-150 ease-linear text-gray-950 font-medium text-[18px] border rounded-2xl ${activeCategory === 1 ? 'bg-white border-blue-500' : 'bg-none border-gray-400'}`}>
          Graphics
        </button>
        <button onClick={() => setActiveCategory(2)} className={`px-[32px] py-[19px] transition-all duration-150 ease-linear text-gray-950 font-medium text-[18px] border rounded-2xl ${activeCategory === 2 ? 'bg-white border-blue-500' : 'bg-none border-gray-400'}`}>
          Web development
        </button>
        <button onClick={() => setActiveCategory(3)} className={`px-[32px] py-[19px] transition-all duration-150 ease-linear text-gray-950 font-medium text-[18px] border rounded-2xl ${activeCategory === 3 ? 'bg-white border-blue-500' : 'bg-none border-gray-400'}`}>
          Events
        </button>
        <button onClick={() => setActiveCategory(4)} className={`px-[32px] py-[19px] transition-all duration-150 ease-linear text-gray-950 font-medium text-[18px] border rounded-2xl ${activeCategory === 4 ? 'bg-white border-blue-500' : 'bg-none border-gray-400'}`}>
          Marketing
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data?.map(el => <div className="p-8 border border-gray-400 rounded-3xl text-gray-950" key={el.title}>
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
            <button onClick={() => setIsModalOpen(true)} className="bg-white font-medium text-gray-950 rounded-2xl py-3 px-5">Book a call</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Skillset;
