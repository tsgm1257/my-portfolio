import Section from "../Section.jsx";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <a className="card bg-base-200 hover:shadow" href="mailto:you@email.com">
          <div className="card-body flex-row items-center gap-3">
            <FaEnvelope /><span>you@email.com</span>
          </div>
        </a>
        <a className="card bg-base-200 hover:shadow" href="tel:+11234567890">
          <div className="card-body flex-row items-center gap-3">
            <FaPhone /><span>+1 123 456 7890</span>
          </div>
        </a>
        <a className="card bg-base-200 hover:shadow" href="https://wa.me/11234567890">
          <div className="card-body flex-row items-center gap-3">
            <FaWhatsapp /><span>WhatsApp</span>
          </div>
        </a>
      </div>
    </Section>
  );
}
