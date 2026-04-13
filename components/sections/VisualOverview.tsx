import Image from "next/image";

export default function VisualOverview() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold mb-6">
          A Complete Digital Growth Ecosystem
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl mx-auto hover:scale-105 transition duration-500">
          From strategy to execution, we design, build, and scale intelligent systems that drive real business growth.
        </p>

      <Image
        src="/images/banner.png"
        alt="Visual Overview"
        width={800}
        height={500}
        className="w-full h-auto"
      />
      </div>
    </section>
  );
}