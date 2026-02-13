import { ToolConfig } from "./types"
import {
    FileText, CheckCircle, MessageSquare, Zap, Users, Globe, PenTool,
    AlignLeft, Search, Quote, Lightbulb, BookOpen, Check, List,
    RotateCcw, Sparkles, Wand2, Scale, Link,
    Target, Calculator, RotateCw, ListTodo, LayoutGrid, Layers, MessageCircle, CalendarDays, Grid, Heart,
    ListChecks, Table, ShieldCheck, PenSquare, FileQuestion, Ticket, ArrowRight, ClipboardList, UserCheck, Users2,
    FileMinus, AlertTriangle, BookOpenCheck, XCircle, Trophy, Mail, Newspaper, Scroll, Phone, MessageSquarePlus,
    Minimize2, RefreshCw, Languages, SpellCheck, Music, Smile, Snowflake, Gift, Youtube, Bell, DoorOpen, FlaskConical, GitCompare, BarChart2, AlertCircle, ArrowUp, Bot, Wrench, Files, FileSpreadsheet
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

    "real-world-scenarios": {
        id: "real-world-scenarios",
        name: "Real-World Scenarios",
        description: "Create authentic, real-world scenarios for learning.",
        icon: Globe,
        color: "bg-emerald-600",
        inputs: [
            { id: "concept", label: "Academic Concept", type: "text", placeholder: "e.g., Ratios, Photosynthesis, Haiku" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "career", label: "Career/Field Connection (Optional)", type: "text", placeholder: "e.g., Architecture, Medicine, Journalism" }
        ]
    },
    // Assessment Tools
    "multiple-choice-quiz": {
        id: "multiple-choice-quiz",
        name: "Multiple Choice Quiz Generator",
        description: "Create a multiple choice assessment, quiz, or test based on any topic.",
        icon: ListChecks,
        color: "bg-blue-500",
        inputs: [
            { id: "topic", label: "Topic or Standard", type: "textarea", placeholder: "e.g., The Solar System, CCSS.MATH.CONTENT.7.RP.A.1" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["5 Questions", "10 Questions", "15 Questions", "20 Questions"] },
            { id: "difficulty", label: "Difficulty Level", type: "select", options: ["Easy", "Medium", "Hard", "Mixed"] },
            { id: "dok", label: "DOK Level (Optional)", type: "select", options: ["Level 1", "Level 2", "Level 3", "Mixed"] }
        ]
    },
    "rubric-generator": {
        id: "rubric-generator",
        name: "Rubric Generator",
        description: "Have AI write a rubric for an assignment in a table format.",
        icon: Table,
        color: "bg-purple-500",
        inputs: [
            { id: "description", label: "Assignment Description", type: "textarea", placeholder: "e.g., Write a persuasive essay about recycling..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "criteria", label: "Number of Criteria", type: "select", options: ["3 Criteria", "4 Criteria", "5 Criteria", "6 Criteria"] },
            { id: "scale", label: "Performance Levels", type: "select", options: ["3-Level Scale", "4-Level Scale", "5-Level Scale"] }
        ]
    },
    "report-card-comments": {
        id: "report-card-comments",
        name: "Report Card Comments",
        description: "Generate report card comments with student's strengths and areas for growth.",
        icon: ShieldCheck,
        color: "bg-orange-500",
        inputs: [
            { id: "subject", label: "Subject Area", type: "text", placeholder: "e.g., Mathematics, Reading, Conduct" },
            { id: "strengths", label: "Student Strengths", type: "textarea", placeholder: "e.g., Participates well, improved visuals, kind to others..." },
            { id: "growth", label: "Areas for Growth", type: "textarea", placeholder: "e.g., Turning in homework, focus during lessons..." },
            { id: "tone", label: "Tone", type: "select", options: ["Positive", "Encouraging", "Constructive", "Professional"] }
        ]
    },
    "writing-feedback": {
        id: "writing-feedback",
        name: "Writing Feedback",
        description: "Give areas of strength & areas for growth on student work based on criteria.",
        icon: PenSquare,
        color: "bg-pink-500",
        inputs: [
            { id: "text", label: "Student Writing", type: "textarea", placeholder: "Paste student work here..." },
            { id: "rubric", label: "Assignment Criteria/Rubric", type: "textarea", placeholder: "What were the requirements?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "College"] },
            { id: "focus", label: "Focus Areas", type: "text", placeholder: "e.g., Grammar, Organization, Evidence" }
        ]
    },
    "text-dependent-questions": {
        id: "text-dependent-questions",
        name: "Text-Dependent Questions",
        description: "Create questions tied directly to a reading passage.",
        icon: FileQuestion,
        color: "bg-teal-500",
        inputs: [
            { id: "text", label: "Text/Passage", type: "textarea", placeholder: "Paste the reading passage here..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["3", "5", "8", "10"] },
            { id: "types", label: "Question Types", type: "text", placeholder: "e.g., Literal, Inferential, Evaluative" }
        ]
    },
    "exit-ticket": {
        id: "exit-ticket",
        name: "Exit Ticket Generator",
        description: "Create quick formative assessments to check understanding.",
        icon: Ticket,
        color: "bg-red-500",
        inputs: [
            { id: "topic", label: "Lesson Topic", type: "text", placeholder: "e.g., The Water Cycle" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Exit Ticket Type", type: "select", options: ["Questions", "Reflection", "Application", "Summary"] }
        ]
    },
    "clear-directions": {
        id: "clear-directions",
        name: "Clear Directions",
        description: "Rewrite instructions to be clearer for students.",
        icon: ArrowRight,
        color: "bg-indigo-500",
        inputs: [
            { id: "directions", label: "Original Directions", type: "textarea", placeholder: "Paste prompt or instructions here..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "simplify", label: "Simplify For (Optional)", type: "select", options: ["General Student", "ELL/ESL", "Special Education", "Younger Students"] }
        ]
    },
    "assignment-ideas": {
        id: "assignment-ideas",
        name: "Assignment Ideas Generator",
        description: "Get creative assignment ideas for any topic.",
        icon: Lightbulb,
        color: "bg-yellow-500",
        inputs: [
            { id: "topic", label: "Topic or Standard", type: "text", placeholder: "e.g., Ancient Rome, Fractions" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Assignment Type", type: "select", options: ["Individual", "Group Project", "Creative", "Research", "Presentation"] }
        ]
    },
    "performance-task": {
        id: "performance-task",
        name: "Performance Task Designer",
        description: "Design authentic performance assessments.",
        icon: ClipboardList,
        color: "bg-cyan-600",
        inputs: [
            { id: "target", label: "Standard or Learning Target", type: "textarea", placeholder: "e.g., Students can analyze data..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "context", label: "Real-World Connection", type: "text", placeholder: "e.g., Environmental Scientist, City Planner" }
        ]
    },
    "self-assessment": {
        id: "self-assessment",
        name: "Self-Assessment Tool",
        description: "Create student self-reflection and self-assessment tools.",
        icon: UserCheck,
        color: "bg-green-500",
        inputs: [
            { id: "objective", label: "Learning Objective", type: "textarea", placeholder: "What should students reflect on?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "format", label: "Assessment Format", type: "select", options: ["Checklist", "Rating Scale", "Reflection Questions", "Goal Setting"] }
        ]
    },
    "peer-review": {
        id: "peer-review",
        name: "Peer Review Guidelines",
        description: "Generate guidelines for students to give peer feedback.",
        icon: Users2,
        color: "bg-fuchsia-600",
        inputs: [
            { id: "type", label: "Assignment Type", type: "text", placeholder: "e.g., Persuasive Essay, Poster, Presentation" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "focus", label: "Focus Areas for Feedback", type: "textarea", placeholder: "e.g., Clarity, specific evidence, eye contact..." }
        ]
    },

    "iep-generator": {
        id: "iep-generator",
        name: "IEP Generator",
        description: "Generate a draft of an IEP customized to a student's needs.",
        icon: FileMinus,
        color: "bg-orange-600",
        inputs: [
            { id: "grade", label: "Student Age/Grade", type: "text", placeholder: "e.g., 3rd Grade, Age 9" },
            { id: "disability", label: "Disability Category", type: "select", options: ["Specific Learning Disability", "Autism", "OHI", "Emotional Disturbance", "Speech/Language", "Other"] },
            { id: "performance", label: "Current Performance Levels", type: "textarea", placeholder: "Describe current academic and functional performance..." },
            { id: "needs", label: "Areas of Need", type: "textarea", placeholder: "List specific areas where the student needs support..." }
        ]
    },
    "bip-generator": {
        id: "bip-generator",
        name: "BIP Generator",
        description: "Create a Behavior Intervention Plan (BIP) with strategies.",
        icon: AlertTriangle,
        color: "bg-red-600",
        inputs: [
            { id: "grade", label: "Student Age/Grade", type: "text", placeholder: "e.g., 5th Grade" },
            { id: "behavior", label: "Behavior of Concern", type: "textarea", placeholder: "Describe the behavior..." },
            { id: "function", label: "Function of Behavior", type: "select", options: ["Access Attention", "Access Tangible", "Escape/Avoidance", "Sensory"] },
            { id: "data", label: "Data on Behavior (Optional)", type: "textarea", placeholder: "Frequency, duration, intensity..." }
        ]
    },
    "behavior-intervention-suggestions": {
        id: "behavior-intervention-suggestions",
        name: "Behavior Intervention Suggestions",
        description: "Get strategies for managing specific behaviors.",
        icon: Lightbulb,
        color: "bg-yellow-600",
        inputs: [
            { id: "behavior", label: "Behavior Description", type: "textarea", placeholder: "e.g., Calling out, refusal to work, aggression..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "context", label: "Context (When it occurs)", type: "text", placeholder: "e.g., During transitions, difficult tasks..." }
        ]
    },
    "social-story": {
        id: "social-story",
        name: "Social Story Creator",
        description: "Generate social stories to help students understand situations.",
        icon: BookOpenCheck,
        color: "bg-blue-400",
        inputs: [
            { id: "age", label: "Student Age", type: "text", placeholder: "e.g., 6 years old" },
            { id: "situation", label: "Social Situation/Skill", type: "textarea", placeholder: "e.g., Asking to play, Losing a game, Fire drill" },
            { id: "behavior", label: "Desired Behavior", type: "textarea", placeholder: "What should the student do?" }
        ]
    },
    "exemplar-non-exemplar": {
        id: "exemplar-non-exemplar",
        name: "Exemplar & Non-Exemplar",
        description: "Create clear examples and non-examples for teaching concepts.",
        icon: XCircle,
        color: "bg-green-600",
        inputs: [
            { id: "concept", label: "Concept or Skill", type: "text", placeholder: "e.g., Living vs. Non-living, Thesis Statement" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "count", label: "Number of Each", type: "select", options: ["3 Pairs", "5 Pairs", "8 Pairs"] }
        ]
    },
    "intervention-strategies": {
        id: "intervention-strategies",
        name: "Intervention Strategies",
        description: "Get targeted intervention ideas for struggling students.",
        icon: Target,
        color: "bg-purple-600",
        inputs: [
            { id: "gap", label: "Skill Gap/Challenge", type: "textarea", placeholder: "e.g., Difficulty decoding multi-syllabic words..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "subject", label: "Subject Area", type: "text", placeholder: "e.g., Reading, Math" }
        ]
    },
    "gifted-extension": {
        id: "gifted-extension",
        name: "Gifted Education Extension",
        description: "Create extension activities for advanced learners.",
        icon: Trophy,
        color: "bg-amber-500",
        inputs: [
            { id: "topic", label: "Topic/Standard", type: "text", placeholder: "e.g., The Solar System" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "interest", label: "Student Interest Areas (Optional)", type: "text", placeholder: "e.g., Robotics, Art" }
        ]
    },
    // Communication Tools
    "professional-email": {
        id: "professional-email",
        name: "Professional Email",
        description: "Generate a professional email for parents, colleagues, or admin.",
        icon: Mail,
        color: "bg-indigo-600",
        inputs: [
            { id: "purpose", label: "Email Purpose/Recipient", type: "select", options: ["Parent Communication", "Admin Request", "Colleague Collaboration", "Community Partner"] },
            { id: "points", label: "Key Points to Include", type: "textarea", placeholder: "What needs to be communicated?" },
            { id: "tone", label: "Tone", type: "select", options: ["Professional", "Friendly", "Formal", "Urgent", "Empathetic"] }
        ]
    },
    "family-newsletter": {
        id: "family-newsletter",
        name: "Family Newsletter",
        description: "Create a newsletter to update families on class activities.",
        icon: Newspaper,
        color: "bg-teal-500",
        inputs: [
            { id: "grade", label: "Grade Level/Class", type: "text", placeholder: "e.g., 2nd Grade, Mr. Smith's Class" },
            { id: "topics", label: "Topics/Highlights", type: "textarea", placeholder: "What did you do this week?" },
            { id: "period", label: "Newsletter Period", type: "select", options: ["Weekly", "Monthly", "Quarterly"] },
            { id: "events", label: "Upcoming Events (Optional)", type: "text", placeholder: "e.g., Field trip next Friday..." }
        ]
    },
    "letter-of-recommendation": {
        id: "letter-of-recommendation",
        name: "Letter of Recommendation",
        description: "Generate a strong letter of recommendation for a student.",
        icon: Scroll,
        color: "bg-slate-600",
        inputs: [
            { id: "student", label: "Student Name", type: "text", placeholder: "Student's Name" },
            { id: "context", label: "Context (College, Job, etc.)", type: "text", placeholder: "e.g., College Application, Summer Program" },
            { id: "strengths", label: "Student Strengths", type: "textarea", placeholder: "e.g., Leadership, work ethic..." },
            { id: "achievements", label: "Specific Achievements (Optional)", type: "textarea", placeholder: "e.g., Won science fair, captain of debate team..." }
        ]
    },
    "positive-phone-call": {
        id: "positive-phone-call",
        name: "Positive Phone Call Script",
        description: "Get talking points for positive calls home to parents.",
        icon: Phone,
        color: "bg-green-500",
        inputs: [
            { id: "strengths", label: "Student Strengths/Successes", type: "textarea", placeholder: "What positive thing happened?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] }
        ]
    },
    "parent-teacher-conference": {
        id: "parent-teacher-conference",
        name: "Conference Script",
        description: "Prepare a script and talking points for parent-teacher conferences.",
        icon: MessageSquarePlus,
        color: "bg-blue-500",
        inputs: [
            { id: "topics", label: "Topics to Discuss", type: "textarea", placeholder: "e.g., Grades, Behavior, Social Skills..." },
            { id: "strengths", label: "Student Strengths", type: "textarea", placeholder: "Positive attributes..." },
            { id: "concerns", label: "Areas of Concern", type: "textarea", placeholder: "Areas needing improvement..." }
        ]
    },

    "text-summarizer": {
        id: "text-summarizer",
        name: "Text Summarizer",
        description: "Summarize long texts to get the main ideas quickly.",
        icon: Minimize2,
        color: "bg-violet-500",
        inputs: [
            { id: "text", label: "Text to Summarize", type: "textarea", placeholder: "Paste text here..." },
            { id: "length", label: "Summary Length", type: "select", options: ["Brief", "Moderate", "Detailed"] },
            { id: "format", label: "Format", type: "select", options: ["Paragraph", "Bullet Points"] }
        ]
    },
    "text-rewriter": {
        id: "text-rewriter",
        name: "Text Rewriter",
        description: "Take any text and rewrite it with custom criteria.",
        icon: RefreshCw,
        color: "bg-fuchsia-500",
        inputs: [
            { id: "text", label: "Original Text", type: "textarea", placeholder: "Paste text..." },
            { id: "criteria", label: "How to Rewrite", type: "select", options: ["Simpler", "More Formal", "Different Tone", "Concise"] },
            { id: "notes", label: "Additional Instructions", type: "text", placeholder: "e.g., Use active voice..." }
        ]
    },
    "text-translator": {
        id: "text-translator",
        name: "Text Translator",
        description: "Translate text into 30+ languages.",
        icon: Languages,
        color: "bg-blue-400",
        inputs: [
            { id: "text", label: "Text to Translate", type: "textarea", placeholder: "Paste text..." },
            { id: "language", label: "To Language", type: "select", options: ["Spanish", "French", "German", "Chinese (Mandarin)", "Arabic", "Russian", "Portuguese", "Japanese", "Korean", "Vietnamese", "Hindi"] }
        ]
    },
    "text-proofreader": {
        id: "text-proofreader",
        name: "Text Proofreader",
        description: "Check and correct grammar, spelling, and punctuation.",
        icon: SpellCheck,
        color: "bg-green-500",
        inputs: [
            { id: "text", label: "Text to Proofread", type: "textarea", placeholder: "Paste text..." }
        ]
    },
    "song-lyrics": {
        id: "song-lyrics",
        name: "Song Lyrics Generator",
        description: "Create educational song lyrics to teach concepts.",
        icon: Music,
        color: "bg-pink-500",
        inputs: [
            { id: "topic", label: "Topic to Teach", type: "text", placeholder: "e.g., The Water Cycle" },
            { id: "style", label: "Song Style", type: "select", options: ["Pop", "Rap", "Country", "Rock", "Musical Theater"] },
            { id: "concepts", label: "Key Concepts to Include", type: "textarea", placeholder: "List keywords or ideas..." }
        ]
    },
    "joke-generator": {
        id: "joke-generator",
        name: "Joke Generator",
        description: "Generate age-appropriate jokes for your class.",
        icon: Smile,
        color: "bg-yellow-400",
        inputs: [
            { id: "topic", label: "Topic (Optional)", type: "text", placeholder: "e.g., Math, Science, School" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Joke Type", type: "select", options: ["Puns", "Riddles", "Knock-knock", "Any"] }
        ]
    },
    "saying-simplifier": {
        id: "saying-simplifier",
        name: "Saying Simplifier",
        description: "Explain idioms and figurative language simply.",
        icon: MessageCircle,
        color: "bg-teal-500",
        inputs: [
            { id: "idiom", label: "Idiom or Saying", type: "text", placeholder: "e.g., Break a leg, It's raining cats and dogs" },
            { id: "grade", label: "Target Audience", type: "select", options: ["Elementary", "ELL Students", "General"] }
        ]
    },
    "team-builder": {
        id: "team-builder",
        name: "Team Builder Activities",
        description: "Create activities to build classroom community.",
        icon: Users,
        color: "bg-indigo-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "duration", label: "Activity Duration", type: "select", options: ["5 min", "10 min", "15 min", "30 min"] },
            { id: "size", label: "Group Size", type: "select", options: ["Pairs", "Small Groups", "Whole Class"] }
        ]
    },
    "ice-breaker": {
        id: "ice-breaker",
        name: "Ice Breaker Generator",
        description: "Generate ice breaker questions and activities.",
        icon: Snowflake,
        color: "bg-cyan-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School", "Adults"] },
            { id: "type", label: "Icebreaker Type", type: "select", options: ["Questions", "Games", "Movement Activity"] },
            { id: "time", label: "Time Available", type: "text", placeholder: "e.g., 5-10 minutes" }
        ]
    },
    "class-norms": {
        id: "class-norms",
        name: "Class Norms & Expectations",
        description: "Create classroom rules and expectations based on values.",
        icon: Scale,
        color: "bg-slate-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "values", label: "Key Values", type: "textarea", placeholder: "e.g., Respect, Responsibility, Safety, Kindness" }
        ]
    },
    "student-survey": {
        id: "student-survey",
        name: "Student Survey Generator",
        description: "Create surveys to get student feedback.",
        icon: ClipboardList,
        color: "bg-violet-600",
        inputs: [
            { id: "purpose", label: "Survey Purpose", type: "text", placeholder: "e.g., Course Feedback, Interest Inventory" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["5", "10", "15"] }
        ]
    },
    "get-to-know-you": {
        id: "get-to-know-you",
        name: "Get to Know You Questions",
        description: "Generate questions to learn about your students.",
        icon: MessageCircle,
        color: "bg-orange-400",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "context", label: "Context", type: "select", options: ["First Day of School", "Throughout Year", "Monday Morning"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["5", "10", "15"] }
        ]
    },
    "class-incentives": {
        id: "class-incentives",
        name: "Class Incentive Ideas",
        description: "Get ideas for classroom rewards and incentives.",
        icon: Gift,
        color: "bg-yellow-500",
        inputs: [
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Incentive Type", type: "select", options: ["Individual", "Whole Class", "Low-cost", "No-cost"] }
        ]
    },
    "restorative-circle": {
        id: "restorative-circle",
        name: "Restorative Circle Questions",
        description: "Generate questions for restorative practice circles.",
        icon: Users,
        color: "bg-teal-600",
        inputs: [
            { id: "purpose", label: "Circle Purpose", type: "select", options: ["Check-in", "Community Building", "Conflict Resolution", "Reflection"] },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] }
        ]
    },
    "youtube-questions": {
        id: "youtube-questions",
        name: "YouTube Video Questions",
        description: "Generate comprehension questions for any YouTube video.",
        icon: Youtube,
        color: "bg-red-600",
        inputs: [
            { id: "url", label: "YouTube Video URL", type: "text", placeholder: "Paste YouTube Link..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["3", "5", "8", "10"] }
        ]
    },
    "reading-comprehension": {
        id: "reading-comprehension",
        name: "Reading Comprehension Questions",
        description: "Create questions to check reading comprehension.",
        icon: BookOpen,
        color: "bg-blue-600",
        inputs: [
            { id: "text", label: "Text or Passage", type: "textarea", placeholder: "Paste text here..." },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "types", label: "Question Levels", type: "text", placeholder: "e.g., Literal, Inferential, Evaluative" }
        ]
    },
    "worksheet-generator": {
        id: "worksheet-generator",
        name: "Worksheet Generator",
        description: "Generate a worksheet based on any topic or text.",
        icon: FileSpreadsheet,
        color: "bg-emerald-500",
        inputs: [
            { id: "topic", label: "Topic or Standard", type: "text", placeholder: "e.g., Photosynthesis" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Worksheet Type", type: "select", options: ["Practice Problems", "Fill in the Blank", "Matching", "Review"] }
        ]
    },
    "warm-up": {
        id: "warm-up",
        name: "Warm-Up & Bell Ringer",
        description: "Create quick activities to start class.",
        icon: Bell,
        color: "bg-amber-500",
        inputs: [
            { id: "subject", label: "Subject", type: "text", placeholder: "e.g., Math, History" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "topic", label: "Topic (Optional)", type: "text", placeholder: "e.g., Fractions" }
        ]
    },
    "closure-activity": {
        id: "closure-activity",
        name: "Closure Activity",
        description: "Design activities to end your lesson effectively.",
        icon: DoorOpen,
        color: "bg-slate-600",
        inputs: [
            { id: "objective", label: "Lesson Objective", type: "textarea", placeholder: "What did students learn?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "time", label: "Time Available", type: "select", options: ["2 min", "5 min", "10 min"] }
        ]
    },
    "science-lab": {
        id: "science-lab",
        name: "Science Lab Generator",
        description: "Create science lab procedures and materials lists.",
        icon: FlaskConical,
        color: "bg-green-600",
        inputs: [
            { id: "concept", label: "Science Concept", type: "text", placeholder: "e.g., Density, Chemical Reactions" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Lab Type", type: "select", options: ["Hands-on", "Demonstration", "Virtual"] }
        ]
    },
    "sat-act-prep": {
        id: "sat-act-prep",
        name: "SAT/ACT Prep Questions",
        description: "Generate test prep questions for SAT or ACT.",
        icon: PenTool,
        color: "bg-blue-800",
        inputs: [
            { id: "test", label: "Test Type", type: "select", options: ["SAT", "ACT"] },
            { id: "section", label: "Section", type: "select", options: ["Math", "Reading", "Writing/English", "Science (ACT)"] },
            { id: "count", label: "Number of Questions", type: "select", options: ["3", "5", "10"] }
        ]
    },
    "group-work-roles": {
        id: "group-work-roles",
        name: "Group Work Roles",
        description: "Define roles for collaborative group work.",
        icon: Users,
        color: "bg-indigo-400",
        inputs: [
            { id: "project", label: "Project/Task Type", type: "text", placeholder: "e.g., Science Lab, Literature Circle" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "size", label: "Group Size", type: "select", options: ["3", "4", "5", "6"] }
        ]
    },
    "compare-contrast": {
        id: "compare-contrast",
        name: "Compare & Contrast Generator",
        description: "Create comparison activities and organizers.",
        icon: GitCompare,
        color: "bg-purple-500",
        inputs: [
            { id: "items", label: "Items to Compare", type: "text", placeholder: "e.g., Plant Cells vs. Animal Cells" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "type", label: "Organizer Type", type: "select", options: ["Venn Diagram", "T-Chart", "Matrix"] }
        ]
    },
    "newsletter-translation": {
        id: "newsletter-translation",
        name: "Newsletter Translation",
        description: "Translate newsletters into multiple languages.",
        icon: Languages,
        color: "bg-teal-500",
        inputs: [
            { id: "text", label: "Original Newsletter Text", type: "textarea", placeholder: "Paste newsletter content..." },
            { id: "languages", label: "Target Languages", type: "text", placeholder: "e.g., Spanish, Vietnamese, Arabic" }
        ]
    },
    "academic-content": {
        id: "academic-content",
        name: "Academic Content Generator",
        description: "Generate original academic content customized to criteria.",
        icon: BookOpen,
        color: "bg-slate-700",
        inputs: [
            { id: "topic", label: "Topic", type: "text", placeholder: "e.g., The Civil War" },
            { id: "type", label: "Content Type", type: "select", options: ["Passage", "Article", "story"] },
            { id: "level", label: "Reading Level", type: "text", placeholder: "e.g., 5th Grade Lexile" }
        ]
    },
    "pbl-unit": {
        id: "pbl-unit",
        name: "PBL Unit Generator",
        description: "Design project-based learning units.",
        icon: Wrench,
        color: "bg-orange-600",
        inputs: [
            { id: "question", label: "Driving Question", type: "text", placeholder: "e.g., How can we reduce plastic waste?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "duration", label: "Duration", type: "text", placeholder: "e.g., 4 weeks" }
        ]
    },
    "accommodations-generator-504": {
        id: "accommodations-generator-504",
        name: "Accommodations Generator (504/IEP)",
        description: "Generate specific accommodations for plans.",
        icon: FileMinus,
        color: "bg-red-500",
        inputs: [
            { id: "need", label: "Disability/Need", type: "text", placeholder: "e.g., ADHD, Dyslexia, Anxiety" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "area", label: "Areas Needing Support", type: "text", placeholder: "e.g., Testing, Focus, Reading" }
        ]
    },
    "vertical-alignment": {
        id: "vertical-alignment",
        name: "Vertical Alignment Tool",
        description: "See how concepts progress across grade levels.",
        icon: ArrowUp,
        color: "bg-blue-700",
        inputs: [
            { id: "standard", label: "Concept/Standard", type: "text", placeholder: "e.g., Fractions" },
            { id: "range", label: "Grade Range", type: "text", placeholder: "e.g., K-5, 6-8" }
        ]
    },
    "data-chat": {
        id: "data-chat",
        name: "Data Chat",
        description: "Analyze student data with AI assistance.",
        icon: BarChart2,
        color: "bg-emerald-600",
        inputs: [
            { id: "data", label: "Paste Data or Description", type: "textarea", placeholder: "Paste CSV data or describe the data set..." },
            { id: "question", label: "Question about Data", type: "textarea", placeholder: "What do you want to know?" }
        ]
    },
    "curriculum-gap": {
        id: "curriculum-gap",
        name: "Curriculum Gap Analysis",
        description: "Identify gaps in curriculum coverage.",
        icon: AlertCircle,
        color: "bg-rose-500",
        inputs: [
            { id: "standard", label: "Standards Set", type: "text", placeholder: "e.g., CCSS ELA 5th Grade" },
            { id: "curriculum", label: "Current Curriculum Covered", type: "textarea", placeholder: "List units or topics covered..." }
        ]
    },
    "learning-objective": {
        id: "learning-objective",
        name: "Learning Objective Writer",
        description: "Write clear, measurable learning objectives.",
        icon: Target,
        color: "bg-fuchsia-600",
        inputs: [
            { id: "topic", label: "Standard or Topic", type: "text", placeholder: "e.g., Photosynthesis" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] },
            { id: "bloom", label: "Bloom's Level", type: "select", options: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"] }
        ]
    },
    "differentiation-stations": {
        id: "differentiation-stations",
        name: "Differentiation Station Ideas",
        description: "Create differentiated station/center activities.",
        icon: Grid,
        color: "bg-purple-500",
        inputs: [
            { id: "objective", label: "Learning Objective", type: "textarea", placeholder: "What skill are they practicing?" },
            { id: "grade", label: "Grade Level", type: "select", options: ["Elementary", "Middle School", "High School"] }
        ]
    },
    "student-grouping": {
        id: "student-grouping",
        name: "Student Grouping Suggestions",
        description: "Get suggestions for grouping students.",
        icon: Users,
        color: "bg-cyan-600",
        inputs: [
            { id: "purpose", label: "Grouping Purpose", type: "select", options: ["Skill Level", "Mixed Ability", "Interest-based", "Random"] },
            { id: "size", label: "Class Size", type: "text", placeholder: "e.g., 25 students" }
        ]
    },
    "raina-coach": {
        id: "raina-coach",
        name: "Raina - AI Instructional Coach",
        description: "Chat with Raina, your AI instructional coach.",
        icon: Bot,
        color: "bg-violet-600",
        inputs: [
            { id: "question", label: "Ask Raina", type: "textarea", placeholder: "Ask for advice, resources, or coaching..." }
        ]
    },
    "custom-tool": {
        id: "custom-tool",
        name: "Custom Tool Creator",
        description: "Build your own custom AI tools.",
        icon: Wrench,
        color: "bg-slate-800",
        inputs: [
            { id: "name", label: "Tool Name", type: "text", placeholder: "My Custom Tool" },
            { id: "purpose", label: "Tool Purpose", type: "textarea", placeholder: "What does this tool do?" },
            { id: "prompt", label: "System Prompt", type: "textarea", placeholder: "Instructions for the AI..." }
        ]
    },
    "batch-feedback": {
        id: "batch-feedback",
        name: "Batch Feedback Writer",
        description: "Provide AI-generated feedback on written assignments in batches.",
        icon: Files,
        color: "bg-indigo-600",
        inputs: [
            { id: "rubric", label: "Rubric/Criteria", type: "textarea", placeholder: "Paste rubric here..." },
            { id: "papers", label: "Paste Student Work (One per line or section)", type: "textarea", placeholder: "Student 1: ..." }
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
