import { about } from "../../data/ferProfile"; 

export default function About() {
  return (
    <section className="w-full max-w-3xl py-10">
      <h2 className="text-2xl font-semibold mb-4">About me</h2>
      <p className="text-gray-700">{about}</p>
    </section>
  );
}
