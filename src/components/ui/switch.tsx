"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    ({ className, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
        const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)
        const isChecked = checked !== undefined ? checked : internalChecked

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (checked === undefined) {
                setInternalChecked(!internalChecked)
            }
            onCheckedChange?.(!isChecked)
            props.onClick?.(e)
        }

        return (
            <button
                className={cn(
                    "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    isChecked ? "bg-violet-600" : "bg-slate-300 dark:bg-slate-600 border-slate-300 dark:border-slate-600",
                    className
                )}
                ref={ref}
                onClick={handleClick}
                role="switch"
                aria-checked={isChecked}
                {...props}
            >
                <span
                    className={cn(
                        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
                        isChecked ? "translate-x-5" : "translate-x-0"
                    )}
                />
            </button>
        )
    }
)
Switch.displayName = "Switch"

export { Switch }
