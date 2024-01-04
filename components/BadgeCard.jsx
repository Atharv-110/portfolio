// import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Image from "next/image";

const BadgeCard = (props) => {
  const { title, image, rounded } = props.item;
  return (
    <div className="flex items-center justify-center">
      <Image
        src={image}
        width={160}
        height={160}
        alt="badge image"
        className={rounded ? "rounded-xl achievement-img" : "achievement-img"}
      />
    </div>
  );
};

export default BadgeCard;
