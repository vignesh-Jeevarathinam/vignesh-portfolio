import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
                <FadeIn>

    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group
    relative
    overflow-hidden
    backdrop-blur-md
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8
    hover:-translate-y-4
    hover:shadow-2xl
    transition-all
    duration-500"
            >
              <div className="h-48 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6" />

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-500">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
                </FadeIn>

  );
}