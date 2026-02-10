import { ToolConfig } from "./types"
import {
    FileText, CheckCircle, MessageSquare, Zap, Users, Globe, PenTool,
    AlignLeft, Search, Quote, Lightbulb, BookOpen, Check, List,
    RotateCcw, Sparkles, Wand2, Scale, Link
} from "lucide-react"

export const TOOLS_CONFIG: Record<string, ToolConfig> = {
    "1": {
        id: "1",
        name: "Essay Outliner",
        description: "Create an outline for your essay with main points and supporting details.",
        icon: FileText,
        color: "bg-blue-500",
        inputs: [
            { id: "topic", label: "Topic or Essay Prompt", type: "textarea", placeholder: "e.g., The impact of climate change on polar bears" },
            { id: "type", label: "Essay Type", type: "select", options: ["Persuasive", "Narrative", "Expository", "Descriptive", "Argumentative"] },
            { id: "paragraphs", label: "Number of Paragraphs", type: "select", options: ["3", "4", "5", "6"] }
        ]
    },
    "2": {
        id: "2",
        name: "Paragraph Generator",
        description: "Generate a paragraph on any topic to help you get started.",
        icon: AlignLeft,
        color: "bg-emerald-500",
        inputs: [
            { id: "topic", label: "Topic", type: "text", placeholder: "e.g. Photosynthesis" },
            { id: "details", label: "What should the paragraph be about?", type: "textarea", placeholder: "Include key details..." },
            { id: "length", label: "Length", type: "select", options: ["Short", "Medium", "Long"] }
        ]
    },
    "3": {
        id: "3",
        name: "Research Assistant",
        description: "Find information and sources for your research project.",
        icon: Search,
        color: "bg-purple-500",
        inputs: [
            { id: "topic", label: "What are you researching?", type: "textarea", placeholder: "e.g. The history of the internet" },
            { id: "questions", label: "Specific Questions", type: "textarea", placeholder: "Optional: specific things you want to know" }
        ]
    },
    "4": {
        id: "4",
        name: "Citation Helper",
        description: "Create citations for your sources in MLA or APA format.",
        icon: Quote,
        color: "bg-amber-500",
        inputs: [
            { id: "style", label: "Citation Style", type: "select", options: ["MLA", "APA", "Chicago"] },
            { id: "sourceType", label: "Source Type", type: "select", options: ["Website", "Book", "Article", "Video"] },
            { id: "details", label: "Source Details (Author, Title, URL, etc.)", type: "textarea", placeholder: "Paste details here..." }
        ]
    },
    "5": {
        id: "5",
        name: "Thesis Statement Generator",
        description: "Create a strong thesis statement for your essay.",
        icon: Lightbulb,
        color: "bg-orange-500",
        inputs: [
            { id: "topic", label: "Essay Topic", type: "text", placeholder: "e.g. School Uniforms" },
            { id: "argument", label: "Your Main Argument", type: "textarea", placeholder: "What is your position?" },
            { id: "type", label: "Essay Type", type: "select", options: ["Argumentative", "Analytical", "Expository"] }
        ]
    },
    "6": {
        id: "6",
        name: "Introduction Writer",
        description: "Generate an engaging introduction for your essay.",
        icon: BookOpen,
        color: "bg-indigo-500",
        inputs: [
            { id: "topic", label: "Essay Topic", type: "text", placeholder: "e.g. The Civil War" },
            { id: "thesis", label: "Thesis Statement", type: "textarea", placeholder: "Enter your thesis..." },
            { id: "hook", label: "Hook Style", type: "select", options: ["Question", "Quote", "Fact", "Anecdote"] }
        ]
    },
    "7": {
        id: "7",
        name: "Conclusion Writer",
        description: "Write a strong conclusion for your essay.",
        icon: CheckCircle,
        color: "bg-cyan-500",
        inputs: [
            { id: "topic", label: "Essay Topic", type: "text", placeholder: "e.g. Healthy Eating" },
            { id: "points", label: "Main Points Covered", type: "textarea", placeholder: "Summarize your main arguments..." },
            { id: "thesis", label: "Thesis Statement", type: "text", placeholder: "Your original thesis" }
        ]
    },
    "8": {
        id: "8",
        name: "Sentence Starter",
        description: "Get ideas for starting your sentences.",
        icon: PenTool,
        color: "bg-teal-500",
        inputs: [
            { id: "topic", label: "Topic or Subject", type: "text", placeholder: "e.g. Space Exploration" },
            { id: "type", label: "Type of Writing", type: "select", options: ["Essay", "Paragraph", "Story", "Report"] }
        ]
    },
    "9": {
        id: "9",
        name: "Grammar Check",
        description: "Check your writing for grammar and spelling mistakes.",
        icon: Check,
        color: "bg-green-500",
        inputs: [
            { id: "text", label: "Your Text", type: "textarea", placeholder: "Paste your text here to check..." }
        ]
    },
    "10": {
        id: "10",
        name: "Writing Feedback",
        description: "Get feedback on your writing to make it better.",
        icon: MessageSquare,
        color: "bg-pink-500",
        inputs: [
            { id: "text", label: "Your Writing", type: "textarea", placeholder: "Paste your writing here..." },
            { id: "focus", label: "Feedback Focus", type: "select", options: ["General", "Grammar & Spelling", "Organization", "Word Choice", "Evidence"] }
        ]
    },
    "11": {
        id: "11",
        name: "Text Summarizer",
        description: "Summarize long texts to help you understand the main ideas.",
        icon: List,
        color: "bg-violet-500",
        inputs: [
            { id: "text", label: "Paste Text to Summarize", type: "textarea", placeholder: "Paste long text here..." },
            { id: "length", label: "Summary Length", type: "select", options: ["Short", "Medium", "Detailed"] }
        ]
    },
    "12": {
        id: "12",
        name: "Text Rewriter",
        description: "Rewrite text in your own words to avoid copying.",
        icon: RotateCcw,
        color: "bg-fuchsia-500",
        inputs: [
            { id: "text", label: "Original Text", type: "textarea", placeholder: "Paste text to rewrite..." },
            { id: "mode", label: "Rewrite Mode", type: "select", options: ["Simpler", "More Detailed", "Different Words", "Professional"] }
        ]
    },
    "13": {
        id: "13",
        name: "Word Choice Improver",
        description: "Find better words to make your writing stronger.",
        icon: Sparkles,
        color: "bg-yellow-500",
        inputs: [
            { id: "text", label: "Your Text", type: "textarea", placeholder: "Paste your sentence or paragraph..." }
        ]
    },
    "14": {
        id: "14",
        name: "Email Writer",
        description: "Write a professional email to your teacher.",
        icon: MessageSquare,
        color: "bg-sky-500",
        inputs: [
            { id: "recipient", label: "Who are you emailing?", type: "text", placeholder: "e.g. Mr. Smith, Principal Jones" },
            { id: "topic", label: "What is the email about?", type: "textarea", placeholder: "Briefly explain the purpose..." },
            { id: "tone", label: "Tone", type: "select", options: ["Formal", "Friendly", "Apologetic", "Inquisitive"] }
        ]
    },
    "15": {
        id: "15",
        name: "Counter-Argument Generator",
        description: "Find opposing views for your argumentative essay.",
        icon: Scale,
        color: "bg-rose-500",
        inputs: [
            { id: "topic", label: "Topic", type: "text", placeholder: "e.g. Year-round schooling" },
            { id: "argument", label: "Your Argument", type: "textarea", placeholder: "What is your stance?" }
        ]
    },
    "16": {
        id: "16",
        name: "Evidence Finder",
        description: "Get ideas for evidence to support your claims.",
        icon: Search,
        color: "bg-blue-600",
        inputs: [
            { id: "topic", label: "Topic Area", type: "text", placeholder: "e.g. Recycling" },
            { id: "claim", label: "Your Claim", type: "textarea", placeholder: "What claim do you need to support?" }
        ]
    },
    "17": {
        id: "17",
        name: "Transition Words Helper",
        description: "Find the right words to connect your ideas.",
        icon: Link,
        color: "bg-slate-500",
        inputs: [
            { id: "type", label: "Transition Type", type: "select", options: ["Addition", "Contrast", "Cause/Effect", "Time", "Example", "Conclusion"] }
        ]
    },
    "18": {
        id: "18",
        name: "Vocabulary Builder",
        description: "Learn new words related to your topic.",
        icon: BookOpen,
        color: "bg-indigo-600",
        inputs: [
            { id: "topic", label: "Topic or Subject", type: "text", placeholder: "e.g. Ancient Egypt" }
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
