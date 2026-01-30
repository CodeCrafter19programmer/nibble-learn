import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-violet-600 text-white hover:bg-violet-700",
                destructive:
                    "bg-red-500 text-slate-50 hover:bg-red-500/90",
                outline:
                    "border border-violet-200 bg-white text-violet-700 hover:bg-violet-50",
                secondary:
                    "bg-violet-100 text-violet-900 hover:bg-violet-200",
                ghost: "hover:bg-violet-100 hover:text-violet-900 border border-transparent",
                link: "text-violet-600 underline-offset-4 hover:underline",
                white: "bg-white text-violet-700 hover:bg-gray-50 border border-transparent",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Simplified: No Slot support for now to avoid dependency
        const Comp = "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
