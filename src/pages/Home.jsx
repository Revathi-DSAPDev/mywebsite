import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { profile } from "../data/resumeData";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <SectionHeader title={profile.name} subtitle={profile.title} />
        <p className="max-w-3xl text-slate-300">{profile.summary}</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <a
          href={`mailto:${profile.contact.email}`}
          className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium hover:opacity-90"
        >
          Get in touch
        </a>
      </AnimatedSection>
    </>
  );
}
