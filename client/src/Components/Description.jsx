import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flexx flex-col items-center justify-center p-6 mt-10">
      <h1 className="text-3xl text-center font-bold mb-3">Create AI images</h1>
      <p className="text-xl text-center text-gray-800 mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <div className="flex gap-10 items-center justify-center mt-20">
        <img className="w-96 rounded-lg" src={assets.sample_img_1} alt="" />
        <div className="w-1/3">
          <h2 className="text-2xl capitalize font-bold mb-10">
            introducing the AI powered text to image generator
          </h2>
          <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            mollitia eius consequuntur architecto veniam deserunt doloribus nemo
            voluptas, atque delectus molestias, quam fuga odit! Vero est itaque
            velit blanditiis architecto.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ex
            maxime debitis vel vitae, fuga voluptate dolorum quisquam fugiat qui
            sapiente aliquid molestias quasi corporis accusantium! Obcaecati
            eius ratione sit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
