import Section from "../Section.jsx";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";
import { site } from "../../data/site.js";

export default function Contact() {
  const { email, phone, whatsapp } = site.contact;

  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>

      <motion.div
        className="grid md:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.a className="card bg-base-200 hover:shadow" href={`mailto:${email}`} variants={staggerItem}>
          <div className="card-body flex-row items-center gap-3">
            <FaEnvelope /><span>{email}</span>
          </div>
        </motion.a>

        <motion.a className="card bg-base-200 hover:shadow" href={`tel:${phone.replaceAll(" ", "")}`} variants={staggerItem}>
          <div className="card-body flex-row items-center gap-3">
            <FaPhone /><span>{phone}</span>
          </div>
        </motion.a>

        {whatsapp && (
          <motion.a className="card bg-base-200 hover:shadow" href={`https://wa.me/${whatsapp}`} variants={staggerItem}>
            <div className="card-body flex-row items-center gap-3">
              <FaWhatsapp /><span>WhatsApp</span>
            </div>
          </motion.a>
        )}
      </motion.div>
    </Section>
  );
}
