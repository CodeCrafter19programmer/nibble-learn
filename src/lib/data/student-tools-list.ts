import {
    Search, Sparkles, BookOpen, PenTool, Calculator, MessageSquare, Music, Video, Star,
    FileText, AlignLeft, Quote, Target, ArrowRight, CheckCircle, PenLine, Check, Minimize2,
    RefreshCw, Zap, Mail, Scale, FileSearch, Link as LinkIcon, BookA, BookOpenCheck, Volume2, ArrowDown,
    Focus, UserSearch, Lightbulb, BrainCircuit, PieChart, Triangle, Sigma,
    Bot, Users, ClipboardCheck, Layers, FileInput, FileMinus, ClipboardList, Brain,
    Book, Feather, Image as ImageIcon, Presentation, UserPlus, Terminal, Hourglass,
    CloudLightning, Languages, ShieldCheck, StickyNote, LifeBuoy, Calendar, MessageSquarePlus,
    Filter, ChevronDown, Flame, TrendingUp, X
} from "lucide-react"

export const categories = [
    { id: "all", label: "All Tools" },
    { id: "writing", label: "Writing & Research" },
    { id: "reading", label: "Reading & Learning" },
    { id: "math", label: "Math Help" },
    { id: "study", label: "Study Tools" },
    { id: "creative", label: "Creative Tools" },
    { id: "ai", label: "AI Literacy" },
]

