"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { changeAvatarState } from "@/redux/AvatarChange";
import { usePathname, useRouter } from "next/navigation";
import { ENUM } from "@/enum/enum";

const NavData = [
  { route: ENUM.HOME, name: "Home" },
  { route: ENUM.EXPERIENCE, name: "Experiences" },
  { route: ENUM.PROJECTS, name: "Projects" },
  { route: ENUM.CONTACT, name: "Contact" },
];

const Navbar = () => {
  const state = useSelector((state) => state.changeAvatar.flag);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(false);
  const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);

  const handleDropdownMenu = () => {
    setShowNav(false);
    setToggleDropdownMenu(!toggleDropdownMenu);
  };

  const handleHomePageNavigation = () => {
    if (pathname !== ENUM.HOME) {
      router.push(ENUM.HOME);
    }
  };

  return (
    <nav className="navbar">
      <div
        className="flex justify-center items-center gap-2"
        onClick={handleHomePageNavigation}
      >
        <Image
          onClick={() => dispatch(changeAvatarState())}
          src={"/data/images/avatar.jpg"}
          width={50}
          height={50}
          alt="avatar"
          className={state ? "avatar rounded-xl cursor-pointer" : "hidden"}
          unoptimized
          priority
        />
        <Image
          onClick={() => dispatch(changeAvatarState())}
          src={"/data/images/avatar_vector.png"}
          width={50}
          height={50}
          alt="avatar"
          className={state ? "hidden" : "avatar rounded-xl cursor-pointer"}
          unoptimized
          priority
        />
        <h1 className="font-semibold text-lg tracking-wide cursor-pointer">
          Atharv
        </h1>
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
              <div
                className={`w-[30px] h-[1px] transition ease-in duration-150 bg-theme-black  ${
                  showNav ? "-rotate-45 mb-0 -translate-y-[3px]" : "rotate-0"
                }`}
              ></div>
            </button>

            {toggleDropdownMenu && (
              <div className="ease-in-out duration-300 dropdown_menu">
                {NavData?.map((item) => (
                  <Link
                    key={item.route}
                    href={item.route}
                    className="dropdown_link"
                    onClick={handleDropdownMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <ul className="hidden sm:flex gap-5 font-medium ">
          {NavData?.map((item) => (
            <Link key={item.route} href={item.route} className="navbar_link">
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
