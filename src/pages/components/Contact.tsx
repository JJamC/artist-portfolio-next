import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    // try {
    //   const res = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });

    //   if (!res.ok) throw new Error("Failed");

    //   setStatus("Message sent!");
    //   setForm({ name: "", email: "", message: "" });
    // } catch {
    //   setStatus("Something went wrong.");
    // }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send</button>

      {status && <p>{status}</p>}
    </form>
  );
}