export const studentTools = [
    // Writing & Research
    { id: 1, name: "Essay Outliner", category: "writing", icon: FileText, color: "bg-blue-100 text-blue-600", desc: "Create an outline for your essay with main points." },
    { id: 2, name: "Paragraph Generator", category: "writing", icon: AlignLeft, color: "bg-blue-100 text-blue-600", desc: "Generate a paragraph to help you get started." },
    { id: 3, name: "Research Assistant", category: "writing", icon: FileSearch, color: "bg-blue-100 text-blue-600", desc: "Find information and sources for your project." },
    { id: 4, name: "Citation Helper", category: "writing", icon: Quote, color: "bg-blue-100 text-blue-600", desc: "Create citations in MLA or APA format." },
    { id: 5, name: "Thesis Statement", category: "writing", icon: Target, color: "bg-blue-100 text-blue-600", desc: "Create a strong thesis statement for your essay." },
    { id: 6, name: "Intro Writer", category: "writing", icon: ArrowRight, color: "bg-blue-100 text-blue-600", desc: "Generate an engaging introduction." },
    { id: 7, name: "Conclusion Writer", category: "writing", icon: CheckCircle, color: "bg-blue-100 text-blue-600", desc: "Write a strong conclusion for your essay." },
    { id: 8, name: "Sentence Starter", category: "writing", icon: PenLine, color: "bg-blue-100 text-blue-600", desc: "Get ideas for starting your sentences." },
    { id: 9, name: "Grammar Check", category: "writing", icon: Check, color: "bg-blue-100 text-blue-600", desc: "Check your writing for simple mistakes." },
    { id: 10, name: "Writing Feedback", category: "writing", icon: MessageSquare, color: "bg-blue-100 text-blue-600", desc: "Get feedback on your writing.", isHot: true },
    { id: 11, name: "Text Summarizer", category: "writing", icon: Minimize2, color: "bg-blue-100 text-blue-600", desc: "Summarize long texts to understand main ideas." },
    { id: 12, name: "Text Rewriter", category: "writing", icon: RefreshCw, color: "bg-blue-100 text-blue-600", desc: "Rewrite text in your own words." },
    { id: 13, name: "Word Choice", category: "writing", icon: Zap, color: "bg-blue-100 text-blue-600", desc: "Find better words to make writing stronger." },
    { id: 14, name: "Email Writer", category: "writing", icon: Mail, color: "bg-blue-100 text-blue-600", desc: "Write a professional email to your teacher." },
    { id: 15, name: "Counter-Argument", category: "writing", icon: Scale, color: "bg-blue-100 text-blue-600", desc: "Find opposing views for your essay." },
    { id: 16, name: "Evidence Finder", category: "writing", icon: FileSearch, color: "bg-blue-100 text-blue-600", desc: "Get ideas for evidence to support claims." },
    { id: 17, name: "Transition Words", category: "writing", icon: LinkIcon, color: "bg-blue-100 text-blue-600", desc: "Find words to connect your ideas." },
    { id: 18, name: "Vocabulary Builder", category: "writing", icon: BookA, color: "bg-blue-100 text-blue-600", desc: "Learn new words related to your topic." },

    // Reading & Learning
    { id: 19, name: "Reading Comp.", category: "reading", icon: BookOpenCheck, color: "bg-emerald-100 text-emerald-600", desc: "Answer questions to check understanding." },
    { id: 20, name: "Text-to-Speech", category: "reading", icon: Volume2, color: "bg-emerald-100 text-emerald-600", desc: "Listen to text read aloud." },
    { id: 21, name: "Text Simplifier", category: "reading", icon: ArrowDown, color: "bg-emerald-100 text-emerald-600", desc: "Make difficult text easier to understand." },
    { id: 22, name: "Main Idea Finder", category: "reading", icon: Focus, color: "bg-emerald-100 text-emerald-600", desc: "Identify the main idea of a text." },
    { id: 23, name: "Character Analysis", category: "reading", icon: UserSearch, color: "bg-emerald-100 text-emerald-600", desc: "Analyze characters from stories." },
    { id: 24, name: "Theme Identifier", category: "reading", icon: Lightbulb, color: "bg-emerald-100 text-emerald-600", desc: "Find themes in stories and texts." },
    { id: 25, name: "Figurative Lang.", category: "reading", icon: Sparkles, color: "bg-emerald-100 text-emerald-600", desc: "Identify metaphors and similes." },
    { id: 26, name: "Context Clues", category: "reading", icon: Search, color: "bg-emerald-100 text-emerald-600", desc: "Figure out word meanings from context." },

    // Math Help
    { id: 27, name: "Math Tutor", category: "math", icon: Calculator, color: "bg-orange-100 text-orange-600", desc: "Get help solving math problems step-by-step." },
    { id: 28, name: "Word Problems", category: "math", icon: FileText, color: "bg-orange-100 text-orange-600", desc: "Understand and solve math word problems." },
    { id: 29, name: "Concept Explainer", category: "math", icon: BrainCircuit, color: "bg-orange-100 text-orange-600", desc: "Understand difficult math concepts." },
    { id: 30, name: "Fraction Helper", category: "math", icon: PieChart, color: "bg-orange-100 text-orange-600", desc: "Work with fractions easily." },
    { id: 31, name: "Geometry Helper", category: "math", icon: Triangle, color: "bg-orange-100 text-orange-600", desc: "Calculate area, perimeter, and volume." },
    { id: 32, name: "Formula Ref.", category: "math", icon: Sigma, color: "bg-orange-100 text-orange-600", desc: "Look up math formulas you need." },

    // Study Tools
    { id: 33, name: "AI Tutor", category: "study", icon: Bot, color: "bg-violet-100 text-violet-600", desc: "Ask questions on any subject.", isHot: true },
    { id: 34, name: "Study Partner", category: "study", icon: Users, color: "bg-violet-100 text-violet-600", desc: "Use AI as a study buddy." },
    { id: 35, name: "Quiz Yourself", category: "study", icon: ClipboardCheck, color: "bg-violet-100 text-violet-600", desc: "Create a practice quiz on any topic." },
    { id: 36, name: "Flashcards", category: "study", icon: Layers, color: "bg-violet-100 text-violet-600", desc: "Make flashcards to help you study." },
    { id: 37, name: "Study Guide", category: "study", icon: FileInput, color: "bg-violet-100 text-violet-600", desc: "Create a study guide for your test." },
    { id: 38, name: "Note Summarizer", category: "study", icon: FileMinus, color: "bg-violet-100 text-violet-600", desc: "Turn notes into a quick summary." },
    { id: 39, name: "Test Prep", category: "study", icon: ClipboardList, color: "bg-violet-100 text-violet-600", desc: "Practice questions for upcoming tests." },
    { id: 40, name: "Memory Tricks", category: "study", icon: Brain, color: "bg-violet-100 text-violet-600", desc: "Get ideas for remembering information." },

    // Creative Tools
    { id: 41, name: "Story Generator", category: "creative", icon: Book, color: "bg-pink-100 text-pink-600", desc: "Create creative stories with AI." },
    { id: 42, name: "Poem Writer", category: "creative", icon: Feather, color: "bg-pink-100 text-pink-600", desc: "Write poems about any topic." },
    { id: 43, name: "Image Generator", category: "creative", icon: ImageIcon, color: "bg-pink-100 text-pink-600", desc: "Create images regarding your prompt.", isHot: true },
    { id: 44, name: "Project Ideas", category: "creative", icon: Lightbulb, color: "bg-pink-100 text-pink-600", desc: "Get ideas for school projects." },
    { id: 45, name: "Slides Helper", category: "creative", icon: Presentation, color: "bg-pink-100 text-pink-600", desc: "Create an outline for your presentation." },
    { id: 46, name: "Writing Prompts", category: "creative", icon: PenTool, color: "bg-pink-100 text-pink-600", desc: "Get ideas for creative writing." },
    { id: 47, name: "Character Creator", category: "creative", icon: UserPlus, color: "bg-pink-100 text-pink-600", desc: "Develop characters for your stories." },
    { id: 48, name: "Rhyme Finder", category: "creative", icon: Music, color: "bg-pink-100 text-pink-600", desc: "Find words that rhyme." },

    // AI Literacy
    { id: 49, name: "Ask About AI", category: "ai", icon: Bot, color: "bg-indigo-100 text-indigo-600", desc: "Learn how AI works." },
    { id: 50, name: "Prompt Helper", category: "ai", icon: Terminal, color: "bg-indigo-100 text-indigo-600", desc: "Learn to write better prompts." },
    { id: 52, name: "Character Chat", category: "ai", icon: MessageSquarePlus, color: "bg-indigo-100 text-indigo-600", desc: "Chat with a book character.", isHot: true },
    { id: 53, name: "Custom Chatbot", category: "ai", icon: Bot, color: "bg-indigo-100 text-indigo-600", desc: "Build a chatbot on any topic.", isHot: true },
    { id: 54, name: "Idea Generator", category: "ai", icon: CloudLightning, color: "bg-indigo-100 text-indigo-600", desc: "Brainstorm ideas on any topic." },
    { id: 55, name: "Translator", category: "ai", icon: Languages, color: "bg-indigo-100 text-indigo-600", desc: "Translate text to other languages." },
    { id: 56, name: "Source Eval", category: "ai", icon: ShieldCheck, color: "bg-indigo-100 text-indigo-600", desc: "Learn if a source is reliable." },
    { id: 57, name: "Note Template", category: "ai", icon: StickyNote, color: "bg-indigo-100 text-indigo-600", desc: "Organize your notes better." },
    { id: 58, name: "Homework Helper", category: "ai", icon: LifeBuoy, color: "bg-indigo-100 text-indigo-600", desc: "Get help understanding homework." },
    { id: 59, name: "Time Planner", category: "ai", icon: Calendar, color: "bg-indigo-100 text-indigo-600", desc: "Plan your study time." },
    { id: 60, name: "Peer Feedback", category: "ai", icon: MessageSquarePlus, color: "bg-indigo-100 text-indigo-600", desc: "Give helpful feedback to classmates." },
]
