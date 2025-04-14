import siteConfig from "@/config/siteConfig";

export default function Home() {
  const { name, title, bio, location, avatarUrl, cvUrl, links } = siteConfig;

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-xl">
        <img
          src={avatarUrl}
          alt={`Foto de ${name}`}
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
        />
        <h1 className="text-4xl text-gray-700 font-bold mb-2">{name}</h1>
        <p className="text-lg text-gray-700 mb-2">{title}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <p className="text-sm text-gray-500 mb-6">📍 {location}</p>
        <div className="flex justify-center gap-4">
          <a
            href={links.github}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={cvUrl}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </div>
    </main>
  );
}
