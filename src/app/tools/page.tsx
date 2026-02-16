"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import { Search, Star, Filter, Sparkles, FileText, CheckCircle, MessageSquare, Users, Globe, Zap, Presentation, PenTool, Layout, Calendar, Target, Calculator, RotateCw, ListTodo, LayoutGrid, Layers, MessageCircle as MessageCircleIcon, CalendarDays, Grid, Heart, ListChecks, Table, ShieldCheck, PenSquare, FileQuestion, Ticket, ArrowRight, Lightbulb, ClipboardList, UserCheck, Users2, FileMinus, AlertTriangle, BookOpenCheck, XCircle, Trophy, Mail, Newspaper, Scroll, Phone, MessageSquarePlus, Minimize2, RefreshCw, Languages, SpellCheck, Music, Smile, Snowflake, Gift, Youtube, Bell, DoorOpen, FlaskConical, GitCompare, BarChart2, AlertCircle, ArrowUp, Bot, Wrench, Files, FileSpreadsheet, Scale, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = [
    { id: "all", label: "All Tools" },
    { id: "planning", label: "Planning" },
    { id: "assessment", label: "Assessment" },
    { id: "communication", label: "Communication" },
    { id: "support", label: "Student Support" },
    { id: "productivity", label: "Productivity" },
]

