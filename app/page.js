import { Hero, Divider, ProjectSection, ConnectSection, ExperienceSection, SectionBtn } from "@/components/Export";
import projectData from "@/public/data/json/projects";
import experienceData from "@/public/data/json/experiences";

export default function Home() {
  const projects = projectData.projects.filter(project => project.favorite);
  const experiences = experienceData.experiences.filter(experience => experience.favorite);
  return (
    <main className="container">
      <Hero />
      <Divider />
      <ExperienceSection data={experiences} />
      <SectionBtn text="show more experiences" link="/experience"/>
      <Divider />
      <ProjectSection data={projects} />
      <SectionBtn text="show more projects" link="/projects"/>
      <Divider />
      <ConnectSection />
      <Divider />

    </main>
  );
}
