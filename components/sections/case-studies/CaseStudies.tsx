import dynamic from "next/dynamic";

const CaseStudiesMotion = dynamic(
  () => import("./CaseStudiesMotion"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function CaseStudies() {
  return <CaseStudiesMotion />;
}