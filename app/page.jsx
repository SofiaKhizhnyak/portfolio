"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Blob from "@/components/Blob";
import Image from "next/image";
import AvatarImage from "@/public/assets/hero.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Link from "next/link";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div
          className="w-full xl:w-[550px] flex flex-col items-center xl:items-start
         text-center xl:text-left"
        >
          <h1 className="h1 flex-1 md:mb-[28px] min-h-28">
            Hi! I'm Sofia,
            <br />
            <TypeAnimation
              sequence={["Frontend Developer", 2000, "", 600]}
              wrapper="span"
              speed={40}
              className="text-accent custom-type-animation"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px]  mb-[44px]">
            I build visually captivating, user-friendly web and mobile apps that
            transform your ideas into seamless, engaging digital experiences.
          </p>
          <Link
            href="/contact"
            className="btn btn-lg btn-accent mb-16 hover:text-xl"
          >
            <div>
              <span>connect()</span>
            </div>
          </Link>
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            <Link
              className="flex items-center gap-3 text-lg"
              href="https://wa.me/+972546400965"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-tertiary-hover">
                <HiOutlinePhone className="text-2xl" />
              </span>
              <span>+972 546400965</span>
            </Link>

            <div className="flex items-center gap-3 text-lg">
              <span className="text-tertiary-hover">
                <HiOutlineMail className="text-2xl" />
              </span>
              <span>sofiehij@hotmail.co.il</span>
            </div>
          </div>
          <Socials
            containerStyles="flex 2xl:flex 2xl:flex-col gap-6 xl:hidden 2xl:absolute 2xl:top-1/2
            2xl:right-2 2xl:transform 2xl:-translate-y-1/2 2xl:-translate-x-1/2"
            iconStyles="bg-accent text-white hover:text-primary hover:bg-accent-hover transition w-[45px] h-[45px] text-[22px] sm:hover:text-[28px] flex items-center justify-center rounded-full cuersor-pointer transition-all duration-300"
          />
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
          <Blob containerStyles="w-[510px] h-[500px]" />
          <Image
            src={AvatarImage}
            alt="Avatar Image"
            width={450}
            height={600}
            quality={100}
            className="absolute -top-12 left-[100px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(13, 9, 26, 1) 0%, rgba(13, 9, 26, 1) 70%, rgba(13, 9, 26,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(13, 9, 26, 1) 0%, rgba(13, 9, 26, 1) 80%, rgba(13, 9, 26,0) 100%)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
