"use client";
import { Heading, SectionBtn } from "./Export";
import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const ResumeSection = (props) => {
  const data = props.data;
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <Heading text="Resume" />
        <SectionBtn
          link="/data/resume/resume_dec23.pdf"
          text="download"
          target="_blank"
          download="atharv_vani_resume.pdf"
        />
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt="resume image"
              className="w-full mx-auto"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ResumeSection;
