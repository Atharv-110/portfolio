// import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Image from "next/image";

const BadgeCard = (props) => {
  const { image, rounded } = props.item;
  return (
    <div className="flex items-center justify-center">
      <Image
        src={image}
        width={170}
        height={170}
        alt="badge image"
        priority
        className={rounded ? "rounded-xl achievement-img" : "achievement-img"}
      />
    </div>
  );
};

export default BadgeCard;
