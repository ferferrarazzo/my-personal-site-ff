import { profile } from "../../data/ferProfile";

export default function Contact() {
    return (
        <section className="w-full max-w-3xl py-10">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-700">
                Contact me{" "}
                <a href={`mailto:${profile.email}`} className="text-blue-600 underline">
                    {profile.email}
                </a>
            </p>
        </section>
    );
}