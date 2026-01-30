// @ts-nocheck
import { cn } from "@/lib/utils";

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
        <div
            className={cn(
                "relative border border-white/10 bg-[#0c0c0c] transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Corner Accents */}
            <div className={cn("absolute top-0 left-0 border-l border-t w-2 h-2 pointer-events-none", accentColor)} />
            <div className={cn("absolute top-0 right-0 border-r border-t w-2 h-2 pointer-events-none", accentColor)} />
            <div className={cn("absolute bottom-0 left-0 border-l border-b w-2 h-2 pointer-events-none", accentColor)} />
            <div className={cn("absolute bottom-0 right-0 border-r border-b w-2 h-2 pointer-events-none", accentColor)} />

            {children}
        </div>
    );
};
