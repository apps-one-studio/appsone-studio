import dynamic from "next/dynamic";

const ProcessMotion = dynamic(() => import("./ProcessMotion"));

export default function Process() {
  return <ProcessMotion />;
}