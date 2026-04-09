import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-primary text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Our Services
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
          We design, build, and grow intelligent digital systems that drive results.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group p-6 rounded-2xl border hover:shadow-xl transition bg-white dark:bg-gray-900"
            >
              <h2 className="text-xl font-semibold group-hover:text-[var(--color-accent)] transition">
                {s.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {s.desc}
              </p>

              <div className="mt-4 text-[var(--color-accent)] text-sm font-medium">
                Learn More →
              </div>
            </Link>
          ))}

        </div>
      </section>

    </div>
  );
}