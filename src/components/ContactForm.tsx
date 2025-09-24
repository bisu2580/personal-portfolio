"use client";
import emailjs from "@emailjs/browser";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MagicCard } from "./ui/magic-card";
import { RainbowButton } from "./ui/rainbow-button";
import { SendIcon } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setStatus("error");
      console.error("EmailJS environment variables are not set.");
      return;
    }

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setStatus("error");
      });
  };
  return (
    <>
      <MagicCard className="rounded-2xl p-8 bg-[#0d0f1a]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="from_name"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              placeholder="Biswajit Sahoo"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#1e293b] focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-white placeholder-gray-500 transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#1e293b] focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-white placeholder-gray-500 transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Let's build something amazing..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#1e293b] focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 text-white placeholder-gray-500 transition-all resize-none"
              required
            />
          </div>

          <div className="text-right">
            <RainbowButton
              variant="outline"
              className="rounded-lg"
              size="lg"
              type="submit"
            >
              {status === "sending" ? "Sending" : "Send Message"}
              <SendIcon />
            </RainbowButton>
          </div>
          {status === "success" && (
            <p className="text-center text-green-400">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </MagicCard>
    </>
  );
};

export default ContactForm;
