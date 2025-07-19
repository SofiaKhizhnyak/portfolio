"use client";
import Link from "next/link";
import { MdFileDownload } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";

export function ViewCVButton() {
  return (
    <Link
      href="/assets/SofiaKhizhnyakResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-lg btn-tertiary mb-16"
    >
      <div className="flex items-center gap-x-3">
        <span>View CV</span>
        <HiOutlineExternalLink className="text-2xl opacity-80" />
      </div>
    </Link>
  );
}
