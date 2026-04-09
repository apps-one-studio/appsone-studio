"use client";

import dynamic from "next/dynamic";

// Lazy-loaded sections (below-the-fold)
const VisualOverview = dynamic(
  () => import("../sections/VisualOverview"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading visual overview...
      </div>
    ),
  }
);

const Process = dynamic(
  () => import("../sections/process/Process"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading process...
      </div>
    ),
  }
);

const Services = dynamic(
  () => import("../sections/Services"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading services...
      </div>
    ),
  }
);

const CaseStudies = dynamic(
  () => import("../sections/case-studies/CaseStudies"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading case studies...
      </div>
    ),
  }
);

const Testimonials = dynamic(
  () => import("../sections/testimonials/Testimonials"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading testimonials...
      </div>
    ),
  }
);

const TechStack = dynamic(
  () => import("../sections/tech/TechStack"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading tech stack...
      </div>
    ),
  }
);

const Metrics = dynamic(
  () => import("../sections/Metrics"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading metrics...
      </div>
    ),
  }
);

const CTA = dynamic(
  () => import("../sections/cta/CTA"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading CTA...
      </div>
    ),
  }
);

const ContactForm = dynamic(
  () => import("../sections/ContactForm"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-gray-400">
        Loading contact form...
      </div>
    ),
  }
);

export default function HomeClient() {
  return (
    <>
      <VisualOverview />
      <Process />
      <Services />
      <CaseStudies />
      <Testimonials />
      <TechStack />
      <Metrics />
      <CTA />
      <ContactForm />
    </>
  );
}