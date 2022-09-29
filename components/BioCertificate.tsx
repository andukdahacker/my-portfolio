import { BsDot } from "react-icons/bs";

const BioCertificate = () => {
  return (
    <div className="flex flex-col justify-around">
      <div className="text-center">Chứng chỉ, bằng cấp</div>
      <div className="flex items-center">
        <div className="flex items-center justify-center ">
          <BsDot size={30} />
        </div>
        <div>Cert</div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center ">
          <BsDot size={30} />
        </div>
        <div>Cert</div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center ">
          <BsDot size={30} />
        </div>
        <div>Cert</div>
      </div>
    </div>
  );
};

export default BioCertificate;
