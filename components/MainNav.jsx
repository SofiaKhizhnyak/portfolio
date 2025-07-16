"use client";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";
import { CheckIcon } from "./ui/check";
import CountUp from "react-countup";

function MainNav() {
  const [downloadState, setDownloadState] = useState("idle");

  const handleDownload = (e) => {
    e.preventDefault();
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
    <nav className="w-full py-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <a
          href={
            downloadState === "downloading"
              ? undefined
              : "/assets/SofiaKhizhnyakResume.pdf"
          }
          download={
            downloadState === "downloading"
              ? undefined
              : "Sofia_Khizhnyak_CV.pdf"
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
        >
          <div className="flex items-center gap-x-3">
            {downloadState === "idle" && (
              <>
                <span>Download CV</span>
                <MdFileDownload className="text-xl" />
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
      </div>
    </nav>
  );
}

export default MainNav;
