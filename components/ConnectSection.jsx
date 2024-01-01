import { Heading, SubHeading, SocialCard } from "./Export";
import socialData from "@/public/data/json/socials.json";
const ConnectSection = () => {
  const data = socialData.social;
  return (
    <section>
      <Heading text="Let's Connect" />
      <SubHeading text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, animi." />
      <div className="flex flex-col gap-y-4 md:grid grid-rows-2 grid-cols-2 md:gap-x-6 md:gap-y-4">
        {data.map((item) => (
          <SocialCard
            key={item.id}
            name={item.name}
            link={item.link}
            username={item.username}
            bgcolor={item.bgcolor}
          />
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;
