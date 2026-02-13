import { ToolConfig } from "./types"
import {
    FileText, CheckCircle, MessageSquare, Zap, Users, Globe, PenTool,
    AlignLeft, Search, Quote, Lightbulb, BookOpen, Check, List,
    RotateCcw, Sparkles, Wand2, Scale, Link,
    Target, Calculator, RotateCw, ListTodo, LayoutGrid, Layers, MessageCircle, CalendarDays, Grid, Heart
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
    // Teacher Tools
    "lesson-plan": {
        id: "lesson-plan",
        name: "Lesson Plan Generator",
        description: "Generate a lesson plan for a topic or objective you're teaching.",
        icon: FileText,
        color: "bg-blue-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade", "University"] },
            { id: "topic", label: "Topic, Standard, or Objective", type: "textarea", placeholder: "e.g., Photosynthesis, Civil Rights Movement, CCSS.ELA-LITERACY.RL.5.1" },
            { id: "additional", label: "Additional Criteria (Optional)", type: "textarea", placeholder: "Include any specific requirements, accommodations, or materials..." },
            { id: "standards", label: "Standards to Align To (Optional)", type: "select", options: ["Common Core", "NGSS", "TEKS", "None"] }
        ]
    },
    "unit-plan": {
        id: "unit-plan",
        name: "Unit Plan Generator",
        description: "Create a multi-lesson unit plan on any topic.",
        icon: Wand2,
        color: "bg-purple-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade", "University"] },
            { id: "topic", label: "Unit Topic", type: "text", placeholder: "e.g., The French Revolution" },
            { id: "lessons", label: "Number of Lessons", type: "select", options: ["3 Lesson Unit", "5 Lesson Unit", "7 Lesson Unit", "10 Lesson Unit"] },
            { id: "standards", label: "Standards", type: "select", options: ["Common Core", "NGSS", "TEKS", "None"] },
            { id: "duration", label: "Unit Duration (Weeks)", type: "text", placeholder: "e.g., 2 weeks" }
        ]
    },
    "5e-model-science": {
        id: "5e-model-science",
        name: "5E Model Science Lesson",
        description: "Design a science lesson using the 5E instructional model (Engage, Explore, Explain, Elaborate, Evaluate).",
        icon: Zap,
        color: "bg-emerald-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade", "University"] },
            { id: "topic", label: "Science Topic", type: "text", placeholder: "e.g., Newton's Laws of Motion" },
            { id: "standards", label: "NGSS Standards (Optional)", type: "text", placeholder: "e.g., MS-PS2-1" },
            { id: "materials", label: "Available Materials (Optional)", type: "textarea", placeholder: "List available lab equipment or materials..." }
        ]
    },
    "presentation-generator": {
        id: "presentation-generator",
        name: "Presentation Generator",
        description: "Generate exportable slides based on any topic, video, or text.",
        icon: FileText, // Presentation icon if available, otherwise FileText or similar
        color: "bg-orange-500",
        inputs: [
            { id: "topic", label: "Presentation Topic", type: "text", placeholder: "e.g., Introduction to Calculus" },
            { id: "slides", label: "Number of Slides", type: "select", options: ["5 Slides", "8 Slides", "10 Slides", "12 Slides", "15 Slides"] },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College", "Professional"] },
            { id: "keyPoints", label: "Key Points to Include (Optional)", type: "textarea", placeholder: "List main ideas to cover..." }
        ]
    },
    "lesson-hook": {
        id: "lesson-hook",
        name: "Lesson Hook Generator",
        description: "Create an engaging hook to start your lesson and grab student attention.",
        icon: Sparkles,
        color: "bg-yellow-500",
        inputs: [
            { id: "topic", label: "Lesson Topic", type: "text", placeholder: "e.g., The Water Cycle" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade", "University"] },
            { id: "type", label: "Hook Type", type: "select", options: ["Question", "Story", "Activity", "Fact", "Video Idea", "Analogy"] }
        ]
    },
    "standards-unpacker": {
        id: "standards-unpacker",
        name: "Standards Unpacker",
        description: "Break down standards into student-friendly language and learning targets.",
        icon: Search,
        color: "bg-indigo-500",
        inputs: [
            { id: "standardSet", label: "State/Standards Set", type: "select", options: ["Common Core ELA", "Common Core Math", "NGSS", "TEKS", "Virginia SOL", "Florida BEST"] },
            { id: "code", label: "Standard Code/Text", type: "text", placeholder: "e.g., CCSS.MATH.CONTENT.5.NBT.A.1" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade"] }
        ]
    },
    "accommodation-suggestions": {
        id: "accommodation-suggestions",
        name: "Accommodation Suggestions",
        description: "Get ideas for accommodating students with diverse needs.",
        icon: Users,
        color: "bg-teal-500",
        inputs: [
            { id: "challenge", label: "Student Need/Challenge", type: "textarea", placeholder: "e.g., Difficulty focusing, processing auditory information, dyslexia..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "subject", label: "Subject Area", type: "text", placeholder: "e.g., Math, Reading" },
            { id: "activity", label: "Activity Type", type: "select", options: ["Independent Work", "Group Work", "Assessment", "Lecture", "Reading"] }
        ]
    },
    "assignment-scaffolder": {
        id: "assignment-scaffolder",
        name: "Assignment Scaffolder",
        description: "Break down complex assignments into manageable steps.",
        icon: List,
        color: "bg-cyan-500",
        inputs: [
            { id: "description", label: "Assignment Description", type: "textarea", placeholder: "Describe the complex task..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "steps", label: "Number of Steps", type: "select", options: ["3 Steps", "5 Steps", "7 Steps", "10 Steps"] }
        ]
    },
    "text-leveler": {
        id: "text-leveler",
        name: "Text Leveler",
        description: "Rewrite any text at different reading levels.",
        icon: Scale,
        color: "bg-rose-500",
        inputs: [
            { id: "text", label: "Original Text", type: "textarea", placeholder: "Paste the text you want to level..." },
            { id: "currentLevel", label: "Current Reading Level", type: "select", options: ["1st Grade", "3rd Grade", "5th Grade", "8th Grade", "High School", "College", "Professional"] },
            { id: "targetLevel", label: "Target Reading Level", type: "select", options: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "High School"] },
            { id: "preserve", label: "Preserve Key Terms?", type: "select", options: ["Yes", "No"] }
        ]
    },
    "vocabulary-scaffolder": {
        id: "vocabulary-scaffolder",
        name: "Vocabulary Scaffolder",
        description: "Create tiered vocabulary lists with student-friendly definitions.",
        icon: BookOpen,
        color: "bg-fuchsia-500",
        inputs: [
            { id: "text", label: "Topic or Text", type: "textarea", placeholder: "Paste text or enter a topic..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "count", label: "Number of Words", type: "select", options: ["10 Words", "15 Words", "20 Words"] },
            { id: "tier", label: "Tier Level", type: "select", options: ["Tier 1 (Basic)", "Tier 2 (High Frequency/Cross-Curricular)", "Tier 3 (Domain Specific)", "Mixed"] }
        ]
    },

    "make-it-relevant": {
        id: "make-it-relevant",
        name: "Make It Relevant",
        description: "Adapt content to connect with student interests and backgrounds.",
        icon: Target,
        color: "bg-red-500",
        inputs: [
            { id: "topic", label: "Content/Topic", type: "textarea", placeholder: "e.g., Quadratic Equations, The Great Depression" },
            { id: "interests", label: "Student Interests", type: "text", placeholder: "e.g., Video Games, Basketball, Anime, Pop Music" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "background", label: "Cultural Background (Optional)", type: "text", placeholder: "e.g., Urban setting, specific cultural group..." }
        ]
    },
    "math-story-problem": {
        id: "math-story-problem",
        name: "Math Story Problem Generator",
        description: "Create word problems for any math concept with real-world context.",
        icon: Calculator,
        color: "bg-blue-600",
        inputs: [
            { id: "concept", label: "Math Concept", type: "text", placeholder: "e.g., Fractions, Pythagorean Theorem" },
            { id: "grade", label: "Grade Level", type: "select", options: ["1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "High School"] },
            { id: "count", label: "Number of Problems", type: "select", options: ["5 Problems", "10 Problems", "15 Problems"] },
            { id: "difficulty", label: "Difficulty", type: "select", options: ["Easy", "Medium", "Hard"] },
            { id: "context", label: "Real-World Context (Optional)", type: "text", placeholder: "e.g., Cooking, Space Travel, Shopping" }
        ]
    },
    "math-spiral-review": {
        id: "math-spiral-review",
        name: "Math Spiral Review",
        description: "Generate practice problems that review multiple concepts.",
        icon: RotateCw,
        color: "bg-indigo-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade", "6th Grade", "7th Grade", "8th Grade", "High School"] },
            { id: "concepts", label: "Math Concepts to Include", type: "textarea", placeholder: "e.g., Multiplication, Division, Fractions, Geometry" },
            { id: "count", label: "Number of Problems per Concept", type: "select", options: ["2", "3", "4", "5"] }
        ]
    },
    "project-outline": {
        id: "project-outline",
        name: "Project Outline Generator",
        description: "Create a structured outline and timeline for student projects.",
        icon: ListTodo,
        color: "bg-orange-600",
        inputs: [
            { id: "topic", label: "Project Topic", type: "text", placeholder: "e.g., Renewable Energy Solutions" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "type", label: "Project Type", type: "select", options: ["Research Paper", "Presentation", "Creative Project", "Science Experiment", "Debate"] },
            { id: "duration", label: "Project Duration", type: "select", options: ["1 Week", "2 Weeks", "3 Weeks", "4 Weeks", "Semester"] }
        ]
    },
    "choice-board": {
        id: "choice-board",
        name: "Choice Board Generator",
        description: "Create a choice board with differentiated activity options.",
        icon: LayoutGrid,
        color: "bg-pink-500",
        inputs: [
            { id: "objective", label: "Learning Objective", type: "textarea", placeholder: "e.g., Students will understand the causes of WWI" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "size", label: "Board Size", type: "select", options: ["3x3 (9 options)", "4x4 (16 options)"] },
            { id: "activities", label: "Activity Types to Include", type: "textarea", placeholder: "e.g., Writing, Drawing, Digital, Performance..." }
        ]
    },
    "dok-questions": {
        id: "dok-questions",
        name: "DOK Questions Generator",
        description: "Generate questions at different Depth of Knowledge (DOK) levels.",
        icon: Layers,
        color: "bg-purple-600",
        inputs: [
            { id: "topic", label: "Topic or Text", type: "textarea", placeholder: "Enter topic or paste text..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "levels", label: "DOK Levels Needed", type: "select", options: ["Level 1 (Recall)", "Level 2 (Skill/Concept)", "Level 3 (Strategic Thinking)", "Level 4 (Extended Thinking)", "All Levels"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["3", "5", "8", "10"] }
        ]
    },
    "discussion-questions": {
        id: "discussion-questions",
        name: "Discussion Questions",
        description: "Create thought-provoking discussion questions for class.",
        icon: MessageCircle,
        color: "bg-teal-600",
        inputs: [
            { id: "topic", label: "Discussion Topic or Text", type: "textarea", placeholder: "Enter topic or paste text..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "type", label: "Question Type", type: "select", options: ["Open-ended", "Socratic Seminar", "Debate", "Analysis", "Personal Connection"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["3", "5", "8", "10"] }
        ]
    },
    "class-syllabus": {
        id: "class-syllabus",
        name: "Class Syllabus Generator",
        description: "Generate a comprehensive course syllabus.",
        icon: BookOpen,
        color: "bg-slate-700",
        inputs: [
            { id: "course", label: "Course Name", type: "text", placeholder: "e.g., AP U.S. History" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Middle School", "High School", "College"] },
            { id: "grading", label: "Grading Policy", type: "textarea", placeholder: "e.g., 40% Tests, 30% Projects, 20% Homework, 10% Participation" },
            { id: "policies", label: "School/Class Policies", type: "textarea", placeholder: "e.g., Late work, cell phones, attendance..." }
        ]
    },
    "weekly-agenda": {
        id: "weekly-agenda",
        name: "Weekly Agenda Generator",
        description: "Create a structured weekly class agenda.",
        icon: CalendarDays,
        color: "bg-green-600",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "subject", label: "Subject", type: "text", placeholder: "e.g., Algebra 1" },
            { id: "topics", label: "Topics for the Week", type: "textarea", placeholder: "What are you covering this week?" },
            { id: "events", label: "Special Events/Notes", type: "text", placeholder: "e.g., Assembly on Friday, Quiz on Wednesday" }
        ]
    },
    "learning-stations": {
        id: "learning-stations",
        name: "Learning Station Activities",
        description: "Design activities for rotation learning stations/centers.",
        icon: Grid,
        color: "bg-yellow-600",
        inputs: [
            { id: "objective", label: "Learning Objective", type: "textarea", placeholder: "What should students learn?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "count", label: "Number of Stations", type: "select", options: ["3 Stations", "4 Stations", "5 Stations", "6 Stations"] },
            { id: "materials", label: "Available Materials (Optional)", type: "textarea", placeholder: "e.g., Tablets, whiteboards, manipulatives, art supplies..." }
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
