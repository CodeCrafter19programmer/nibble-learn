
"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface FavoritesContextType {
    favorites: string[]
    toggleFavorite: (toolId: string) => void
    isFavorite: (toolId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Load from local storage
    useEffect(() => {
        const stored = localStorage.getItem("nibble-teacher-favorites")
        if (stored) {
            try {
                setFavorites(JSON.parse(stored))
            } catch (e) {
                console.error("Failed to parse favorites", e)
            }
        }
        setIsLoaded(true)
    }, [])

    // Update local storage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("nibble-teacher-favorites", JSON.stringify(favorites))
        }
    }, [favorites, isLoaded])

    const toggleFavorite = (toolId: string) => {
        setFavorites(prev => {
            if (prev.includes(toolId)) {
                return prev.filter(id => id !== toolId)
            } else {
                return [...prev, toolId]
            }
        })
    }

    const isFavorite = (toolId: string) => favorites.includes(toolId)

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    const context = useContext(FavoritesContext)
    if (context === undefined) {
        throw new Error("useFavorites must be used within a FavoritesProvider")
    }
    return context
}
