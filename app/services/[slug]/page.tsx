import { services } from "@/lib/data/services";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return <ServicePage service={service} />;
}