const tools = [
    { id: "lesson-plan", name: "Lesson Plan Generator", category: "planning", icon: FileText, color: "bg-blue-500", desc: "Generate a lesson plan for a topic or objective you're teaching.", new: false, plus: false },
    { id: "unit-plan", name: "Unit Plan Generator", category: "planning", icon: Calendar, color: "bg-purple-500", desc: "Create a multi-lesson unit plan on any topic.", new: false, plus: true },
    { id: "5e-model-science", name: "5E Model Science Lesson", category: "planning", icon: Zap, color: "bg-emerald-500", desc: "Design a science lesson using the 5E instructional model.", new: false, plus: false },
    { id: "presentation-generator", name: "Presentation Generator", category: "planning", icon: Presentation, color: "bg-orange-500", desc: "Generate exportable slides based on any topic.", new: true, plus: true },
    { id: "lesson-hook", name: "Lesson Hook Generator", category: "planning", icon: Sparkles, color: "bg-yellow-500", desc: "Create an engaging hook to start your lesson.", new: false, plus: false },
    { id: "standards-unpacker", name: "Standards Unpacker", category: "planning", icon: Search, color: "bg-indigo-500", desc: "Break down standards into student-friendly language.", new: false, plus: false },
    { id: "accommodation-suggestions", name: "Accommodation Suggestions", category: "planning", icon: Users, color: "bg-teal-500", desc: "Get ideas for accommodating students with diverse needs.", new: false, plus: false },
    { id: "assignment-scaffolder", name: "Assignment Scaffolder", category: "planning", icon: Layout, color: "bg-cyan-500", desc: "Break down complex assignments into manageable steps.", new: false, plus: false },
    { id: "text-leveler", name: "Text Leveler", category: "planning", icon: PenTool, color: "bg-rose-500", desc: "Rewrite any text at different reading levels.", new: false, plus: false },
    { id: "vocabulary-scaffolder", name: "Vocabulary Scaffolder", category: "planning", icon: Globe, color: "bg-fuchsia-500", desc: "Create tiered vocabulary lists with definitions.", new: false, plus: false },
    { id: "make-it-relevant", name: "Make It Relevant", category: "planning", icon: Target, color: "bg-red-500", desc: "Adapt content to connect with student interests and backgrounds.", new: false, plus: false },
    { id: "math-story-problem", name: "Math Story Problem", category: "planning", icon: Calculator, color: "bg-blue-600", desc: "Create word problems for any math concept with real-world context.", new: false, plus: false },
    { id: "math-spiral-review", name: "Math Spiral Review", category: "planning", icon: RotateCw, color: "bg-indigo-500", desc: "Generate practice problems that review multiple concepts.", new: false, plus: true },
    { id: "project-outline", name: "Project Outline Generator", category: "planning", icon: ListTodo, color: "bg-orange-600", desc: "Create a structured outline and timeline for student projects.", new: true, plus: false },
    { id: "choice-board", name: "Choice Board Generator", category: "planning", icon: LayoutGrid, color: "bg-pink-500", desc: "Create a choice board with differentiated activity options.", new: false, plus: true },
    { id: "dok-questions", name: "DOK Questions Generator", category: "planning", icon: Layers, color: "bg-purple-600", desc: "Generate questions at different Depth of Knowledge (DOK) levels.", new: false, plus: false },
    { id: "discussion-questions", name: "Discussion Questions", category: "planning", icon: MessageCircleIcon, color: "bg-teal-600", desc: "Create thought-provoking discussion questions for class.", new: false, plus: false },
    { id: "class-syllabus", name: "Class Syllabus Generator", category: "planning", icon: FileText, color: "bg-slate-700", desc: "Generate a comprehensive course syllabus.", new: false, plus: false },
    { id: "weekly-agenda", name: "Weekly Agenda Generator", category: "planning", icon: CalendarDays, color: "bg-green-600", desc: "Create a structured weekly class agenda.", new: false, plus: false },
    { id: "learning-stations", name: "Learning Station Activities", category: "planning", icon: Grid, color: "bg-yellow-600", desc: "Design activities for rotation learning stations/centers.", new: false, plus: false },
    { id: "real-world-scenarios", name: "Real-World Scenarios", category: "planning", icon: Globe, color: "bg-emerald-600", desc: "Create authentic, real-world scenarios for learning.", new: false, plus: false },
    { id: "multiple-choice-quiz", name: "Multiple Choice Quiz", category: "assessment", icon: ListChecks, color: "bg-blue-500", desc: "Create a multiple choice assessment based on any topic.", new: false, plus: true },
    { id: "rubric-generator", name: "Rubric Generator", category: "assessment", icon: Table, color: "bg-purple-500", desc: "Have AI write a rubric for an assignment in a table format.", new: false, plus: false },
    { id: "report-card-comments", name: "Report Card Comments", category: "communication", icon: ShieldCheck, color: "bg-orange-500", desc: "Generate report card comments with student's strengths and growth areas.", new: false, plus: true },
    { id: "writing-feedback", name: "Writing Feedback", category: "assessment", icon: PenSquare, color: "bg-pink-500", desc: "Give areas of strength & areas for growth on student work.", new: false, plus: false },
    { id: "text-dependent-questions", name: "Text-Dependent Questions", category: "assessment", icon: FileQuestion, color: "bg-teal-500", desc: "Create questions tied directly to a reading passage.", new: false, plus: false },
    { id: "exit-ticket", name: "Exit Ticket Generator", category: "assessment", icon: Ticket, color: "bg-red-500", desc: "Create quick formative assessments to check understanding.", new: false, plus: true },
    { id: "clear-directions", name: "Clear Directions", category: "support", icon: ArrowRight, color: "bg-indigo-500", desc: "Rewrite instructions to be clearer for students.", new: false, plus: false },
    { id: "assignment-ideas", name: "Assignment Ideas", category: "planning", icon: Lightbulb, color: "bg-yellow-500", desc: "Get creative assignment ideas for any topic.", new: false, plus: false },
    { id: "performance-task", name: "Performance Task Designer", category: "assessment", icon: ClipboardList, color: "bg-cyan-600", desc: "Design authentic performance assessments.", new: false, plus: false },
    { id: "self-assessment", name: "Self-Assessment Tool", category: "assessment", icon: UserCheck, color: "bg-green-500", desc: "Create student self-reflection and self-assessment tools.", new: false, plus: false },
    { id: "peer-review", name: "Peer Review Guidelines", category: "assessment", icon: Users2, color: "bg-fuchsia-600", desc: "Generate guidelines for students to give peer feedback.", new: false, plus: false },
    { id: "iep-generator", name: "IEP Generator", category: "support", icon: FileMinus, color: "bg-orange-600", desc: "Generate a draft of an IEP customized to a student's needs.", new: false, plus: true },
    { id: "bip-generator", name: "BIP Generator", category: "support", icon: AlertTriangle, color: "bg-red-600", desc: "Create a Behavior Intervention Plan (BIP) with strategies.", new: false, plus: true },
    { id: "behavior-intervention-suggestions", name: "Behavior Intervention", category: "support", icon: Lightbulb, color: "bg-yellow-600", desc: "Get strategies for managing specific behaviors.", new: false, plus: false },
    { id: "social-story", name: "Social Story Creator", category: "support", icon: BookOpenCheck, color: "bg-blue-400", desc: "Generate social stories to help students understand situations.", new: false, plus: false },
    { id: "exemplar-non-exemplar", name: "Exemplar & Non-Exemplar", category: "support", icon: XCircle, color: "bg-green-600", desc: "Create clear examples and non-examples for teaching concepts.", new: false, plus: false },
    { id: "intervention-strategies", name: "Intervention Strategies", category: "support", icon: Target, color: "bg-purple-600", desc: "Get targeted intervention ideas for struggling students.", new: false, plus: false },
    { id: "gifted-extension", name: "Gifted Education Extension", category: "support", icon: Trophy, color: "bg-amber-500", desc: "Create extension activities for advanced learners.", new: false, plus: true },
    { id: "professional-email", name: "Professional Email", category: "communication", icon: Mail, color: "bg-indigo-600", desc: "Generate a professional email for parents, colleagues, or admin.", new: false, plus: false },
    { id: "family-newsletter", name: "Family Newsletter", category: "communication", icon: Newspaper, color: "bg-teal-500", desc: "Create a newsletter to update families on class activities.", new: false, plus: false },
    { id: "letter-of-recommendation", name: "Letter of Recommendation", category: "communication", icon: Scroll, color: "bg-slate-600", desc: "Generate a strong letter of recommendation for a student.", new: false, plus: true },
    { id: "positive-phone-call", name: "Positive Phone Call", category: "communication", icon: Phone, color: "bg-green-500", desc: "Get talking points for positive calls home to parents.", new: false, plus: false },
    { id: "parent-teacher-conference", name: "Conference Script", category: "communication", icon: MessageSquarePlus, color: "bg-blue-500", desc: "Prepare a script and talking points for conferences.", new: false, plus: false },
    { id: "text-summarizer", name: "Text Summarizer", category: "productivity", icon: Minimize2, color: "bg-violet-500", desc: "Summarize long texts to get the main ideas quickly.", new: false, plus: false },
    { id: "text-rewriter", name: "Text Rewriter", category: "productivity", icon: RefreshCw, color: "bg-fuchsia-500", desc: "Take any text and rewrite it with custom criteria.", new: false, plus: false },
    { id: "text-translator", name: "Text Translator", category: "productivity", icon: Languages, color: "bg-blue-400", desc: "Translate text into 30+ languages.", new: false, plus: false },
    { id: "text-proofreader", name: "Text Proofreader", category: "productivity", icon: SpellCheck, color: "bg-green-500", desc: "Check and correct grammar, spelling, and punctuation.", new: false, plus: false },
    { id: "song-lyrics", name: "Song Lyrics Generator", category: "planning", icon: Music, color: "bg-pink-500", desc: "Create educational song lyrics to teach concepts.", new: false, plus: false },
    { id: "joke-generator", name: "Joke Generator", category: "planning", icon: Smile, color: "bg-yellow-400", desc: "Generate age-appropriate jokes for your class.", new: false, plus: false },
    { id: "saying-simplifier", name: "Saying Simplifier", category: "support", icon: MessageCircleIcon, color: "bg-teal-500", desc: "Explain idioms and figurative language simply.", new: false, plus: false },
    { id: "team-builder", name: "Team Builder Activities", category: "communication", icon: Users, color: "bg-indigo-500", desc: "Create activities to build classroom community.", new: false, plus: false },
    { id: "ice-breaker", name: "Ice Breaker Generator", category: "communication", icon: Snowflake, color: "bg-cyan-500", desc: "Generate ice breaker questions and activities.", new: false, plus: false },
    { id: "class-norms", name: "Class Norms & Expectations", category: "planning", icon: Scale, color: "bg-slate-500", desc: "Create classroom rules and expectations based on values.", new: false, plus: false },
    { id: "student-survey", name: "Student Survey Generator", category: "communication", icon: ClipboardList, color: "bg-violet-600", desc: "Create surveys to get student feedback.", new: false, plus: false },
    { id: "get-to-know-you", name: "Get to Know You Questions", category: "communication", icon: MessageCircleIcon, color: "bg-orange-400", desc: "Generate questions to learn about your students.", new: false, plus: false },
    { id: "class-incentives", name: "Class Incentive Ideas", category: "planning", icon: Gift, color: "bg-yellow-500", desc: "Get ideas for classroom rewards and incentives.", new: false, plus: false },
    { id: "restorative-circle", name: "Restorative Circle Questions", category: "support", icon: Users, color: "bg-teal-600", desc: "Generate questions for restorative practice circles.", new: false, plus: false },
    { id: "youtube-questions", name: "YouTube Video Questions", category: "planning", icon: Youtube, color: "bg-red-600", desc: "Generate comprehension questions for any YouTube video.", new: false, plus: false },
    { id: "reading-comprehension", name: "Reading Comprehension", category: "assessment", icon: BookOpen, color: "bg-blue-600", desc: "Create questions to check reading comprehension.", new: false, plus: false },
    { id: "worksheet-generator", name: "Worksheet Generator", category: "planning", icon: FileSpreadsheet, color: "bg-emerald-500", desc: "Generate a worksheet based on any topic or text.", new: false, plus: false },
    { id: "warm-up", name: "Warm-Up & Bell Ringer", category: "planning", icon: Bell, color: "bg-amber-500", desc: "Create quick activities to start class.", new: false, plus: false },
    { id: "closure-activity", name: "Closure Activity", category: "planning", icon: DoorOpen, color: "bg-slate-600", desc: "Design activities to end your lesson effectively.", new: false, plus: false },
    { id: "science-lab", name: "Science Lab Generator", category: "planning", icon: FlaskConical, color: "bg-green-600", desc: "Create science lab procedures and materials lists.", new: false, plus: false },
    { id: "sat-act-prep", name: "SAT/ACT Prep Questions", category: "assessment", icon: PenTool, color: "bg-blue-800", desc: "Generate test prep questions for SAT or ACT.", new: false, plus: false },
    { id: "group-work-roles", name: "Group Work Roles", category: "planning", icon: Users, color: "bg-indigo-400", desc: "Define roles for collaborative group work.", new: false, plus: false },
    { id: "compare-contrast", name: "Compare & Contrast", category: "planning", icon: GitCompare, color: "bg-purple-500", desc: "Create comparison activities and organizers.", new: false, plus: false },
    { id: "newsletter-translation", name: "Newsletter Translation", category: "communication", icon: Languages, color: "bg-teal-500", desc: "Translate newsletters into multiple languages.", new: false, plus: false },
    { id: "academic-content", name: "Academic Content", category: "planning", icon: BookOpen, color: "bg-slate-700", desc: "Generate original academic content customized to criteria.", new: false, plus: false },
    { id: "pbl-unit", name: "PBL Unit Generator", category: "planning", icon: Wrench, color: "bg-orange-600", desc: "Design project-based learning units.", new: false, plus: false },
    { id: "accommodations-generator-504", name: "Accommodations (504/IEP)", category: "support", icon: FileMinus, color: "bg-red-500", desc: "Generate specific accommodations for plans.", new: false, plus: false },
    { id: "vertical-alignment", name: "Vertical Alignment Tool", category: "planning", icon: ArrowUp, color: "bg-blue-700", desc: "See how concepts progress across grade levels.", new: false, plus: false },
    { id: "data-chat", name: "Data Chat", category: "assessment", icon: BarChart2, color: "bg-emerald-600", desc: "Analyze student data with AI assistance.", new: false, plus: true },
    { id: "curriculum-gap", name: "Curriculum Gap Analysis", category: "planning", icon: AlertCircle, color: "bg-rose-500", desc: "Identify gaps in curriculum coverage.", new: false, plus: false },
    { id: "learning-objective", name: "Learning Objective Writer", category: "planning", icon: Target, color: "bg-fuchsia-600", desc: "Write clear, measurable learning objectives.", new: false, plus: false },
    { id: "differentiation-stations", name: "Differentiation Stations", category: "planning", icon: Grid, color: "bg-purple-500", desc: "Create differentiated station/center activities.", new: false, plus: false },
    { id: "student-grouping", name: "Student Grouping", category: "planning", icon: Users, color: "bg-cyan-600", desc: "Get suggestions for grouping students.", new: false, plus: false },
    { id: "raina-coach", name: "Raina - AI Coach", category: "productivity", icon: Bot, color: "bg-violet-600", desc: "Chat with Raina, your AI instructional coach.", new: true, plus: true },
    { id: "custom-tool", name: "Custom Tool Creator", category: "productivity", icon: Wrench, color: "bg-slate-800", desc: "Build your own custom AI tools.", new: true, plus: true },
    { id: "batch-feedback", name: "Batch Feedback Writer", category: "assessment", icon: Files, color: "bg-indigo-600", desc: "Provide AI-generated feedback in batches.", new: true, plus: true },
]

