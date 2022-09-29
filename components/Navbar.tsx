import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import ThemeChanger from "./ThemeChanger";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, useScroll } from "framer-motion";
import NavbarSidebar from "./NavbarSidebar";

const Navbar = () => {
  const router = useRouter();
  const [sideNav, setSideNav] = useState(false);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={` fixed h-16 w-full z-10 bg-transparent bg-opacity-40 backdrop-filter backdrop-blur bg-clip-padding py-4 px-4 md:px-20 lg:px-40 flex justify-between items-center`}
    >
      <Link href={"/"}>
        <a>
          <motion.div className="flex text-4xl font-bold text-cyan-400">
            D
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex text-4xl font-bold text-cyan-400"
            >
              D
            </motion.div>
          </motion.div>
        </a>
      </Link>
      <div className="hidden sm:flex sm:w-1/4 sm:justify-between">
        <Link href={"/projects"}>
          <a
            className={` ${
              router.asPath == "/projects" ? "underline " : "hover:underline"
            }  decoration-2 underline-offset-4 decoration-black dark:decoration-white`}
          >
            Projects
          </a>
        </Link>
        <Link href={"/blogs"}>
          <a
            className={` ${
              router.asPath == "/blogs" ? "underline" : "hover:underline"
            }  decoration-2 underline-offset-4 decoration-black dark:decoration-white `}
          >
            Blogs
          </a>
        </Link>
      </div>

      <div className="hidden sm:flex ">
        <ThemeChanger />
      </div>

      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        type="button"
        className={`${sideNav ? "hidden" : "visible"} sm:hidden`}
        onClick={() => setSideNav(true)}
      >
        <TiThMenu size={30} />
      </motion.button>

      <NavbarSidebar setSideNav={setSideNav} sideNav={sideNav} />
    </motion.div>
  );
};

export default Navbar;
