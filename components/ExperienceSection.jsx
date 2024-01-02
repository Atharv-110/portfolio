import { Heading, SubHeading, ExperienceCard } from "./Export";

const ExperienceSection = (props) => {
  const data = props.data;
  return (
    <section className="mb-4">
      <Heading text="My Experiences" />
      <SubHeading text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi unde labore, laboriosam omnis reiciendis sequi." />

      <div className="relative mt-8 md:mt-5 flex flex-col gap-10">
        <div className="absolute border-l-2 border-dashed border-gray-500 left-0 h-full"></div>
        {data.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
