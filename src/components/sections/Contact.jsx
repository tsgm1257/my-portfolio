import Section from "../Section.jsx";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";
import { site } from "../../data/site.js";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";
import { useMemo, useState } from "react";

export default function Contact() {
  const { email, phone, whatsapp } = site.contact;

  // sanitized hrefs
  const telHref = useMemo(() => (phone || "").replace(/[^\d+]/g, ""), [phone]);
  const waHref = useMemo(
    () => (whatsapp || "").replace(/[^\d]/g, ""),
    [whatsapp]
  );

  // copy feedback
  const [copied, setCopied] = useState("");

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1200);
    } catch {
      // Silently handle clipboard errors
    }
  };

  return (
    <Section id="contact">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl"
      >
        <div className="card-body p-6 md:p-10">
          {/* Heading with icon */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={staggerItem}
          >
            <FaPaperPlane className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Email */}
            <motion.div className="card bg-base-200" variants={staggerItem}>
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-2xl" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-80 text-sm">{email}</p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-3">
                  <a
                    href={`mailto:${email}`}
                    className="btn btn-primary btn-sm"
                  >
                    Send Email
                  </a>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => copy(email, "email")}
                    aria-label="Copy email"
                  >
                    {copied === "email" ? <FaCheck /> : <FaCopy />} Copy
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div className="card bg-base-200" variants={staggerItem}>
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-2xl" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="opacity-80 text-sm">{phone}</p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-3">
                  <a href={`tel:${telHref}`} className="btn btn-primary btn-sm">
                    Call
                  </a>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => copy(phone, "phone")}
                    aria-label="Copy phone"
                  >
                    {copied === "phone" ? <FaCheck /> : <FaCopy />} Copy
                  </button>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp (optional) */}
            {waHref && (
              <motion.div className="card bg-base-200" variants={staggerItem}>
                <div className="card-body">
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-2xl" />
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="opacity-80 text-sm">+{waHref}</p>
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-3">
                    <a
                      href={`https://wa.me/${waHref}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Open Chat
                    </a>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => copy(waHref, "wa")}
                      aria-label="Copy WhatsApp"
                    >
                      {copied === "wa" ? <FaCheck /> : <FaCopy />} Copy
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
