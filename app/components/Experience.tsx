import { experience } from "../../data/ferProfile"; 

export default function Experience() {
  return (
    <section className="w-full max-w-3xl py-10">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-4">
        {experience.map((item, index) => (
          <li key={index}>
            <h3 className="font-bold">
              {item.company} - {item.role}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.from} - {item.to}
            </p>
            <div>
                {item.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
