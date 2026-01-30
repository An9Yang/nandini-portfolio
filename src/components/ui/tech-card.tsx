// @ts-nocheck
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    cornerSize?: "sm" | "md" | "lg";
    accentColor?: string; // e.g. "border-accent-purple"
}

export const TechCard = ({
    children,
    className,
    cornerSize = "sm",
    accentColor = "border-white/30",
    ...props
}: TechCardProps) => {
    return (
        <motion.div
            className={cn(
                "relative bg-[#0c0c0c] overflow-hidden group/card",
                className
            )}
            whileHover={{ y: -5, scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props}
        >
            {/* 
         Static Border
      */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none z-20" />

            {/* 
         Dynamic Hover Effect: Moving Gradient Mesh
         Instead of a scanning line, we use a large moving gradient that is seamless.
      */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-10 mix-blend-overlay"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    backgroundImage: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at center, rgba(0, 193, 162, 0.15) 0%, transparent 50%)",
                    backgroundSize: "100% 100%", // Static size, moving position logic handled differently below if needed
                }}
            />

            {/* 
        Alternative: "Border Beam" Logic
        We create an absolute div moving around the edge.
      */}
            <div className="absolute inset-0 w-full h-full p-[1px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-10 overflow-hidden">
                <motion.div
                    className="absolute -inset-[100%]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0 340deg, rgba(139,92,246,0.6) 360deg)"
                    }}
                />
            </div>

            {/* Inner Mask to hide the center of the conic gradient, leaving only the border */}
            <div className="absolute inset-[1px] bg-[#0c0c0c] z-10" />


            {/* Corner Accents (Above everything) */}
            <div className={cn("absolute top-0 left-0 border-l border-t w-2 h-2 pointer-events-none transition-colors duration-300 group-hover/card:border-accent-purple z-30", accentColor)} />
            <div className={cn("absolute top-0 right-0 border-r border-t w-2 h-2 pointer-events-none transition-colors duration-300 group-hover/card:border-accent-purple z-30", accentColor)} />
            <div className={cn("absolute bottom-0 left-0 border-l border-b w-2 h-2 pointer-events-none transition-colors duration-300 group-hover/card:border-accent-teal z-30", accentColor)} />
            <div className={cn("absolute bottom-0 right-0 border-r border-b w-2 h-2 pointer-events-none transition-colors duration-300 group-hover/card:border-accent-teal z-30", accentColor)} />

            {/* Content Wrapper */}
            <div className="relative z-20 h-[calc(100%-2px)] w-[calc(100%-2px)] m-[1px] rounded-[inherit] overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
};
