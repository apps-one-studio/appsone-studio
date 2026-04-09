import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/marquee/Marquee";
import Modules from "@/components/sections/modules/Modules";
import HomeClient from "@/components/home/HomeClient";

export const metadata = {
  title: "Appsone Studio | AI-Driven Digital Solutions",
  description:
    "Appsone Studio builds scalable web apps, SaaS platforms, and AI-powered digital systems for modern businesses.",
};

export default function Page() {
  return (
    <>
      {/*Above-the-fold (SSR for SEO + performance)*/}
      <Hero />
      <Marquee />
      <Modules />
      {/*Below-the-fold (client lazy-loaded) */}
      <HomeClient />
    </>
  );
}