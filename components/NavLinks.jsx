"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

function NavLinks({ containerStyles }) {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        const charLength = link.name.length;
        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";

        return (
          <li key={index}>
            <Link
              href={link.path}
              className={`
                relative text-white/95 text-lg uppercase block
                ${
                  isActive
                    ? `pointer-events-none after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent/70 after:-translate-y-1/2 after:z-0`
                    : "triple-glitch-effect "
                }
              `}
              data-text={link.name}
            >
              <span
                className={`relative z-10 ${!isActive ? "inline-block" : ""}`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
