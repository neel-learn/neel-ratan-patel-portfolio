import "./css/Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.h1 layoutId="main-logo" className="typing-text">
        PortFolio
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
