import { motion } from "framer-motion";
import type { NextPage } from "next";
import Bio from "../components/Bio";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import ProjectsTimeline from "../components/ProjectsTimeline";
import useTypingAnimation from "../utils/useTypingAnimation";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-screen h-screen overflow-scroll snap-y snap-mandatory">
        <div className="snap-start">
          <Intro />
        </div>
        <div className="py-16 scroll-mb-32 snap-start">
          <Bio />
        </div>
        <div className="py-16 snap-start snap-normal">
          <ProjectsTimeline />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
