"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface StudentFavoritesContextType {
    favorites: number[]
    toggleFavorite: (toolId: number) => void
    isFavorite: (toolId: number) => boolean
}

const StudentFavoritesContext = createContext<StudentFavoritesContextType | undefined>(undefined)

export function StudentFavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<number[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("nibble-student-favorites")
        if (stored) {
            try {
                setFavorites(JSON.parse(stored))
            } catch (e) {
                console.error("Failed to parse favorites", e)
            }
        }
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("nibble-student-favorites", JSON.stringify(favorites))
        }
    }, [favorites, isLoaded])

    const toggleFavorite = (toolId: number) => {
        setFavorites(prev => {
            if (prev.includes(toolId)) {
                return prev.filter(id => id !== toolId)
            } else {
                return [...prev, toolId]
            }
        })
    }

    const isFavorite = (toolId: number) => favorites.includes(toolId)

    return (
        <StudentFavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </StudentFavoritesContext.Provider>
    )
}

export function useStudentFavorites() {
    const context = useContext(StudentFavoritesContext)
    if (context === undefined) {
        throw new Error("useStudentFavorites must be used within a StudentFavoritesProvider")
    }
    return context
}
