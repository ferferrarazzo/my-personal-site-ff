import { profile, skills } from "../../data/ferProfile";

export default function Skills() {
  return (
    <section className="w-full max-w-3xl py-10">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2 text-sm text-white">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-500 rounded-full px-3 py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
