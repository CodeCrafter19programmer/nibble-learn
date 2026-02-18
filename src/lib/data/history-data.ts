
"use client"

import { FileText, Clock, ArrowRight } from "lucide-react"

export interface HistoryItem {
    id: number
    toolId: string
    tool: string
    title: string
    date: string
    type: string
    formData: Record<string, string>
    output: string
}

export const historyItems: HistoryItem[] = [
    {
        id: 1,
        toolId: "lesson-plan",
        tool: "Lesson Plan Generator",
        title: "Photosynthesis Grade 5",
        date: "2 hours ago",
        type: "Planning",
        formData: {
            topic: "Photosynthesis",
            grade: "5th Grade",
            duration: "60 minutes"
        },
        output: "## Lesson Plan: Understanding Photosynthesis\n\n**Grade Level:** 5th Grade\n**Duration:** 60 Minutes\n\n### Objectives\nStudents will be able to explain the process of photosynthesis and identify key components (sunlight, water, carbon dioxide).\n\n### Materials\n- Plant diagrams\n- Sunlight vs. Shelter activity cards\n- Exit tickets"
    },
    {
        id: 2,
        toolId: "math-story-problem",
        tool: "Math Story Problem",
        title: "Fractions & Pizza",
        date: "5 hours ago",
        type: "Math",
        formData: {
            concept: "Fractions",
            context: "Pizza Party",
            difficulty: "Medium"
        },
        output: "## Math Story Problem: The Pizza Party\n\nSarah ordered 3 large pizzas for her party. Each pizza was cut into 8 slices. If her friends ate 5/8 of the pepperoni pizza, 1/2 of the cheese pizza, and 3/4 of the veggie pizza, how many total slices were eaten?\n\n**Answer Key:**\n- Pepperoni: 5 slices\n- Cheese: 4 slices\n- Veggie: 6 slices\n- Total: 15 slices"
    },
    {
        id: 3,
        toolId: "rubric-generator",
        tool: "Rubric Generator",
        title: "History Essay Rubric",
        date: "Yesterday",
        type: "Assessment",
        formData: {
            assignment: "History Essay",
            criteria: "Thesis, Evidence, Organization, Grammar",
            scale: "4-point"
        },
        output: "| Criteria | 4 - Excellent | 3 - Proficient | 2 - Developing | 1 - Beginning |\n|---|---|---|---|---|\n| **Thesis** | Clear, arguable thesis statement. | Thesis is present but could be stronger. | Thesis is vague or weak. | No thesis statement. |\n| **Evidence** | Strong evidence supports all claims. | Good evidence supports most claims. | Some evidence, but weak connections. | Little to no evidence used. |"
    },
    {
        id: 4,
        toolId: "writing-feedback",
        tool: "Writing Feedback",
        title: "Sarah's Essay Review",
        date: "Yesterday",
        type: "Feedback",
        formData: {
            studentWork: "The civil war was bad because people fighted. It was sad.",
            focus: "Grammar and Vocabulary"
        },
        output: "## Feedback for Sarah\n\n**Strengths:**\n- You correctly identified the topic (Civil War).\n\n**Areas for Growth:**\n- **Vocabulary:** Instead of 'bad' and 'sad', try 'devastating' or 'tragic'.\n- **Grammar:** 'Fighted' should be 'fought'.\n\n**Revision Goal:** Rewrite the first sentence using stronger verbs."
    },
    {
        id: 5,
        toolId: "5e-model-science",
        tool: "5E Model Science Lesson",
        title: "Water Cycle Unit",
        date: "2 days ago",
        type: "Science",
        formData: {
            topic: "Water Cycle",
            grade: "3rd Grade"
        },
        output: "## 5E Lesson: The Water Cycle\n\n**Engage:** Show a time-lapse video of a puddle disappearing.\n**Explore:** Mini-lab with ziplock bags and water taped to a sunny window.\n**Explain:** Discuss evaporation, condensation, and precipitation.\n**Elaborate:** Create a comic strip of a water drop's journey.\n**Evaluate:** Draw and label the water cycle."
    },
    {
        id: 6,
        toolId: "professional-email",
        tool: "Email Writer",
        title: "Parent Conference Request",
        date: "3 days ago",
        type: "Communication",
        formData: {
            recipient: "Mr. Johnson",
            topic: "Conference regarding Timmy's math grade",
            tone: "Professional but warm"
        },
        output: "Dear Mr. Johnson,\n\nI hope you are having a wonderful week. I am writing to schedule a brief conference to discuss Timmy's progress in math class. I have noticed some great improvement in his participation, but I'd love to chat about strategies to support his test preparation.\n\nPlease let me know if you are available next Tuesday or Thursday after school.\n\nWarmly,\n[Teacher Name]"
    },
    {
        id: 7,
        toolId: "multiple-choice-quiz",
        tool: "Quiz Generator",
        title: "Geography Capes Quiz",
        date: "Last Week",
        type: "Assessment",
        formData: {
            topic: "African Capes",
            questions: "5"
        },
        output: "1. Which cape is the southernmost point of Africa?\n   a) Cape of Good Hope\n   b) Cape Agulhas\n   c) Cape Verde\n   d) Cape Town\n\n**Answer:** b) Cape Agulhas"
    },
    {
        id: 8,
        toolId: "class-syllabus",
        tool: "Class Syllabus",
        title: "Fall 2024 Geometry",
        date: "Last Week",
        type: "Planning",
        formData: {
            course: "Geometry",
            grade: "10th Grade",
            policies: "Late work accepted for 1 week"
        },
        output: "## Geometry Syllabus: Fall 2024\n\n**Course Description:**\nThis course explores shapes, sizes, relative positions, and properties of space.\n\n**Key Topics:**\n- Points, Lines, Planes\n- Triangles & Proofs\n- Quadrilaterals\n- Circles\n\n**Late Policy:**\nAssignments may be turned in up to one week late for partial credit."
    }
]
