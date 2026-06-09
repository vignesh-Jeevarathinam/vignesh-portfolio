import FadeIn from "./FadeIn";

export default function Stats() {
  const stats = [
    {
      value: "5",
      label: "Years Experience",
    },
    {
       value: "95+",
    label: "Core Web Vitals Score",
    },
    {
      value: "4",
      label: "Developers Led",
    },
    {
      value: "50%",
      label: "MySQL Query Optimization",
    },
  ];

  return (
                <FadeIn>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="border rounded-3xl p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-5xl font-bold">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
                </FadeIn>

  );
}