"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/email";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async () => {
    try {
      setLoading(true);

      await sendEmail(
        form.name,
        form.email,
        form.message
      );

      alert("Message Sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      alert("Error Sending Message");
    } finally {
      setLoading(false);
    }
  };

  return (
                <FadeIn>

    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl border p-12">

          <h2 className="text-5xl font-bold">
            Contact Me
          </h2>

          <div className="mt-6 space-y-2 text-gray-500">
  <p>
    📧 vigneshjeevarathinam1@gmail.com
  </p>

  <p>
    📍 Chennai, Tamil Nadu, India
  </p>

  <p>
    💼 LinkedIn:
    <a
      href="https://www.linkedin.com/in/vignesh-jeevarathinam-aa9892187/"
      target="_blank"
      className="text-blue-500 ml-2"
    >
      View Profile
    </a>
  </p>

  <p>
    💻 GitHub:
    <a
      href="https://github.com/vignesh-Jeevarathinam"
      target="_blank"
      className="text-blue-500 ml-2"
    >
      View GitHub
    </a>
  </p>
</div>

          <div className="grid gap-4 mt-8">

            <input
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
              placeholder="Name"
              className="border p-4 rounded-xl"
            />

            <input
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
              placeholder="Email"
              className="border p-4 rounded-xl"
            />

            <textarea
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value
                })
              }
              placeholder="Message"
              className="border p-4 rounded-xl h-40"
            />

            <button
              onClick={submit}
              disabled={loading}
              className="
                bg-blue-600
                text-white
                rounded-xl
                py-4
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}