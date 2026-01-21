"use client";

import { motion, useMotionValue, type Variants } from "framer-motion";
import Link from "next/link";

interface FallingPillLinkProps {
    href: string;
    children: React.ReactNode;
}

const fallVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -80 - Math.random() * 120,
        rotate: -8 + Math.random() * 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            mass: 0.9,
        },
    },
};


const FallingPillsContact = ({
                                 href,
                                 children,
                             }: FallingPillLinkProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
        <motion.div variants={fallVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ x, y }}
            whileHover={{ scale: 1.05 }}
            drag
            dragConstraints={{ left: -14, right: 14, top: -14, bottom: 14 }}
            dragElastic={0.25}
            dragTransition={{
                bounceStiffness: 300,
                bounceDamping: 20,
            }}
            onDragEnd={() => {
                x.set(0);
                y.set(0);
            }}
            className="cursor-pointer"
        >
            <Link
                href={href}
                className="badge rounded-pill bg-primary text-white px-4 py-3 fs-6 text-decoration-none d-inline-block"
            >
                {children}
            </Link>
        </motion.div>
    );
}

export default FallingPillsContact;