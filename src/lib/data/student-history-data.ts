"use client"

import { FileText, Calculator, BookOpen, Clock, ArrowRight } from "lucide-react"

export interface StudentHistoryItem {
    id: number
    toolId: string
    tool: string
    title: string
    date: string
    type: string
    formData: Record<string, string>
    output: string
}

export const studentHistoryItems: StudentHistoryItem[] = [
    {
        id: 1,
        toolId: "1", // Essay Outliner
        tool: "Essay Outliner",
        title: "The Great Gatsby Analysis",
        date: "2 hours ago",
        type: "Writing",
        formData: {
            topic: "Symbolism in The Great Gatsby",
            thesis: "The green light represents Gatsby's unattainable dream.",
            tone: "Academic"
        },
        output: "## Essay Outline: The Great Gatsby Symbolism\n\n**I. Introduction**\n- Hook: Introduce the concept of the American Dream.\n- Thesis: The green light represents Gatsby's unattainable dream.\n\n**II. Body Paragraph 1: The Green Light**\n- Topic Sentence: The green light is the most prominent symbol.\n- Evidence: Gatsby reaching out across the water.\n\n**III. Conclusion**\n- Restate thesis.\n- Final thought on the corruption of the dream."
    },
    {
        id: 2,
        toolId: "2", // Math Helper (assuming ID 2 is math-related)
        tool: "Math Problem Solver",
        title: "Algebra Homework - Quadratic Equations",
        date: "Yesterday",
        type: "Math",
        formData: {
            problem: "Solve for x: x^2 + 5x + 6 = 0",
            steps: "Show work"
        },
        output: "## Solution\n\nTo solve the quadratic equation `x^2 + 5x + 6 = 0`, we can factor it.\n\n1.  **Find two numbers that multiply to 6 and add to 5.**\n    - 2 and 3 work because 2 * 3 = 6 and 2 + 3 = 5.\n2.  **Rewrite the equation in factored form.**\n    - (x + 2)(x + 3) = 0\n3.  **Set each factor to zero.**\n    - x + 2 = 0  =>  x = -2\n    - x + 3 = 0  =>  x = -3\n\n**Answer:** x = -2, x = -3"
    },
    {
        id: 3,
        toolId: "3", // Study Guide (assuming ID 3)
        tool: "Study Guide Generator",
        title: "Biology - Cell Structure",
        date: "2 days ago",
        type: "Study",
        formData: {
            topic: "Cell Structure and Function",
            level: "High School"
        },
        output: "## Study Guide: Cell Structure\n\n### Key Terms\n- **Nucleus**: The control center of the cell, contains DNA.\n- **Mitochondria**: Powerhouse of the cell, produces ATP.\n- **Ribosome**: Site of protein synthesis.\n\n### Review Questions\n1. What is the difference between plant and animal cells?\n2. Describe the function of the cell membrane."
    }
]
