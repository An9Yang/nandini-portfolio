// @ts-nocheck
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const FlowingGridBackground = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const draw = () => {
            if (!ctx || !canvas) return;

            timeRef.current += 0.02; // Increased speed slightly
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gridSize = 40;
            const cols = Math.ceil(canvas.width / gridSize);
            const rows = Math.ceil(canvas.height / gridSize);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * gridSize;
                    const y = j * gridSize;

                    const dx = x - mouseRef.current.x;
                    const dy = y - mouseRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Wave effect
                    const wave = Math.sin(timeRef.current + (x * 0.005) + (y * 0.005));

                    // Spotlight effect
                    const spotlight = Math.max(0, 1 - dist / 400);

                    // Dynamic size and opacity
                    const size = 1 + (wave * 0.5) + (spotlight * 2);
                    const opacity = 0.05 + (spotlight * 0.3);

                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 pointer-events-none z-0", className)}
        />
    );
};
