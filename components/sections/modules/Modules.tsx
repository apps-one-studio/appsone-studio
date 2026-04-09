import dynamic from "next/dynamic";

const ModulesMotion = dynamic(
  () => import("./ModulesMotion"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Modules() {
  return <ModulesMotion />;
}