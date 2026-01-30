import { ToolConfig } from "./types"
import { FileText, CheckCircle, MessageSquare, Zap, Users, Globe, PenTool } from "lucide-react"

export const TOOLS_CONFIG: Record<string, ToolConfig> = {
    "1": {
        id: "1",
        name: "Lesson Plan Generator",
        description: "Generate a comprehensive lesson plan for any topic.",
        icon: FileText,
        color: "bg-blue-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th-12th"] },
            { id: "topic", label: "Topic / Standard", type: "text", placeholder: "e.g., Photosynthesis or CCSS.ELA-LITERACY.RL.5.1" },
            { id: "objective", label: "Learning Objective", type: "textarea", placeholder: "Students will be able to..." },
        ]
    },
    "2": {
        id: "2",
        name: "Rubric Generator",
        description: "Create a standards-aligned rubric.",
        icon: CheckCircle,
        color: "bg-emerald-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
            { id: "assignment", label: "Assignment Description", type: "textarea", placeholder: "Describe the assignment..." },
            { id: "criteria", label: "Key Criteria", type: "text", placeholder: "e.g. Grammar, Creativity, Organization" }
        ]
    },
    "3": {
        id: "3",
        name: "Parent Email Writer",
        description: "Draft professional emails to parents.",
        icon: MessageSquare,
        color: "bg-purple-500",
        inputs: [
            { id: "tone", label: "Tone", type: "select", options: ["Professional", "Friendly", "Concerned", "Celebratory"] },
            { id: "context", label: "What do you need to communicate?", type: "textarea", placeholder: "e.g. Johnny has been improving in math..." }
        ]
    },
    "4": {
        id: "4",
        name: "Text Leveler",
        description: "Adjust the reading level of any text.",
        icon: Zap,
        color: "bg-amber-500",
        inputs: [
            { id: "targetGrade", label: "Target Grade Level", type: "select", options: ["1st", "3rd", "5th", "8th", "10th"] },
            { id: "text", label: "Original Text", type: "textarea", placeholder: "Paste text here..." }
        ]
    },
    // Default fallback for generic IDs
    "default": {
        id: "default",
        name: "AI Assistant",
        description: "A general purpose AI tool.",
        icon: PenTool,
        color: "bg-slate-500",
        inputs: [
            { id: "prompt", label: "What would you like to create?", type: "textarea", placeholder: "Describe what you need..." }
        ]
    }
}

export function getToolConfig(id: string): ToolConfig {
    return TOOLS_CONFIG[id] || { ...TOOLS_CONFIG["default"], name: `Tool ${id}` }
}
