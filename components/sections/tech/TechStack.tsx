import dynamic from "next/dynamic";

const TechStackMotion = dynamic(() => import("./TechStackMotion"));

export default function TechStack() {
  return <TechStackMotion />;
}