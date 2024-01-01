"use client";
import Avatar from "@/public/data/images/avatar.jpg";
import AvatarVector from "@/public/data/images/avatar_vector.png";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { SkillSet } from "./Export";

import { FaGithub, FaLinkedin, FaTwitter } from "./IconsExport";

import { IconContext } from "react-icons";

const Hero = () => {
  const state = useSelector((state) => state.changeAvatar.flag);
  return (
    <section className="flex flex-col gap-4">
      <Image
        src={state ? Avatar : AvatarVector}
        width={200}
        height={200}
        alt="avatar"
        className="w-[140px] avatar rounded-3xl"
        unoptimized
      />
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
      <SkillSet />
    </section>
  );
};

export default Hero;
