"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface StudentProfile {
    firstName: string
    lastName: string
    displayName: string
    email: string
    avatar: string
}

interface StudentProfileContextType {
    profile: StudentProfile
    updateProfile: (updates: Partial<StudentProfile>) => void
}

const defaultProfile: StudentProfile = {
    firstName: "John",
    lastName: "Student",
    displayName: "John Student",
    email: "john.student@school.edu",
    avatar: ""
}

const StudentProfileContext = createContext<StudentProfileContextType | undefined>(undefined)

export function StudentProfileProvider({ children }: { children: React.ReactNode }) {
    const [profile, setProfile] = useState<StudentProfile>(defaultProfile)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem("nibble-student-profile")
        if (stored) {
            try {
                setProfile(prev => ({ ...prev, ...JSON.parse(stored) }))
            } catch (e) {
                console.error("Failed to parse profile", e)
            }
        }
        setIsLoaded(true)
    }, [])

    const updateProfile = (updates: Partial<StudentProfile>) => {
        setProfile(prev => {
            const next = { ...prev, ...updates }
            localStorage.setItem("nibble-student-profile", JSON.stringify(next))
            return next
        })
    }

    // Only render children when loaded to prevent hydration mismatch for profile data
    if (!isLoaded) return null

    return (
        <StudentProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </StudentProfileContext.Provider>
    )
}

export function useStudentProfile() {
    const context = useContext(StudentProfileContext)
    if (context === undefined) {
        throw new Error("useStudentProfile must be used within a StudentProfileProvider")
    }
    return context
}
