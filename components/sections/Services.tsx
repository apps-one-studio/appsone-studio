import Link from "next/link";
import { Code, Lightbulb, BarChart, Cpu } from "lucide-react";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <Link href="/services/development" className="block">
            <div className="card-hover group">
              <Code className="w-6 h-6 text-emerald-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold">
                SaaS & Web Applications
              </h3>
              <p className="text-gray-600 mt-2">
                Custom platforms, dashboards, and scalable systems.
              </p>
            </div>
          </Link>

          <Link href="/services/ai-systems" className="block">
            <div className="card-hover">
              <Cpu className="w-6 h-6 text-emerald-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold">
                AI Systems & Automation
              </h3>
              <p className="text-gray-600 mt-2">
                Chatbots, AI workflows, and intelligent automation.
              </p>
            </div>
          </Link>

          <Link href="/services/strategy-and-ux" className="block">
            <div className="card-hover">
              <Lightbulb className="w-6 h-6 text-emerald-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold">
                UX Strategy & Design Systems
              </h3>
              <p className="text-gray-600 mt-2">
                Research-driven UX and high-conversion interfaces.
              </p>
            </div>
          </Link>

          <Link href="/services/growth" className="block">
            <div className="card-hover">
              <BarChart className="w-6 h-6 text-emerald-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold">
                Growth & Conversion Optimization
              </h3>
              <p className="text-gray-600 mt-2">
                Analytics, CRO, and revenue-focused optimization.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}