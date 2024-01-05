"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { changeAvatarState } from "@/redux/AvatarChange";

import Avatar from "@/public/data/images/avatar.jpg";
import AvatarVector from "@/public/data/images/avatar_vector.png";

const Navbar = () => {
  const state = useSelector((state) => state.changeAvatar.flag);
  const dispatch = useDispatch();

  const [showNav, setShowNav] = useState(false);
  const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);

  const handleDropdownMenu = () => {
    setShowNav(false);
    setToggleDropdownMenu(!toggleDropdownMenu);
  };

  return (
    <nav className="navbar">
      <div className="flex justify-center items-center gap-2">
        <Image
          onClick={() => dispatch(changeAvatarState())}
          src={state ? Avatar : AvatarVector}
          width={50}
          height={50}
          alt="avatar"
          className="w-[50px] avatar rounded-xl cursor-pointer"
          unoptimized
          priority
        />
        <h1 className="font-semibold text-lg tracking-wide">atharv</h1>
      </div>
      <div className="">
        <div className="sm:hidden flex relative">
          <div
            className="flex"
            onClick={() => setToggleDropdownMenu(!toggleDropdownMenu)}
          >
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="cursor-pointer w-[45px] h-[45px]"
            >
              <div
                className={`w-[30px] h-[1px] transition ease-in duration-150  bg-theme-black ${
                  showNav
                    ? "rotate-45 mb-1  translate-y-[1px]"
                    : "rotate-0 mb-2"
                } `}
              ></div>
              {/* <div
                className={`w-[30px] h-[1px] transition ease-in duration-150 bg-black ${
                  showNav ? "hidden mb-0" : "mb-1"
                } `}
              ></div> */}
              <div
                className={`w-[30px] h-[1px] transition ease-in duration-150 bg-theme-black  ${
                  showNav ? "-rotate-45 mb-0 -translate-y-[3px]" : "rotate-0"
                }`}
              ></div>
            </button>

            {toggleDropdownMenu && (
              <div className="ease-in-out duration-300 dropdown_menu">
                <Link
                  href="/"
                  className="dropdown_link"
                  onClick={handleDropdownMenu}
                >
                  home
                </Link>
                <Link
                  href="/experience"
                  className="dropdown_link"
                  onClick={handleDropdownMenu}
                >
                  experience
                </Link>
                <Link
                  href="/projects"
                  className="dropdown_link"
                  onClick={handleDropdownMenu}
                >
                  projects
                </Link>
                <Link
                  href="/contact"
                  className="dropdown_link"
                  onClick={handleDropdownMenu}
                >
                  contact
                </Link>
              </div>
            )}
          </div>
        </div>
        <ul className="hidden sm:flex gap-5 font-medium ">
          <Link href={"/"} className="navbar_link">
            <li>home</li>
          </Link>
          <Link href={"/experience"} className="navbar_link">
            <li>experience</li>
          </Link>
          <Link href={"/projects"} className="navbar_link">
            <li>projects</li>
          </Link>
          <Link href={"/contact"} className="navbar_link">
            <li>contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
