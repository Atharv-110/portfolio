import {
  Hero,
  Divider,
  ProjectSection,
  ConnectSection,
  ExperienceSection,
  SectionBtn,
  BadgeSection,
} from "@/components/Export";
import projectData from "@/public/data/json/projects";
import experienceData from "@/public/data/json/experiences";
import achievementData from "@/public/data/json/achievements";

export default function Home() {
  const projects = projectData.projects.filter((project) => project.favorite);
  const experiences = experienceData.experiences.filter(
    (experience) => experience.favorite
  );
  const achievements = achievementData.achievement;
  return (
    <main className="container">
      <Hero />
      <Divider />
      <ExperienceSection data={experiences} />
      <SectionBtn text="show more experiences" link="/experience" />
      <Divider />
      <ProjectSection data={projects} />
      <SectionBtn text="show more projects" link="/projects" />
      <Divider />
      <BadgeSection data={achievements} />
      <Divider />
      <ConnectSection />
      <Divider />
    </main>
  );
}
