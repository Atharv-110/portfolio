import Image from "next/image";
import skillsData from "@/public/data/json/skills.json";

import { Tooltip, Button } from "@nextui-org/react";

const SkillSet = () => {
  const data = skillsData.skills;

  return (
    <div className="flex gap-2 flex-wrap lg:w-[90%]">
      {data.map((item) => (
        <div className="cursor-pointer" key={item.id}>
          <Tooltip content={item.name}>
            <Image
              src={item.icon}
              width={40}
              height={40}
              alt="icons"
              className="w-[25px] md:w-[40px]"
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default SkillSet;
