import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/resumeData";

export default function Projects() {
  return (
    <AnimatedSection>
      <SectionHeader title="Projects" subtitle="Selected work and outcomes" />
      <div className="grid gap-5 md:grid-cols-2">
        {profile.projects.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
    </AnimatedSection>
  );
}
