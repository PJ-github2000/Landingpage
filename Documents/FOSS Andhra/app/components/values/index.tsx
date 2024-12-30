"use client";

import Image from "next/image";
import React from "react";

import suslight from "../../../public/assets/values/assets/suslight.png"
import susdark from "../../../public/assets/values/assets/susdark.png"
import incdark from "../../../public/assets/values/assets/incdark.png"
import inclight from "../../../public/assets/values/assets/inclight.png"
import disdark from "../../../public/assets/values/assets/disdark.png"
import dislight from "../../../public/assets/values/assets/dislight.png"


function Values() {
  return (
    <div id="mission">
    <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
        Our Vision
      </h3>
      <h5 className="text-black opacity-60 text-lg font-normal text-center">
      FOSS Andhra guided by our core values, we strive to create a
                technology landscape that empowers all communities. Transparency
                and Inclusivity ensure our tools are open and accessible to
                everyone. Through Innovation, we address real-world challenges,
                while Sustainability keeps our solutions adaptable for the
                future. Together, these values drive our commitment to a more
                equitable digital world.
      </h5>
      <section className="grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto mt-4">
      <div className="group bg-gradient-to-t from-[#eff7ff] to-[#3a89f7] hover:from-[#1d46b0] hover:to-[#080808] relative before:absolute before:inset-0  before:opacity-5 rounded-2xl">
        <div className="relative flex flex-col items-center justify-between ">
          <div className="px-6 py-5">
            <div className="group-hover:bg-[#1d46b0] bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1">
              Static
            </div>
            <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 hover:text-slate-200 text-[#080808] mb-1 transition-all duration-500 ease-in-out">
            Sustainability Reports           </span>
            <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
            Sustainability Highlights
            </span>
            <p className="text-sm text-slate-500 group-hover:text-white ">
            Our goal is to create sustainable solutions that can be maintained and adapted by the communities we serve.              </p>
          </div>
          <div className="relative group-hover:-translate-y-2 transition-transform mt-5 duration-500 ease-in-out ">
            <Image
              className="group-hover:opacity-0 transition-opacity duration-500 object-cover m-0 p-0"
              src={suslight.src}
              width={350}
              height={240}
              alt="Card image 01"
            />
            <Image
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity object-cover duration-300 h-full m-0 p-0"
              src={susdark.src}
              width={350}
              height={240}
              alt="Card image 01 displaying on hover"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="group bg-gradient-to-t from-[#dafeee] to-[#17d082] hover:from-[#116a46] hover:to-[#0b1a3b] relative before:absolute before:inset-0  before:opacity-5 rounded-2xl">
        <div className="relative flex flex-col items-center justify-between ">
          <div className="px-6 py-5">
            <div className="bg-white text-[#116a46] group-hover:bg-[#116a46] transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 group-hover:text-white mb-1">
              Password
            </div>
            <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
            Inclusivity
            </span>
            <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
            Inclusivity Highlights
            </span>
            <p className="text-sm text-slate-500 group-hover:text-white">
            We are dedicated to making technology accessible to everyone, especially marginalized communities.
            </p>
          </div>
          <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
            <Image
              className="group-hover:opacity-0 transition-opacity duration-500"
              src={inclight.src}
              width={350}
              height={240}
              alt="Card image 01"
            />
            <Image
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              src={incdark.src}
              width={350}
              height={240}
              alt="Card image 01 displaying on hover"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="group bg-gradient-to-t from-[#f0eef9] to-[#9782d0] hover:from-[#614592] hover:to-[#141414] relative before:absolute before:inset-0  before:opacity-5 rounded-2xl">
        <div className="relative flex flex-col items-center justify-between ">
          <div className="px-6 py-5">
            <div className="bg-white text-[#614592] group-hover:bg-[#614592] transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 group-hover:text-white mb-1">
              Alert
            </div>
            <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
            Innovation
            </span>
            <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
            Innovation Highlights
            </span>
            <p className="text-sm text-slate-500 group-hover:text-white">
            We continuously seek new ways to apply open-source technologies to solve pressing social and economic challenges.
            </p>
          </div>
          <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
            <Image
              className="group-hover:opacity-0 transition-opacity duration-500"
              src={disdark.src}
              width={350}
              height={240}
              alt="Card image 01"
            />
            <Image
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              src={dislight.src}
              width={350}
              height={240}
              alt="Card image 01 displaying on hover"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
  );
}

export default Values;
