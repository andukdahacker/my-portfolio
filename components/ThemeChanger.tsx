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
  if (currentTheme == "dark") {
    return (
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="w-10 h-10 bg-yellow-200 flex justify-center items-center rounded-md"
      >
        <MdOutlineLightMode size={20} color={"black"} />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="w-10 h-10 bg-purple-600 flex justify-center items-center rounded-md"
      >
        <MdNightlight size={20} color={"white"} />
      </button>
    );
  }
};

export default ThemeChanger;
