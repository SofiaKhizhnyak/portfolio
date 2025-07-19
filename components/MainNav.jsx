"use client";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { DownloadCVButton } from "./DownloadCVButton";
import { ViewCVButton } from "./ViewCVButton";

function MainNav() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="w-full py-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        {isLargeScreen ? <DownloadCVButton /> : <ViewCVButton />}
      </div>
    </nav>
  );
}

export default MainNav;
