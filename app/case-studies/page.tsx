export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10">Case Studies</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="font-bold">FinTech Platform</h3>
          <p>+120% conversion increase</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3>E-commerce</h3>
          <p>-45% bounce rate</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3>SaaS Dashboard</h3>
          <p>+60% retention</p>
        </div>
      </div>
    </div>
  );
}