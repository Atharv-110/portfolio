import { Heading, SubHeading, ExperienceCard } from "./Export";

const ExperienceSection = (props) => {
  const data = props.data;
  return (
    <section className="mb-4">
      <Heading text="Experience" />
      <SubHeading text="Crafted product/software for diverse organizations, merging technology and creativity to enhance user experiences." />
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
