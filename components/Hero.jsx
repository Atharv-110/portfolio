"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { SkillSet, SectionBtn } from "./Export";

import { motion } from "framer-motion";

import { Tooltip } from "@nextui-org/react";

import { FaGithub, FaLinkedin, FaTwitter } from "./IconsExport";

const Hero = () => {
  const state = useSelector((state) => state.changeAvatar.flag);

  return (
    <section className="flex flex-col gap-4">
      <Tooltip
        showArrow
        placement="right"
        isDisabled={state}
        content={
          <div>
            <h1 className="font-medium">Magic🔮</h1>
            <p className="text-xs">
              Click on <span className="font-medium">Navbar</span> Image/Avatar
            </p>
          </div>
        }
        classNames={{
          content: ["bg-theme-white py-2 px-4 rounded-lg"],
        }}
      >
        <div className="overflow-hidden w-fit flex items-center gap-3">
          <Image
            src={
              state
                ? "/data/images/avatar.jpg"
                : "/data/images/avatar_vector.png"
            }
            width={150}
            height={150}
            alt="avatar image"
            className="avatar rounded-3xl"
            unoptimized
            priority
          />
          {state ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0.25, 0.5, 0.75, 1],
              }}
            >
              <p className="py-2 px-4 flex items-center justify-start tracking-normal border bg-theme-white text-sm font-medium rounded-lg shadow-md">
                Redux Magic&nbsp;
                <Image
                  src="https://skillicons.dev/icons?i=redux"
                  width={20}
                  height={20}
                  alt="redux logo"
                />
              </p>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </Tooltip>
      <div className="flex flex-wrap items-end text-xl gap-4">
        <h1 className="text-3xl font-bold leading-none">Atharv Vani</h1>
        <div className="flex items-center gap-2">
          <p className="font-medium">[he/him]</p>
          <Link href="https://github.com/Atharv-110" target="_blank">
            <FaGithub className="hero_social_icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/atharv-vani110/"
            target="_blank"
          >
            <FaLinkedin className="hero_social_icon" />
          </Link>
          <Link href="https://twitter.com/atharv_110" target="_blank">
            <FaTwitter className="hero_social_icon" />
          </Link>
        </div>
      </div>
      <p className="lg:w-[90%] text-sm md:text-base">
        Hey there! I am a fresher and aspiring software and frontend developer,
        who relentlessly learns new tech daily. Thrives on connecting with tech
        enthusiasts, tackling real-world problems, and propelling enduring
        success.
      </p>
      <div className="flex items-baseline justify-start gap-2">
        <p className="font-medium">Hire me.</p>
        <SectionBtn link="/resume" text="Resume" />
      </div>
      <SkillSet />
    </section>
  );
};

export default Hero;
