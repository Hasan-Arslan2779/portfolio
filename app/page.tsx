import Footer from "@/components/Footer";
import { getGitHubProjects } from "@/lib/github";

export type Project = {
  name: string;
  description: string;
  language: string;
  html_url: string;
};

export default async function Home() {
  const projects: Project[] = await getGitHubProjects("Hasan-Arslan2779");

  return (
    <main className="flex flex-col items-center px-4 py-12 space-y-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          Merhaba, ben <span className="text-blue-600">Hasan Arslan</span> 👋
        </h1>
        <p className="text-xl text-gray-100">
          Full-stack geliştirici olarak modern web uygulamaları geliştiriyorum.
        </p>
      </section>
      {/* About Section */}
      <section id="about" className="max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-blue-600 pb-2 text-gray-100 dark:text-white">
          Hakkımda
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed dark:text-gray-200">
          Ben Hasan Arslan, full-stack yazılım geliştiricisiyim. Frontend ve
          backend alanlarında React, Next.js, Tailwind CSS, Node.js, MongoDB
          gibi teknolojilerle projeler geliştiriyorum. Performans,
          ölçeklenebilirlik ve kullanıcı deneyimi odaklı çözümler üretmeyi
          seviyorum.
        </p>
      </section>
      {/* Projects Section */}
      <section id="projects" className="max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-blue-600 pb-2 text-gray-100 dark:text-white">
          Projeler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 10).map((project: Project) => (
            <div
              key={project.name}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-400 hover:to-teal-400"
            >
              <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-gray-100">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {project.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                <strong>Kullanılan Teknoloji:</strong> {project.language}
              </p>
              <a
                href={project.html_url}
                target="_blank"
                className="text-white bg-blue-600 hover:bg-teal-500 py-2 px-4 rounded-full inline-block transform transition-all hover:scale-105"
              >
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-blue-600 pb-2 text-gray-100 dark:text-white">
          İletişim
        </h2>
        <p className="text-lg text-gray-300 mb-4 dark:text-gray-200">
          Benimle iletişime geçmek için:
        </p>
        <ul className="space-y-2 text-lg text-blue-600 dark:text-blue-400">
          <li>
            <a
              href="mailto:hasanar2779@gmail.com"
              className="hover:text-blue-800 dark:hover:text-blue-200"
            >
              hasanar2779@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Hasan-Arslan2779"
              target="_blank"
              className="hover:text-blue-800 dark:hover:text-blue-200"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hasan-arslannn"
              target="_blank"
              className="hover:text-blue-800 dark:hover:text-blue-200"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
      <Footer /> {/* Footer'ı burada ekliyoruz */}
    </main>
  );
}
