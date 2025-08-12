import { motion } from "motion/react";
import useInViewOnce from "./hooks/useInViewOnce";
import PageContainer from "./PageContainer.jsx";

export default function Section({ id = "", className = "", children }) {
  const { ref, inView } = useInViewOnce();

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full py-16 md:py-24 scroll-mt-24 ${className}`}
    >
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </PageContainer>
    </section>
  );
}
