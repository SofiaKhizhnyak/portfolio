"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const testimonial = [
  {
    message:
      "Sofia is an exceptional developer who transformed our idea into a user-friendly masterpiece.",
    name: "Lady-Style Clinic",
  },
  {
    message:
      "Sofia's attention to detail and creativity made my website stand out in a crowded market.",
    name: "Rivka K.",
  },
  {
    message:
      "Working with Sofia was a pleasure. Her expertise and dedication exceeded our expectations.",
    name: "Arie B.",
  },
  {
    message:
      "Sofia's ability to understand our needs and deliver on time was impressive. Highly recommend!",
    name: "Anna V.",
  },
];

function Testimonial() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      className="w-full max-w-[330px] sm:max-w-[520px] bg-secondary/80 rounded-lg !mx-4"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex gap-8 px-8 py-4">
              <ImQuotesLeft className="flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p className="text-balance">{person.message}</p>
                <p className="self-end text-primary/95 font-medium tracking-wide">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Testimonial;
