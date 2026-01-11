import resumeData from "../data/resumeData";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 leading-relaxed">
        {resumeData.summary}
      </p>
    </section>
  );
}
