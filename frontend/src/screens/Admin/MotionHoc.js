import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: 610 }}
        animate={{
          y: 0,
          transition: { duration: 0.3, type: "spring" },
        }}
        exit={{
          y: -610,
          transition: { duration: 0.3, type: "spring", ease: "easeInOut" },
        }}
      >
        <Component />
      </motion.div>
    );
  };
};

export default MotionHoc;