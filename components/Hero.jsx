"use client";
import { useState, useEffect } from "react";
import Avatar from "@/public/data/images/avatar.jpg";
import AvatarVector from "@/public/data/images/avatar_vector.png";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { SkillSet, SectionBtn } from "./Export";

import { motion } from "framer-motion";

import { Tooltip } from "@nextui-org/react";

import { FaGithub, FaLinkedin, FaTwitter } from "./IconsExport";

const Hero = () => {
  const state = useSelector((state) => state.changeAvatar.flag);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, []);

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
              Click on <span className="font-medium">Navbar</span>{" "}
              Image/Avatar
            </p>
          </div>
        }
        classNames={{
          content: ["py-2 px-4 rounded-lg"],
        }}
      >
        <div className="w-fit flex items-center gap-3">
          <Image
            src={state ? Avatar : AvatarVector}
            width={200}
            height={200}
            alt="avatar"
            className="w-[150px] avatar rounded-3xl"
            unoptimized
          />
          {state ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.5, 0.75, 1],
              }}
            >
              <p className="py-2 px-4 flex items-center justify-start tracking-normal border bg-white text-sm font-medium rounded-lg shadow-md">
                Redux&nbsp;
                <Image
                  src="https://skillicons.dev/icons?i=redux&theme=dark"
                  width={20}
                  height={20}
                  alt="redux logo"
                />
                &nbsp;Magic🔮
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odio
        aliquid nesciunt ex quos accusantium sequi ipsum debitis, fugiat libero
        voluptatem sunt earum mollitia impedit consequuntur assumenda aspernatur
        modi ducimus!
      </p>
      <div className="flex items-baseline justify-start gap-2">
        <p className="font-medium">hire me.</p>
        <SectionBtn link="/resume" text="Resume" />
      </div>
      <SkillSet />
    </section>
  );
};

export default Hero;