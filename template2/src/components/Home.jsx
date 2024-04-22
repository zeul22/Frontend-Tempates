import React from "react";
import Slider from "./Slider";

const Home = () => {
  const work = [
    {
      title: "RAHUL ANAND",
      description:
        "You are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anandYou are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anand",
    },
    {
      title: "BLISS ANAND",
      description:
        "You are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anand",
    },
    {
      title: "ANAND365",
      description:
        "You are seeing my work, if this project helped you somewhere, do give me a follow over my instagram: bliss_anand",
    },
  ];
  return (
    <div className="bg-green-200 w-full h-[50vh]">
      <div
        className="  flex 
      items-center justify-center text-4xl mb-6 h-[6vh] font-bold"
      >
        TESTIMONIALS
      </div>
      <div className="text-4xl p-6 flex items-center justify-center">
        <Slider works={work} />
      </div>
    </div>
  );
};

export default Home;
