import resumeData from "../data/resumeData";

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>

      {resumeData.experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold">
            {exp.role} – {exp.company}
          </h2>
          <p className="text-sm text-gray-500">
            {exp.location} | {exp.period}
          </p>
          <ul className="list-disc ml-6 mt-2">
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
