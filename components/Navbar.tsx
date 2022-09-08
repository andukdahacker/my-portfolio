import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { GiGecko } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import ThemeChanger from "./ThemeChanger";
import { useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  const [sideNav, setSideNav] = useState(false);

  return (
    <div
      className={` fixed h-16 w-full z-50  bg-transparent bg-opacity-40 backdrop-filter backdrop-blur bg-clip-padding py-4 px-4 md:px-20 lg:px-40 flex justify-between items-center `}
    >
      <Link href={"/"}>
        <a>
          <div className="font-bold text-4xl flex text-cyan-400">
            <div className=" text-cyan-400 hover:animate-ping">
              <GiGecko />
            </div>
            DD
          </div>
        </a>
      </Link>
      <div className="hidden sm:flex">
        <Link href={"/projects"}>
          <a className="hover:underline decoration-2 underline-offset-4 decoration-white dark:decoration-black">
            Projects
          </a>
        </Link>
        <Link href={"/"}>
          <a className="ml-10 hover:underline decoration-2 underline-offset-4 decoration-white dark:decoration-black ">
            Blogs
          </a>
        </Link>
      </div>

      <div className="hidden sm:flex ">
        <ThemeChanger />
      </div>
      <button
        type="button"
        className={`${sideNav ? "hidden" : "visible"} sm:hidden`}
        onClick={() => setSideNav(true)}
      >
        <TiThMenu size={30} />
      </button>

      <div
        className={`${
          sideNav ? "visible" : "hidden"
        } glass-light dark:glass-dark absolute right-0 top-0 h-screen w-3/4 p-2 flex flex-col sm:hidden`}
      >
        <button
          className="w-full flex justify-end items-center p-5"
          onClick={() => setSideNav(false)}
        >
          <AiOutlineClose
            color={theme == "dark" ? "white" : "black"}
            size={20}
          />
        </button>

        <div className="flex flex-col w-full">
          <Link href={"/projects"}>
            <a className="hover:underline w-full decoration-2 underline-offset-4 dark:decoration-white decoration-black">
              Projects
            </a>
          </Link>
          <Link href={"/"}>
            <a className=" mt-5 hover:underline w-full decoration-2 underline-offset-4 decoration-black dark:decoration-white  ">
              Blogs
            </a>
          </Link>
        </div>
        <div className="mt-5 w-full flex justify-center items-center">
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
