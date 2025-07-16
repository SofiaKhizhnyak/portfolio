import Link from "next/link";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function Info() {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-x-6">
          <div className="relative">
            <HiOutlineUser className="absolute text-[42px] mt-1 text-secondary/30" />
            <HiOutlineUser className="relative text-[26px] mt-1 text-tertiary-hover transform translate-x-2 translate-y-2" />
          </div>
          <div>
            <p className="text-lg text-white/50">Position</p>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-x-6">
          <div className="relative">
            <HiOutlineMail className="absolute text-[42px] mt-1 text-secondary/30" />
            <HiOutlineMail className="relative text-[26px] mt-1 text-tertiary-hover transform translate-x-2 translate-y-2" />
          </div>
          <div>
            <p className="text-lg text-white/50">Email</p>
            <p>sofiehij@hotmail.co.il</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          rel="noopener noreferrer"
          href="ttps://wa.me/+972546400965"
          target="_blank"
          className="w-[280px] flex items-start  gap-x-6"
        >
          <div className="relative">
            <HiOutlinePhone className="absolute text-[42px] mt-1 text-secondary/30" />
            <HiOutlinePhone className="relative text-[26px] mt-1 text-tertiary-hover transform translate-x-2 translate-y-2" />
          </div>
          <div>
            <p className="text-lg text-white/50">Phone</p>
            <p>+972 546400965</p>
          </div>
        </Link>
        <div className="w-[280px] flex items-start  gap-x-6">
          <div className="relative">
            <HiOutlineLocationMarker className="absolute text-[42px] mt-1 text-secondary/30" />
            <HiOutlineLocationMarker className="relative text-[26px] mt-1 text-tertiary-hover transform translate-x-2 translate-y-2" />
          </div>
          <div>
            <p className="text-lg text-white/50">Location</p>
            <p>Tel Aviv, Israel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
