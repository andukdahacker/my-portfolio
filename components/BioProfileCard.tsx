import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillStar } from "react-icons/ai";
import { MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import avatar from "../public/avatar.jpg";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-around">
      <div>
        <div className="w-40 h-40 overflow-hidden rounded-full shadow-md shadow-white/10">
          <Image src={avatar} alt="my-face" />
        </div>

        <div className="mt-5 ">Đỗ An Đức (22, M)</div>

        <div className="flex items-center justify-center">
          <span>
            <AiFillStar />
          </span>
          Web Developer
        </div>

        <div className="flex items-center justify-center">
          <span>
            <MdLocationOn />
          </span>
          Hanoi, Vietnam
        </div>
      </div>

      <div className="flex">
        <Link href={"https://www.facebook.com/duc.doan.1426/"}>
          <a>
            <MdOutlineFacebook size={30} color="blue" />
          </a>
        </Link>
        <Link href={"https://github.com/andukdahacker"}>
          <a>
            <AiFillGithub size={30} color="black" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
