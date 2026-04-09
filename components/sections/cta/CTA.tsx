import dynamic from "next/dynamic";

const CTAMotion = dynamic(() => import("./CTAMotion"));

export default function CTA() {
  return <CTAMotion />;
}