"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/assets/work/newsblogs.png",
    title: "News & Blogs",
    description:
      "React.js Web App, created & designed to provide a seamless experience for consuming and creating content.",
    keyFeatures:
      "Real-time News: Fetches top headlines using GNEWS API Personalized | Bookmarks: Save & revisit favorite articles | User Blogs: Create, edit, and manage blog posts | Secure Authentication: Powered by Firebase Auth | Cloud Database: Stores user-generated content and user-related data in Firestore.",
    link: "https://newsplusblogs.netlify.app/",
    github: "https://github.com/SofiaKhizhnyak/news-blogs.git",
    tech: ["React.js", "GNews API", "Firebase Auth", "Firestore", "CSS3"],
    category: "ContentFull",
  },
  {
    id: 2,
    image: "/assets/work/rivkak.png",
    title: "Rivka K. Landing Page",
    description:
      "Landing page for Rivka Kalay, a professional cosmetician, serves as an elegant and informative platform to showcase her wide range of beauty treatments, including facials, laser hair removal, pigmentation treatments, and more.",
    keyFeatures:
      " Built with a responsive design, the site ensures an intuitive and seamless experience for users on any device. It highlights her expertise and services through clean visuals and easy navigation, providing potential clients with all the information they need to book treatments or learn more about her offerings. Deployed on Vercel, the website is fast, reliable, and designed to reflect the sophistication and quality of Rivka Kalay’s work.",
    link: "https://www.rivkakalay.site/",
    github: "https://github.com/SofiaKhizhnyak/RivkaKalay.git",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Framer Motion",
      "Tailwind CSS",
    ],
    category: "ProFiles",
  },
  {
    id: 3,
    image: "/assets/work/airbus.png",
    title: "Airbus Quiz",
    description:
      "A Next.js app designed to help aircraft maintenance engineering students prepare for Airbus type exams through interactive quizzes and practical tips.",
    keyFeatures:
      "This comprehensive learning tool features multiple-choice questions covering various aspects of Airbus systems, allowing users to test their knowledge and track their progress. Key features include real-time scoring, user authentication, and a responsive design optimized for both desktop and mobile devices.",
    link: "https://airbusquiz-app.vercel.app/",
    github: "https://github.com/SofiaKhizhnyak/airbusquiz-app.git",
    tech: [
      "Next.js",
      "React",
      "Firebase Auth",
      "Firestore",
      "Responsive Design",
      "EmailJS",
      "Tailwind CSS",
    ],
    category: "EdTech",
  },
  {
    id: 4,
    image: "/assets/work/caloryze.png",
    title: "Caloryze",
    description:
      "Ionic + React calorie tracking app that helps users maintain nutritional goals through smart food logging, real-time calorie data, and visual food feedback.",
    keyFeatures:
      "Daily Food Logging: Track meals by day with personalized calorie goals | Nutritionix Integration: Real-time food data via the Nutritionix API | Visual Food Search: Enhanced with food images using Pixabay API | Firestore Sync: Stores each user's logs securely in Firebase Firestore | Authentication: Firebase Auth for user login & registration | Mobile-Friendly: Optimized for mobile-first experience.",
    link: "https://caloryze.vercel.app/",
    github: "https://github.com/SofiaKhizhnyak/caloryze.git",
    tech: [
      "Ionic",
      "React",
      "Nutritionix API",
      "Pixabay API",
      "Firebase Auth",
      "Firestore",
    ],
    category: "TrackMates",
  },
  {
    id: 5,
    image: "/assets/work/hashmal.png",
    title: "The Hashmal Quiz",
    description:
      "Quiz application, built with React js. The aim of this application is to boost students chances of excelling in their exams in electrical engineering studies.",
    keyFeatures:
      " The quiz covers all the chapters in the book 'יסודות תורת החשמל' (Fundamentals of Electrical Engineering).",
    link: "https://the-hashmal-quiz.netlify.app/",
    github: "https://github.com/SofiaKhizhnyak/hashmalQuiz.git",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    category: "EdTech",
  },
];

const categories = ["EdTech", "ProFiles", "TrackMates", "ContentFull"];

function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Recent <span className="text-accent">Projects</span>
        </h2>
        <Tabs
          defaultValue="EdTech"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent data-[state=active]:text-primary/95 data-[state=active]:text-shadow-2xs data-[state=active]:text-base h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full mb-8">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                <h3 className="h3"> {project.title}</h3>
                                <div className="xl:mb-4 max-w-[380px] min-h-[130px]">
                                  <p className="mb-4 text-white/70">
                                    Technologies Used
                                  </p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                <div className="ml-2 flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link} target="_blank">
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github} target="_blank">
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project image */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={`${project.title} screenshot`}
                                  fill
                                  className="object-cover object-top-left"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}

export default Work;
