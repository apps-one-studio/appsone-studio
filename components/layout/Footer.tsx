import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 text-white">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />

      {/* Glow Accent */}
      <div className="absolute inset-0 bg-glow" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Appsone Studio
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            AI-powered digital systems for modern businesses.
            We design, build, and scale intelligent products.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/services/development" className="hover:text-white">
                Product Development
              </Link>
            </li>
            <li>
              <Link href="/services/strategy-and-ux" className="hover:text-white">
                UX & Strategy
              </Link>
            </li>
            <li>
              <Link href="/services/growth" className="hover:text-white">
                Growth & Analytics
              </Link>
            </li>
            <li>
              <Link href="/services/ai-systems" className="hover:text-white">
                AI Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-4">Start a Project</h3>
          <p className="text-sm text-gray-200 mb-4">
            Let’s build something powerful together.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 text-center text-sm text-gray-300 py-6">
        © {new Date().getFullYear()} Appsone Studio. All rights reserved.
      </div>
    </footer>
  );
}