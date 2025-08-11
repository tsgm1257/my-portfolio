import Section from "../Section.jsx";
import { FaUser } from "react-icons/fa6";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.span variants={staggerItem}>
          <FaUser />
        </motion.span>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={staggerItem}
        >
          About Me
        </motion.h2>
      </motion.div>

      <motion.div
        className="prose max-w-none"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.p variants={staggerItem}>
          I started programming in 20XX and enjoy shipping useful, performant
          products. I love clean UIs, predictable state, and simple APIs.
        </motion.p>
        <motion.p variants={staggerItem}>
          Outside coding: football, volunteering, and teaching. I value clarity,
          consistency, and incremental improvements.
        </motion.p>
      </motion.div>
    </Section>
  );
}
