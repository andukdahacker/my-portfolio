interface SkillLevelProps {
  level: "BASIC" | "AVERAGE" | "INTERMIDIATE" | "PRO";
}
const SkillLevel = ({ level }: SkillLevelProps) => {
  const average =
    level == "AVERAGE" || level == "INTERMIDIATE" || level == "PRO";
  const intermediate = level == "INTERMIDIATE" || level == "PRO";
  const pro = level == "PRO";

  return (
    <div className="ml-4 flex justify-center items-center ">
      <div className="w-8 bg-green-400 h-1 mr-1"></div>
      <div
        className={
          average ? "w-8 bg-yellow-400 h-1 mr-1" : "w-8 bg-gray-400 h-1 mr-1"
        }
      ></div>
      <div
        className={
          intermediate
            ? "w-8 bg-orange-400 h-1 mr-1"
            : "w-8 bg-gray-400 h-1 mr-1"
        }
      ></div>
      <div
        className={pro ? "w-8 bg-red-400 h-1 mr-1" : "w-8 bg-gray-400 h-1 mr-1"}
      ></div>
    </div>
  );
};

export default SkillLevel;
