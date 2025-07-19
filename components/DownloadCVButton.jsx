"use client";
import { useState } from "react";
import { MdFileDownload } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { HiOutlineDownload } from "react-icons/hi";

import { CheckIcon } from "./ui/check";
import CountUp from "react-countup";

export function DownloadCVButton() {
  const [downloadState, setDownloadState] = useState("idle");

  const handleDownload = (e) => {
    setDownloadState("downloading");

    const fileUrl = "/assets/SofiaKhizhnyakResume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Sofia_Khizhnyak_CV.pdf");

    link.addEventListener("click", () => {
      setTimeout(() => {
        setDownloadState("success");

        setTimeout(() => {
          setDownloadState("idle");
        }, 5000);
      }, 1000);
    });

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      href={
        downloadState === "downloading"
          ? undefined
          : "/assets/SofiaKhizhnyakResume.pdf"
      }
      download={
        downloadState === "downloading" ? undefined : "Sofia_Khizhnyak_CV.pdf"
      }
      className={`btn btn-lg btn-tertiary mb-16 ${
        downloadState === "downloading"
          ? "opacity-70 pointer-events-none"
          : downloadState === "success"
          ? "!bg-accent-hover/90 pointer-events-none"
          : "opacity-100"
      }`}
      onClick={handleDownload}
      aria-disabled={downloadState === "downloading"}
      target="_blank"
    >
      <div className="flex items-center gap-x-3">
        {downloadState === "idle" && (
          <>
            <span>Download CV</span>
            <HiOutlineDownload className="text-2xl opacity-90" />
          </>
        )}
        {downloadState === "downloading" && (
          <CountUp
            start={0}
            end={100}
            duration={3}
            suffix="%"
            className="block w-full text-secondary"
          />
        )}
        {downloadState === "success" && (
          <CheckIcon className="text-secondary" size={30} />
        )}
      </div>
    </a>
  );
}
