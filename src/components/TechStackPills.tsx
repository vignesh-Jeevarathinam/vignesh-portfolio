export default function TechStackPills() {
  const techs = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
    "React Native",
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {techs.map((tech) => (
        <span
          key={tech}
          className="
            px-4
            py-2
            rounded-full
            border
            backdrop-blur
            text-sm
            hover:scale-105
            transition
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}