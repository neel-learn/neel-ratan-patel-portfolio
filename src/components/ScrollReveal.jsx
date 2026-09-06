import { motion } from "framer-motion";

const ScrollReveal = ({
    children,
    className = "",
    direction = "up",
    delay = 0,
}) => {

    const directions = {
        up: { y: 100, x: 0 },
        down: { y: -100, x: 0 },
        left: { x: -120, y: 0 },
        right: { x: 120, y: 0 },
    };

    return (
        <motion.div
            className={className}

            initial={{
                opacity: 0,
                ...directions[direction],
                scale: 0.97,
            }}

            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
            }}

            viewport={{
                once: true,
                amount: 0.05,
                margin: "0px 0px -80px 0px",
            }}

            transition={{
                duration: 0.9,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;