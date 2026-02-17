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

    // Optional: Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('nibble-theme') as Theme
        if (saved) {
            setThemeState(saved)
            if (saved === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Default to system preference if no saved theme
            setThemeState('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleTheme = () => {
        setThemeState(prev => {
            const newTheme = prev === 'dark' ? 'light' : 'dark'
            localStorage.setItem('nibble-theme', newTheme)

            // Update document class
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }

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
