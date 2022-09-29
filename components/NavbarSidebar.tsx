import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ThemeChanger from "./ThemeChanger";

interface NavbarSidebarProps {
  sideNav: boolean;
  setSideNav: (value: SetStateAction<boolean>) => void;
}

const NavbarSidebar = ({ setSideNav, sideNav }: NavbarSidebarProps) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      {sideNav ? (
        <>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={
              " glass-light dark:glass-dark absolute right-0 top-0 h-screen w-3/4 p-2 flex flex-col sm:hidden"
            }
          >
            <button
              className="flex items-center justify-end w-full p-5"
              onClick={() => setSideNav(false)}
            >
              <AiOutlineClose color={"black dark:white"} size={20} />
            </button>

            <div className="flex flex-col w-full ">
              <Link href={"/projects"}>
                <a
                  className={` ${
                    router.asPath == "/projects"
                      ? "underline"
                      : "hover:underline"
                  }  text-center w-full decoration-2 underline-offset-4 dark:decoration-white decoration-black`}
                >
                  Projects
                </a>
              </Link>
              <Link href={"/blogs"}>
                <a
                  className={` ${
                    router.asPath == "/blogs" ? "underline" : "hover:underline"
                  } text-center mt-5  decoration-2 underline-offset-4 decoration-black dark:decoration-white `}
                >
                  Blogs
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
              <ThemeChanger />
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default NavbarSidebar;
