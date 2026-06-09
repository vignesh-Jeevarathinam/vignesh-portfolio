import { experiences } from "@/data/experience";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <FadeIn>
    <section
      id="experience"
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
              absolute
              left-3
              top-0
              h-full
              w-[2px]
              bg-blue-500
            "
          />

          <div className="space-y-12">

            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="relative pl-16"
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-6
                    h-6
                    rounded-full
                    bg-blue-500
                    border-4
                    border-background
                  "
                />

                {/* Experience Card */}
                <div
                  className="
                    backdrop-blur-md
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-500
                  "
                >
                  <h3 className="text-2xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="text-blue-500 mt-2 font-medium">
                    {exp.role}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {exp.period}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-gray-500"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
                </FadeIn>

  );
}