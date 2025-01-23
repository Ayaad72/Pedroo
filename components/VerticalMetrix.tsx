import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useIsMobile from "@/hooks/useIsMobile";

interface VerticalMetricsProps {
  percentage: number;
  children: React.ReactNode;
}

export function VerticalMetrics({
  percentage,
  children,
}: VerticalMetricsProps) {
  const isMobile = useIsMobile();
  const divRef = useRef(null);

  // This will detect if the element is in view
  const { inView, ref } = useInView({
    triggerOnce: true, // Only trigger once when the element enters the view
    threshold: 0.2, // Trigger the animation when 20% of the element is visible
  });

  const div_height = !isMobile ? 400 : 800;
  const height = Math.round((percentage / 50) * div_height);

  return (
    <div
      className="metrix-container relative w-64 overflow-hidden"
      style={{
        height: !isMobile ? "300px" : height,
        width: !isMobile ? "24rem" : "16rem",
      }}
      ref={divRef} // Ref to the container
    >
      <motion.div
        ref={ref} // Ref to the motion div to track visibility
        className="absolute top-0 left-0 w-full p-6 text-[#41CE84] md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-6xl font-bold mb-4 text-[#41CE84]">
          {percentage}%
        </div>
        {children}
      </motion.div>
    </div>
  );
}
