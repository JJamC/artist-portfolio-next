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
  }

  return (
    <div>
      <p>Want to work with me?</p>
      <p>Get in touch :) </p>
      <form
        action="#"
        method="POST"
        className="mx-auto max-w-xl place-items-center"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm/6 font-semibold">First name</label>
            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                name="first-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-semibold">Last name</label>
            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                name="last-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold">Email</label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                name="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#FC834A] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#F14F04]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
