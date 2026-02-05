import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export const Logo = ({ className, width = 40, height = 40 }: LogoProps) => {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <Image
                src="/logo.png"
                alt="Nibble Logo"
                width={width}
                height={height}
                className="object-contain"
                priority
            />
        </div>
    );
};
