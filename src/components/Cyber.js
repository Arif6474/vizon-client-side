import React from "react";
import cyber from "./images/coding.png";
const Cyber = () => {
  return (
    <div className="  shadow-lg flex justify-center items-center gap-8 p-8 lg:flex-row flex-col card my-4 lg:w-96 w-40 mx-auto bg-[#0c1839] text-primary-content  hover:shadow-blue-500 transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-103">
      <img
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        src={cyber}
        alt=""
        className="lg:w-28 w-24"
      />
      <div className="space-y-4  ">
        <h1
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center font-semibold text-white text-lg"
        >
          Cyber Squad
        </h1>
        <p className="opacity-70  text-sm">
          Lorem ipsum dolor sit amet<span className="hidden lg:block"> consectetur adipisicing elit. Quaerat
          nemo, beatae velit </span>
        </p>
        <button className="btn btn-sm text-white">Interested</button>
      </div>
    </div>
  );
};

export default Cyber;
