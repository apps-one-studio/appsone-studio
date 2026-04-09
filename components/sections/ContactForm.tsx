export default function ContactForm() {
  return (
    <section className="py-20">
      <form
        action="https://formspree.io/f/xqegnlog"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
        />

        <button className="w-full bg-[var(--color-accent)] text-white p-3 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}