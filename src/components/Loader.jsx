import "./css/Loader.css";
import { motion } from "framer-motion";
import Background from "./Background";

const Loader = () => {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Background></Background>
      <motion.h1 layoutId="main-logo" className="typing-text">
        PortFolio
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
