import { Heading, ProjectCard, SubHeading } from "./Export";

const ProjectSection = (props) => {
  const data = props.data;

  return (
    <section>
      <Heading text="My Projects" />
      <SubHeading text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium excepturi saepe aliquam facere libero!"/>
      
      {data.map((item) => (
        // console.log(item.name);
        <ProjectCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProjectSection;
