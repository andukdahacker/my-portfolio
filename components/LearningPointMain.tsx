import { LearningPointContent } from "../utils/types";
import LearningPointDetails from "./LearningPointDetails";

interface LearningPointDomainProps {
  data: LearningPointContent;
}

const LearningPointMain = ({ data }: LearningPointDomainProps) => {
  for (const [key, value] of Object.entries(data)) {
    return (
      <div className="dashed-box">
        <div className="text-center my-2 font-semibold text-xl">{key}</div>
        <div>
          {value.map((learningPoint, index) => {
            return <LearningPointDetails data={learningPoint} key={index} />;
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default LearningPointMain;
