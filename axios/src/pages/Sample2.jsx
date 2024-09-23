import React from "react";
import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard2 from "../components/ProjectCard2";
const Sample2 = () => {
  const [proData, setproData] = useState(null);
  const fetchData = async () => {
    try {
      const { data } = await getProjects();
      setproData(data);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(proData);

  if (!proData) {
    return "Nope Data not avail";
  }

  return (
    <>
      <div className="h-full w-full flex flex-row flex-wrap gap-8 justify-center items-center">
        {proData.map((items, index) => (
          <ProjectCard2
            title={items.title}
            coverimg={items.coverimg}
            desc={items.desc}
            id={items.id}
            link={items.link}
            key={index}
            pid={index}
          />
        ))}
      </div>
    </>
  );
};

export default Sample2;
