"use client";
import { MdOpenInNew } from "react-icons/md";

export function ViewCVButton() {
  return (
    <a
      href="/assets/SofiaKhizhnyakResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-lg btn-tertiary mb-16"
    >
      <div className="flex items-center gap-x-3">
        <span>View CV</span>
        <MdOpenInNew className="text-xl" />
      </div>
    </a>
  );
}
