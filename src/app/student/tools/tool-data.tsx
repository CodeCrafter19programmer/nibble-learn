import {
    FileText, AlignLeft, FileSearch, Quote, Target, ArrowRight, CheckCircle, PenLine, Check, MessageSquare,
    Minimize2, RotateCw, Book, Mail, Scale, Link, BookA, BookOpen, Volume2, ArrowDown,
    Calculator, FileSpreadsheet, Lightbulb, PieChart, Triangle, HelpCircle, Sparkles
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
    },

    // 11. Text Summarizer
    "11": {
        id: "11",
        name: "Text Summarizer",
        studentFriendlyName: "Summarize this for me",
        description: "Summarize long texts to help you understand the main ideas",
        icon: Minimize2,
        color: "bg-orange-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Paste your text here",
                placeholder: "Paste the article or text you want to summarize...",
                required: true
            },
            {
                id: "length",
                type: "dropdown",
                label: "Summary Length",
                options: ["Short", "Medium", "Detailed"],
                defaultValue: "Medium"
            }
        ]
    },

    // 12. Text Rewriter
    "12": {
        id: "12",
        name: "Text Rewriter",
        description: "Rewrite text in your own words to avoid copying",
        icon: RotateCw,
        color: "bg-green-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Original Text",
                placeholder: "Paste the text you want to rewrite...",
                required: true
            },
            {
                id: "style",
                type: "dropdown",
                label: "How should I rewrite it?",
                options: ["Simpler", "More detailed", "Different words"],
                defaultValue: "Simpler"
            }
        ]
    },

    // 13. Word Choice Improver
    "13": {
        id: "13",
        name: "Word Choice Improver",
        description: "Find better words to make your writing stronger",
        icon: Book,
        color: "bg-indigo-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Your sentence or paragraph",
                placeholder: "Paste your text here...",
                required: true
            },
            {
                id: "goal",
                type: "checkbox",
                label: "What do you want to improve?",
                options: ["Stronger verbs", "More descriptive adjectives", "Academic vocabulary", "Remove repetition"]
            }
        ]
    },

    // 14. Email Writer
    "14": {
        id: "14",
        name: "Email Writer",
        description: "Write a professional email to your teacher",
        icon: Mail,
        color: "bg-blue-400",
        inputs: [
            {
                id: "recipient",
                type: "text",
                label: "Who are you emailing?",
                placeholder: "e.g., My teacher, The Principal",
                required: true
            },
            {
                id: "topic",
                type: "textarea",
                label: "What is the email about?",
                placeholder: "Explain what you need to say...",
                required: true
            },
            {
                id: "tone",
                type: "dropdown",
                label: "Tone",
                options: ["Formal", "Friendly", "Apologetic"],
                defaultValue: "Formal"
            }
        ]
    },

    // 15. Counter-Argument Generator
    "15": {
        id: "15",
        name: "Counter-Argument Generator",
        description: "Find opposing views for your argumentative essay",
        icon: Scale,
        color: "bg-red-400",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Topic",
                placeholder: "e.g., School Uniforms",
                required: true
            },
            {
                id: "argument",
                type: "textarea",
                label: "Your argument/position",
                placeholder: "What is your stance on this topic?",
                required: true
            }
        ]
    },

    // 16. Evidence Finder
    "16": {
        id: "16",
        name: "Evidence Finder",
        description: "Get ideas for evidence to support your claims",
        icon: FileSearch,
        color: "bg-yellow-400",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Topic Area",
                placeholder: "e.g., Renewable Energy",
                required: true
            },
            {
                id: "claim",
                type: "textarea",
                label: "Your claim or argument",
                placeholder: "What specific point are you trying to prove?",
                required: true
            }
        ]
    },

    // 17. Transition Words Helper
    "17": {
        id: "17",
        name: "Transition Words Helper",
        description: "Find the right words to connect your ideas",
        icon: Link,
        color: "bg-cyan-400",
        inputs: [
            {
                id: "type",
                type: "dropdown",
                label: "What kind of transition?",
                options: ["Addition", "Contrast", "Cause/Effect", "Time", "Example", "Conclusion"],
                defaultValue: "Addition"
            }
        ]
    },

    // 18. Vocabulary Builder
    "18": {
        id: "18",
        name: "Vocabulary Builder",
        description: "Learn new words related to your topic",
        icon: BookA,
        color: "bg-purple-400",
        inputs: [
            {
                id: "topic",
                type: "text",
                label: "Topic or Subject",
                placeholder: "e.g., Ecology, The Civil War",
                required: true
            }
        ]
    },

    // 19. Reading Comprehension Questions
    "19": {
        id: "19",
        name: "Reading Comprehension Questions",
        description: "Answer questions about what you read to check understanding",
        icon: BookOpen,
        color: "bg-emerald-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Paste the text you read",
                placeholder: "Paste the story or article here...",
                required: true
            },
            {
                id: "difficulty",
                type: "dropdown",
                label: "Question Difficulty",
                options: ["Easy", "Medium", "Hard"],
                defaultValue: "Medium"
            }
        ]
    },

    // 20. Text-to-Speech
    "20": {
        id: "20",
        name: "Text-to-Speech",
        description: "Listen to text read aloud",
        icon: Volume2,
        color: "bg-pink-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Text to read",
                placeholder: "Paste the text you want to listen to...",
                required: true
            },
            {
                id: "speed",
                type: "dropdown",
                label: "Reading Speed",
                options: ["Slow", "Normal", "Fast"],
                defaultValue: "Normal"
            }
        ]
    },

    // 21. Text Simplifier
    "21": {
        id: "21",
        name: "Text Simplifier",
        description: "Make difficult text easier to understand",
        icon: ArrowDown,
        color: "bg-teal-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Paste difficult text",
                placeholder: "Paste the text you want to simplify...",
                required: true
            },
            {
                id: "level",
                type: "dropdown",
                label: "Reading level needed",
                options: ["Elementary", "Middle School", "High School"],
                defaultValue: "Elementary"
            }
        ]
    },

    // 22. Main Idea Finder
    "22": {
        id: "22",
        name: "Main Idea Finder",
        description: "Identify the main idea of a text or paragraph",
        icon: Target,
        color: "bg-red-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Paste your text",
                placeholder: "Paste the text here...",
                required: true
            }
        ]
    },

    // 23. Character Analysis
    "23": {
        id: "23",
        name: "Character Analysis",
        description: "Analyze characters from stories you're reading",
        icon: Book,
        color: "bg-indigo-400",
        inputs: [
            {
                id: "character",
                type: "text",
                label: "Character Name",
                placeholder: "e.g., Harry Potter, Katniss Everdeen",
                required: true
            },
            {
                id: "story",
                type: "text",
                label: "Story/Book Name",
                placeholder: "e.g., The Hunger Games",
                required: true
            },
            {
                id: "traits",
                type: "textarea",
                label: "What do you know about this character?",
                placeholder: "Describe what they do or say in the story...",
                required: true
            }
        ]
    },

    // 24. Theme Identifier
    "24": {
        id: "24",
        name: "Theme Identifier",
        description: "Find themes in stories and texts",
        icon: Lightbulb,
        color: "bg-yellow-400",
        inputs: [
            {
                id: "title",
                type: "text",
                label: "Story or Text Title",
                placeholder: "e.g., Romeo and Juliet",
                required: true
            },
            {
                id: "summary",
                type: "textarea",
                label: "Brief Summary",
                placeholder: "What happens in the story?",
                required: true
            }
        ]
    },

    // 25. Figurative Language Detector
    "25": {
        id: "25",
        name: "Figurative Language Detector",
        description: "Identify metaphors, similes, and other figurative language",
        icon: Sparkles,
        color: "bg-pink-400",
        inputs: [
            {
                id: "content",
                type: "textarea",
                label: "Paste the text",
                placeholder: "Paste the text you want to analyze...",
                required: true
            }
        ]
    },

    // 26. Context Clues Helper
    "26": {
        id: "26",
        name: "Context Clues Helper",
        description: "Figure out word meanings using context clues",
        icon: FileSearch,
        color: "bg-cyan-400",
        inputs: [
            {
                id: "sentence",
                type: "textarea",
                label: "Sentence with unknown word",
                placeholder: "Paste the full sentence here...",
                required: true
            },
            {
                id: "word",
                type: "text",
                label: "Unknown Word",
                placeholder: "Which word don't you know?",
                required: true
            }
        ]
    },

    // 27. Math Tutor
    "27": {
        id: "27",
        name: "Math Tutor",
        description: "Get help solving math problems step-by-step",
        icon: Calculator,
        color: "bg-blue-500",
        inputs: [
            {
                id: "grade",
                type: "dropdown",
                label: "Grade Level",
                options: ["Elementary", "Middle School", "High School", "College"],
                defaultValue: "Middle School"
            },
            {
                id: "problem",
                type: "textarea",
                label: "Math Problem",
                placeholder: "Type your math problem here...",
                required: true
            },
            {
                id: "helpType",
                type: "dropdown",
                label: "What do you need help with?",
                options: ["Solve it", "Explain steps", "Check my work"],
                defaultValue: "Explain steps"
            }
        ]
    },

    // 28. Word Problem Solver
    "28": {
        id: "28",
        name: "Word Problem Solver",
        description: "Understand and solve math word problems",
        icon: FileSpreadsheet,
        color: "bg-green-500",
        inputs: [
            {
                id: "problem",
                type: "textarea",
                label: "Word Problem",
                placeholder: "Paste the word problem here...",
                required: true
            },
            {
                id: "outputType",
                type: "dropdown",
                label: "Show me",
                options: ["Steps only", "Answer only", "Both"],
                defaultValue: "Both"
            }
        ]
    },

    // 29. Math Concept Explainer
    "29": {
        id: "29",
        name: "Math Concept Explainer",
        description: "Understand difficult math concepts",
        icon: Lightbulb,
        color: "bg-yellow-500",
        inputs: [
            {
                id: "concept",
                type: "text",
                label: "Math Concept",
                placeholder: "e.g., Fractions, Algebra, Pythagorean Theorem",
                required: true
            },
            {
                id: "question",
                type: "textarea",
                label: "What don't you understand?",
                placeholder: "Explain what part takes you...",
                required: true
            }
        ]
    },

    // 30. Fraction Helper
    "30": {
        id: "30",
        name: "Fraction Helper",
        description: "Work with fractions - add, subtract, multiply, divide",
        icon: PieChart,
        color: "bg-orange-500",
        inputs: [
            {
                id: "fraction1",
                type: "text",
                label: "First Fraction",
                placeholder: "e.g., 1/2",
                required: true
            },
            {
                id: "operation",
                type: "dropdown",
                label: "Operation",
                options: ["Add (+)", "Subtract (-)", "Multiply (×)", "Divide (÷)"],
                defaultValue: "Add (+)"
            },
            {
                id: "fraction2",
                type: "text",
                label: "Second Fraction",
                placeholder: "e.g., 3/4",
                required: true
            }
        ]
    }
}
