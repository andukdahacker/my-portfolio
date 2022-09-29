import { LearningPointDetail } from "../utils/types";

interface LearningPointDetailsProps {
  data: LearningPointDetail;
}

const LearningPointDetails = ({ data }: LearningPointDetailsProps) => {
  return (
    <div>
      <div className="text-lg">{data.point}</div>
      <div>{data.detail}</div>
    </div>
  );
};

export default LearningPointDetails;
