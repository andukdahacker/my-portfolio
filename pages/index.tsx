import type { NextPage } from "next";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import ProjectsTimeline from "../components/ProjectsTimeline";
import useTypingAnimation from "../utils/useTypingAnimation";

const WhatIAm = ["an aspiring developer", "your developer"];
const Home: NextPage = () => {
  const typing = useTypingAnimation(WhatIAm);

  return (
    <Layout>
      <div className=" pt-16  h-screen  w-full flex justify-center items-center flex-col p-4">
        <div className="text-4xl  md:text-6xl font-bold text-center">
          Hi I'm{" "}
          <span className=" text-cyan-400 hover:animate-pulse">Duc Do</span>
        </div>
        <div className="text-2xl text-center   md:text-4xl">
          I'm <span className="blinking-cursor">{typing}</span>
        </div>
      </div>
      <Bio />
      <ProjectsTimeline />
    </Layout>
  );
};

export default Home;
