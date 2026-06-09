import FadeIn from "./FadeIn";

export default function About() {
  return (
            <FadeIn>
    
    <section
      id="about"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-lg leading-8 text-gray-500">
          Full Stack Developer with nearly 5 years
          of experience building scalable web and
          mobile applications across fintech and
          aerospace domains.

          Specialized in React.js, Next.js,
          Node.js, TypeScript and AWS with strong
          expertise in performance optimization,
          REST APIs and technical leadership.
        </p>

      </div>
    </section>
                </FadeIn>

  );
}