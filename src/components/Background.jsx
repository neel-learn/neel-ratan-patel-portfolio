import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import "./css/Background.css";


const Background = () => {

    const backgroundRef = useRef(null);

    /* =========================================
       SCROLL PARALLAX
    ========================================= */

    const { scrollY } = useScroll();

    const gridY = useTransform(
        scrollY,
        [0, 5000],
        [0, -180]
    );

    const glowY = useTransform(
        scrollY,
        [0, 5000],
        [0, -420]
    );

    const orbitalY = useTransform(
        scrollY,
        [0, 5000],
        [0, 280]
    );


    /* =========================================
       CURSOR POSITION
    ========================================= */

    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

    const smoothX = useSpring(mouseX, {
        stiffness: 80,
        damping: 25,
        mass: 0.5,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 80,
        damping: 25,
        mass: 0.5,
    });


    useEffect(() => {

        const handleMouseMove = (event) => {

            const x =
                (event.clientX / window.innerWidth) * 100;

            const y =
                (event.clientY / window.innerHeight) * 100;

            mouseX.set(x);
            mouseY.set(y);
        };


        window.addEventListener(
            "mousemove",
            handleMouseMove,
            { passive: true }
        );


        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };

    }, [mouseX, mouseY]);


    /* =========================================
       PARTICLES
    ========================================= */

    const particles = Array.from(
        { length: 28 },
        (_, index) => ({
            id: index,

            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,

            size:
                index % 4 === 0
                    ? 3
                    : 1.5,

            duration:
                5 + (index % 6),

            delay:
                -(index % 5),

            moveX:
                (index % 2 === 0 ? 1 : -1) *
                (15 + (index % 5) * 8),

            moveY:
                (index % 3 === 0 ? 1 : -1) *
                (15 + (index % 4) * 10),
        })
    );


    return (

        <div
            ref={backgroundRef}
            className="background-container"
        >

            {/* =====================================
                TECHNICAL GRID
            ===================================== */}

            <motion.div
                className="background-grid"
                style={{ y: gridY }}
            />


            {/* =====================================
                LARGE ARCHITECTURAL LINES
            ===================================== */}

            <motion.div
                className="architecture architecture-one"
                style={{ y: orbitalY }}
            />

            <motion.div
                className="architecture architecture-two"
                style={{ y: glowY }}
            />

            <motion.div
                className="architecture architecture-three"
                style={{ y: gridY }}
            />


            {/* =====================================
                LIME AMBIENT LIGHT
            ===================================== */}

            <motion.div
                className="ambient-glow glow-one"
                style={{ y: glowY }}
            />

            <motion.div
                className="ambient-glow glow-two"
                style={{ y: orbitalY }}
            />


            {/* =====================================
                ORBITAL SYSTEM
            ===================================== */}

            <motion.div
                className="orbital-system"
                style={{ y: orbitalY }}
            >

                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />

                <div className="orbit-core">
                    <span />
                </div>

            </motion.div>


            {/* =====================================
                PARTICLES
            ===================================== */}

            <div className="particles">

                {particles.map((particle) => (

                    <motion.span
                        key={particle.id}
                        className="particle"

                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                        }}

                        animate={{
                            x: [
                                0,
                                particle.moveX,
                                0,
                            ],

                            y: [
                                0,
                                particle.moveY,
                                0,
                            ],

                            opacity: [
                                0.15,
                                0.7,
                                0.15,
                            ],
                        }}

                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                ))}

            </div>


            {/* =====================================
                NRP WATERMARK
            ===================================== */}

            <motion.div
                className="nrp-watermark"
                style={{ y: gridY }}
            >
                NRP
            </motion.div>


            {/* =====================================
                HUD INFORMATION
            ===================================== */}

            <div className="hud hud-top-left">

                <span>NRP / SYSTEM</span>
                <span>BUILD_2026</span>

            </div>


            <div className="hud hud-top-right">

                <span>PORTFOLIO</span>
                <span>ONLINE</span>

            </div>


            <div className="hud hud-bottom-left">

                <span>JAVA // REACT // SPRING</span>

            </div>


            <div className="hud hud-bottom-right">

                <span>VARANASI / IN</span>
                <span>01—01</span>

            </div>


            {/* =====================================
                CORNER MARKERS
            ===================================== */}

            <div className="corner-marker marker-top-left" />
            <div className="corner-marker marker-top-right" />
            <div className="corner-marker marker-bottom-left" />
            <div className="corner-marker marker-bottom-right" />


            {/* =====================================
                CURSOR SPOTLIGHT
            ===================================== */}

            <motion.div
                className="cursor-spotlight"

                style={{
                    left: useTransform(
                        smoothX,
                        (value) => `${value}%`
                    ),

                    top: useTransform(
                        smoothY,
                        (value) => `${value}%`
                    ),
                }}
            />


            {/* =====================================
                VIGNETTE
            ===================================== */}

            <div className="background-vignette" />

            <div className="background-noise" />

        </div>
    );
};


export default Background;