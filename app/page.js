import { Hero, Divider, ProjectSection, ConnectSection, ExperienceSection } from "@/components/Export";
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
      <Divider />
      <ProjectSection data={projects} />
      <Divider />
      <ConnectSection />
      <Divider />

    </main>
  );
}
