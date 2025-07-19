"use client";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

import { DownloadCVButton } from "./DownloadCVButton";

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
        <DownloadCVButton />
      </div>
    </nav>
  );
}

export default MainNav;
