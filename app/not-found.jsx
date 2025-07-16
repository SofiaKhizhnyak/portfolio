import NotFoundSvg from "@/components/NotFoundSvg";
import SearchingIcon from "@/components/SearchingIcon";
import Link from "next/link";
import { TbArrowBack, TbReload } from "react-icons/tb";

function NotFound() {
  return (
    <div className="text-white/90 h-screen w-screen overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-start mx-auto gap-3 lg:gap-10">
      <NotFoundSvg />
      <div>
        <div className="flex gap-1 items-center">
          <h4 className="h4">Oh no.. </h4>
          <SearchingIcon />
        </div>
        <p className="lg:tracking-wider tracking-[0.02em]">
          That page doesn't exist.
        </p>
        <Link
          href="/"
          className="justify-self-center btn btn-white btn-sm flex items-center justify-center gap-3 mt-10 sm:mt-6 group transition-all duration-100"
        >
          <span className="text-lg">Go Home</span>
          <TbArrowBack className="text-2xl group-hover:text-[28px]" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
