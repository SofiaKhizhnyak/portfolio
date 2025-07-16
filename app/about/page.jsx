"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Image from "next/image";
import AvatarImage from "@/public/assets/hero.png";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-14 w-full h-[680px]">
          <div className="hidden flex-col xl:flex w-full h-full pt-14 max-w-[430px] relative">
            <Image
              src={AvatarImage}
              alt="Avatar Image"
              width={360}
              height={500}
              quality={100}
              className="z-20 relative pt-24"
            />
            <div className="w-full h-[15px] absolute left-0 top-[484px] right-0 bg-gradient-to-t from-primary via-primary/60 z-30"></div>
            <div className="absolute -left-[90px] top-[170px] z-10">
              <Blob containerStyles="w-[450px] h-[450px]" />
            </div>
            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover hover:scale-110 rounded-full transition-all flex items-center justify-center cursor-pointer"
            />
          </div>

          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Sofia</span> Khizhnyak
              </h2>
              <p className="max-w-[560px] mb-12">
                I craft visually striking, user-friendly web experiences that
                not only look exceptional but also perform flawlessly — ensuring
                every detail is thoughtfully designed and executed.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
