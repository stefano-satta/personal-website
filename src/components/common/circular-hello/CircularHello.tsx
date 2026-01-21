"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SIZE = 150;
const CENTER = SIZE / 2;
const RADIUS = 60;

export default function CircularHello() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll relativo al componente
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <div ref={containerRef}
            className="position-relative d-flex align-items-center justify-content-center"
            style={{
                width: SIZE,
                height: SIZE,
            }}>
            {/* Testo circolare */}
            <motion.svg width={SIZE}
                        height={SIZE}
                        viewBox={`0 0 ${SIZE} ${SIZE}`}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                <defs>
                    <path id="circlePath"
                        d={`M ${CENTER}, ${CENTER}
                        m -${RADIUS}, 0
                        a ${RADIUS},${RADIUS} 0 1,1 ${RADIUS * 2},0
                        a ${RADIUS},${RADIUS} 0 1,1 -${RADIUS * 2},0`}/>
                </defs>

                <text fill="#fff"
                      fontSize="16"
                      fontWeight="600"
                      letterSpacing="4">
                    <textPath href="#circlePath">
                        HELLO • HELLO • HELLO • HELLO • HELLO
                    </textPath>
                </text>
            </motion.svg>

            {/* Emoji centrale */}
            <div className="position-absolute"
                 style={{
                    fontSize: "40px",
                    lineHeight: 1,
                }}>
                👋
            </div>
        </div>
    );
}
