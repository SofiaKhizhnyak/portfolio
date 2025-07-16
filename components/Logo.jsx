import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="text-[33px] font-normal">
      Sofia
      <span className="text-accent text-6xl inline-block -translate-x-1.5">
        .
      </span>
    </Link>
  );
}

export default Logo;
