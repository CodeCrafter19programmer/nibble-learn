"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('light')

    // Load saved theme preference from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('nibble-theme') as Theme
        if (saved === 'dark' || saved === 'light') {
            setThemeState(saved)
        }
        // NOTE: We intentionally do NOT touch document.documentElement here.
        // Dark mode is scoped to individual dashboard layout wrappers (not <html>),
        // so the public landing page is never affected by dashboard theme changes.
    }, [])

    const toggleTheme = () => {
        setThemeState(prev => {
            const newTheme = prev === 'dark' ? 'light' : 'dark'
            localStorage.setItem('nibble-theme', newTheme)
            return newTheme
        })
    }

    const setTheme = (t: Theme) => {
        setThemeState(t)
        localStorage.setItem('nibble-theme', t)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within ThemeProvider")
    return context
}
