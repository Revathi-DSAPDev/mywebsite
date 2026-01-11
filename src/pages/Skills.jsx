import resumeData from "../data/resumeData";

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h2 className="font-semibold capitalize">{category}</h2>
          <p className="text-gray-700">{items.join(", ")}</p>
        </div>
      ))}
    </section>
  );
}
