import React from "react";

const ProjectCard2 = ({ title, coverimg, desc, pid, link, id }) => {
  return (
    <>
      <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
        <div className="absolute flex flex-col items-center justify-between text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
          <img src={coverimg} alt="" height={100} width={150} />
          <div>{title}</div>
          <div>{desc}</div>
          <div>{link}</div>
        </div>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
      </div>
    </>
  );
};

export default ProjectCard2;
