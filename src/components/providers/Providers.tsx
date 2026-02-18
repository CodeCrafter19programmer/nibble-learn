"use client"

import React from "react"
import { ThemeProvider } from "./ThemeContext"
import { FavoritesProvider } from "./FavoritesContext"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </ThemeProvider>
    )
}