export default function ToolsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "all" || tool.category === activeCategory
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Tools Header */}
            <div className="pt-32 pb-10 bg-background border-b border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Explore our AI Tools
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Discover over 80+ tools designed to help you save time, differentiate instruction, and support every learner.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative cursor-text group z-20">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-hover:text-violet-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for a tool (e.g. 'Lesson Plan')..."
                            className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-gray-200 bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none text-lg transition-all"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                                    activeCategory === cat.id
                                        ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200"
                                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-violet-700"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tools Grid Section */}
            <div className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filteredTools.map((tool, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                key={tool.id}
                            >
                                <Link
                                    href={`/app/tool/${tool.id}`}
                                    className="group relative rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 cursor-pointer block bg-white border-2 border-gray-100 shadow-sm hover:border-violet-300 hover:shadow-lg h-full"
                                >
                                    {/* Top Row */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110",
                                            tool.color
                                        )}>
                                            <tool.icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-gray-300 group-hover:text-amber-500 transition-colors">
                                            <Star className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-violet-700 transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-8 text-gray-600 font-medium line-clamp-3">
                                        {tool.desc}
                                    </p>

                                    {/* Badges */}
                                    <div className="absolute bottom-5 left-5 flex gap-2">
                                        {tool.new && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border bg-emerald-50 text-emerald-600 border-emerald-200">
                                                New
                                            </span>
                                        )}
                                        {tool.plus && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border flex items-center gap-1 bg-amber-50 text-amber-600 border-amber-200">
                                                <Sparkles className="w-3 h-3" /> Plus
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredTools.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-lg text-gray-500">No tools found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("")
                                    setActiveCategory("all")
                                }}
                                className="mt-4 text-violet-600 hover:underline font-medium"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    )
}
