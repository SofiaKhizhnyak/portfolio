"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    icon: "/assets/services/web.svg",
    href: "",
    title: "Webs Development",
  },
  {
    icon: "/assets/services/mobile.svg",
    href: "",
    title: "Mobile Development",
  },
  {
    icon: "/assets/services/design1.svg",
    href: "",
    title: "Mobile & Web Interface Design",
  },

  {
    icon: "/assets/services/bot.svg",
    href: "",
    title: "Search Engine Optimization",
  },
];

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left xl:mb-0 text-balance">
            Turning your idea into a
            <span className="text-accent xl:text-[42px] md:text-[40px] text-[38px]  text-shadow-white/15 text-shadow-2xs md:tracking-[0.02em] font-semibold">
              {" "}
              pixel-perfect{" "}
            </span>
            app
          </h2>
          <Link href="/contact" className="btn btn-lg btn-accent hover:text-xl">
            connect()
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="h-[320px]"
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-12">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={75}
                      height={75}
                    />
                    <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center cursor-pointer text-2xl hover:text-3xl hover:text-secondary hover:rotate-45 transition-all">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h5 className="text-[22px] font-medium max-w-[240px]">
                    {service.title}
                  </h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default Services;
