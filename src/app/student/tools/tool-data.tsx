import {
    FileText, AlignLeft, FileSearch, Quote, Target, ArrowRight, CheckCircle, PenLine, Check, MessageSquare
} from "lucide-react"

export type ToolInputType = 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'number'

export interface ToolInput {
    id: string
    type: ToolInputType
    label: string
    placeholder?: string
    options?: string[]
    defaultValue?: string | number | boolean
    required?: boolean
    helpText?: string
}

export interface ToolConfig {
    id: string
    name: string
    description: string
    icon: any
    color: string
    inputs: ToolInput[]
    studentFriendlyName?: string
    outputDescription?: string
}

export const toolsData: Record<string, ToolConfig> = {
    // 1. Essay Outliner
    "1": {
        id: "1",
        name: "Essay Outliner",
        studentFriendlyName: "Help me outline my essay",
        description: "Create an outline for your essay with main points and supporting details",
        icon: FileText,
        color: "bg-blue-500",
        inputs: [
            {
                id: "topic",
                type: "textarea",
                label: "Topic or Essay Prompt",
                placeholder: "What is your essay about?",
                required: true
            },
            {
                id: "essayType",
                type: "dropdown",
                label: "Essay Type",
                options: ["Persuasive", "Narrative", "Expository", "Descriptive", "Argumentative"],
                defaultValue: "Persuasive"
            },
            {
                id: "paragraphCount",
                type: "dropdown",
                label: "Number of Paragraphs",
                options: ["3 Paragraphs", "4 Paragraphs", "5 Paragraphs"],
                defaultValue: "5 Paragraphs"
            }
        ]
    },

    // 2. Paragraph Generator
    "2": {
        id: "2",
        name: "Paragraph Generator",
        description: "Generate a paragraph on any topic to help you get started",
        icon: AlignLeft,
        color: "bg-blue-400",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Topic",
                placeholder: "e.g., Photosynthesis",
                required: true
            },
            {
                id: "details",
                type: "textarea",
                label: "What should the paragraph be about?",
                placeholder: "Include specific details you want mentioned..."
            },
            {
                id: "length",
                type: "dropdown",
                label: "Paragraph Length",
                options: ["Short (~3 sentences)", "Medium (~5 sentences)", "Long (~8 sentences)"],
                defaultValue: "Medium (~5 sentences)"
            }
        ]
    },

    // 3. Research Assistant
    "3": {
        id: "3",
        name: "Research Assistant",
        studentFriendlyName: "Help me with my research",
        description: "Find information and sources for your research project",
        icon: FileSearch,
        color: "bg-indigo-500",
        inputs: [
            {
                id: "gradeLevel",
                type: "dropdown",
                label: "Grade Level",
                options: ["Elementary", "Middle School", "High School", "College"],
                defaultValue: "Middle School"
            },
            {
                id: "topic",
                type: "textarea",
                label: "What are you researching?",
                placeholder: "e.g., The causes of the American Revolution",
                required: true
            },
            {
                id: "questions",
                type: "textarea",
                label: "Specific questions you have (optional)",
                placeholder: "e.g., Who were the key figures?"
            }
        ]
    },

    // 4. Citation Helper
    "4": {
        id: "4",
        name: "Citation Helper",
        studentFriendlyName: "Create a citation",
        description: "Create citations for your sources in MLA or APA format",
        icon: Quote,
        color: "bg-orange-500",
        inputs: [
            {
                id: "style",
                type: "dropdown",
                label: "Citation Style",
                options: ["MLA", "APA", "Chicago"],
                defaultValue: "MLA"
            },
            {
                id: "sourceType",
                type: "dropdown",
                label: "Source Type",
                options: ["Book", "Website", "Article", "Video"],
                defaultValue: "Website"
            },
            {
                id: "url",
                type: "text",
                label: "URL (for websites)",
                placeholder: "https://..."
            },
            {
                id: "title",
                type: "text",
                label: "Title",
                placeholder: "Article or Page Title",
                required: true
            },
            {
                id: "author",
                type: "text",
                label: "Author",
                placeholder: "Last Name, First Name"
            },
            {
                id: "publisher",
                type: "text",
                label: "Publisher / Site Name",
                placeholder: "e.g., National Geographic"
            },
            {
                id: "date",
                type: "text",
                label: "Publication Date",
                placeholder: "e.g., 2023 or May 5, 2022"
            }
        ]
    },

    // 5. Thesis Statement Generator
    "5": {
        id: "5",
        name: "Thesis Statement Generator",
        studentFriendlyName: "Write my thesis statement",
        description: "Create a strong thesis statement for your essay",
        icon: Target,
        color: "bg-red-500",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Essay Topic",
                placeholder: "e.g., Climate Change",
                required: true
            },
            {
                id: "argument",
                type: "textarea",
                label: "Your main argument or position",
                placeholder: "What do you believe about this topic?",
                required: true
            },
            {
                id: "essayType",
                type: "dropdown",
                label: "Essay Type",
                options: ["Argumentative", "Analytical", "Expository"],
                defaultValue: "Argumentative"
            }
        ]
    },

    // 6. Introduction Writer
    "6": {
        id: "6",
        name: "Introduction Writer",
        description: "Generate an engaging introduction for your essay",
        icon: ArrowRight,
        color: "bg-purple-500",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Essay Topic",
                placeholder: "e.g., The benefits of exercise",
                required: true
            },
            {
                id: "thesis",
                type: "textarea",
                label: "Thesis Statement",
                placeholder: "Paste your thesis statement here...",
                required: true
            },
            {
                id: "hookStyle",
                type: "dropdown",
                label: "Hook Style",
                options: ["Question", "Quote", "Fact", "Anecdote"],
                defaultValue: "Question"
            }
        ]
    },

    // 7. Conclusion Writer
    "7": {
        id: "7",
        name: "Conclusion Writer",
        description: "Write a strong conclusion for your essay",
        icon: CheckCircle,
        color: "bg-green-500",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Essay Topic",
                placeholder: "e.g., Space Exploration",
                required: true
            },
            {
                id: "mainPoints",
                type: "textarea",
                label: "Main Points Covered",
                placeholder: "Briefly list the main points you discussed...",
                required: true
            },
            {
                id: "thesis",
                type: "text",
                label: "Thesis Statement",
                placeholder: "Your original thesis statement"
            }
        ]
    },

    // 8. Sentence Starter
    "8": {
        id: "8",
        name: "Sentence Starter",
        studentFriendlyName: "Help me start my sentences",
        description: "Get ideas for starting your sentences",
        icon: PenLine,
        color: "bg-yellow-500",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Topic or Subject",
                placeholder: "e.g., Ancient Rome",
                required: true
            },
            {
                id: "type",
                type: "dropdown",
                label: "Type of Writing",
                options: ["Essay", "Paragraph", "Story", "Report"],
                defaultValue: "Essay"
            }
        ]
    },

    // 9. Grammar Check
    "9": {
        id: "9",
        name: "Grammar Check",
        studentFriendlyName: "Check my grammar",
        description: "Check your writing for grammar and spelling mistakes",
        icon: Check,
        color: "bg-teal-500",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Your Text",
                placeholder: "Paste your text here to check for errors...",
                required: true
            }
        ]
    },

    // 10. Writing Feedback
    "10": {
        id: "10",
        name: "Writing Feedback",
        description: "Get feedback on your writing to make it better",
        icon: MessageSquare,
        color: "bg-pink-500",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Your Writing",
                placeholder: "Paste your essay or paragraph here...",
                required: true
            },
            {
                id: "focus",
                type: "checkbox",
                label: "What kind of feedback do you want?",
                // Note: For checkboxes, we might handle options differently in valid implementation
                // For now, simpler implementation:
                options: ["Grammar & Spelling", "Organization", "Word Choice", "Evidence & Examples"]
            }
        ]
    }
}
