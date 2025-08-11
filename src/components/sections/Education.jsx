import Section from "../Section.jsx";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";

export default function Education() {
  return (
    <Section id="education">
      <motion.div className="flex items-center gap-3 mb-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
        <motion.span variants={staggerItem}><FaGraduationCap /></motion.span>
        <motion.h2 className="text-2xl md:text-3xl font-semibold" variants={staggerItem}>Education</motion.h2>
      </motion.div>

      <motion.div className="card bg-base-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
        <motion.div className="card-body" variants={staggerItem}>
          <h3 className="card-title">B.Sc. in Computer Science</h3>
          <p>Fort Hays State University (Online), 202X – Present</p>
          <p>Relevant Coursework: Algorithms, Databases, Web Development</p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
