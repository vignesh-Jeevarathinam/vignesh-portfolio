import { skills } from "@/data/skills";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
                <FadeIn>

    <section
      id="skills"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        {Object.entries(skills).map(
          ([category, items]) => (
            <div
              key={category}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 border rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
                </FadeIn>

  );
}