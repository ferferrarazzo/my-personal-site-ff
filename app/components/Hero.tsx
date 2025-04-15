import Link from "next/link";
import { profile } from "../../data/ferProfile";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl text-center py-16">
          <img
            src={profile.avatarUrl}
            alt={`Photo ${profile.name}`}
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
        />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
        {profile.name}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
        {profile.role}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
        <Link href={profile.github} className="text-blue-600 hover:underline">
          GitHub
        </Link>
        <Link href={profile.linkedin} className="text-blue-600 hover:underline">
          LinkedIn
        </Link>
        <Link href={profile.cvUrl} className="text-blue-600 hover:underline">
          CV
        </Link>
      </div>
    </section>
  );
}