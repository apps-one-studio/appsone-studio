export default function Metrics() {
  return (
    <section className="py-20 text-center">
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        
        <div>
          <h3 className="text-4xl font-bold text-[var(--color-accent)]">150%</h3>
          <p className="text-gray-600">Lead Growth</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[var(--color-accent)]">95%</h3>
          <p className="text-gray-600">Client Retention</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[var(--color-accent)]">3x</h3>
          <p className="text-gray-600">Conversion Increase</p>
        </div>

      </div>
    </section>
  );
}