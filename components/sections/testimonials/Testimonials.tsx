import dynamic from "next/dynamic";

const TestimonialsMotion = dynamic(() => import("./TestimonialsMotion"));

export default function Testimonials() {
  return <TestimonialsMotion />;
}