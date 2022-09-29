import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdNightlight, MdOutlineLightMode } from "react-icons/md";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme == "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted == false) return null;

  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <motion.button
        key={currentTheme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        type="button"
        onClick={() => setTheme(currentTheme == "dark" ? "light" : "dark")}
        className={
          currentTheme == "dark"
            ? "flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-md"
            : "flex items-center justify-center w-10 h-10 bg-purple-600 rounded-md"
        }
      >
        {currentTheme == "dark" ? (
          <MdOutlineLightMode size={20} color={"black"} />
        ) : (
          <MdNightlight size={20} color={"white"} />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default ThemeChanger;
