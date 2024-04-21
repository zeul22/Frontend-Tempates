import React from "react";

const Projects = () => {
  return (
    <>
      <div className="border-b font-bold ml-2 border-zinc-400 text-4xl md:text-9xl">
        PROJECTS
      </div>
      <div className="grid md:grid-cols-2 grid-rows-* gap-6">
        <div className="flex items-center justify-center text-4xl md:text-9xl"></div>
        <div>
          [Can Make things more exciting here, like some Panels or History]
        </div>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div className="flex items-start justify-center h-[30vh] bg-gray-100 p-3 m-6 rounded-md">
              <div>
                <div className="p-2 font-bold text-3xl tracking-widest flex justify-center">
                  <div className="border-b border-zinc-600">Title</div>
                </div>
                <div className="p-2 font-bold text-xl font-serif text-wrap">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit nesciunt vitae nam perferendis nisi repellendus
                  expedita. Dolores eligendi autem repudiandae! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Reprehenderit
                  nesciunt vitae nam perferendis nisi repellendus expedita.
                  Dolores eligendi autem repudiandae!
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
