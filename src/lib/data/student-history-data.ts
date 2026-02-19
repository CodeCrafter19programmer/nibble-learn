import { StudentHistoryItem } from "@/types/student"

export const studentHistoryItems: StudentHistoryItem[] = [
    {
        id: 1,
        toolId: "1", // Essay Outliner
        userId: "student_1",
        title: "Essay: Climate Change",
        type: "Essay Outline",
        date: "2 hours ago",
        toolName: "Essay Outliner",
        formData: {
            topic: "Climate Change and its impact on polar bears",
            essayType: "Persuasive",
            paragraphCount: "5 Paragraphs"
        },
        output: `# Essay Outline: Climate Change and its impact on polar bears\n\n## I. Introduction\n   A. Hook: Did you know polar bear populations have decreased by 40% in some areas?\n   B. Background: Climate change is melting sea ice at alarming rates.\n   C. Thesis: We must take immediate action to reduce carbon emissions to save polar bear habitats.\n\n## II. Body Paragraph 1: Loss of Habitat\n   A. Topic Sentence: Melting ice means less hunting ground.\n   B. Evidence: Satellite data shows shrinking ice caps.\n   C. Analysis: Less ice means bears starve or drown.\n\n## III. Body Paragraph 2: Reproducive Rates\n   A. Topic Sentence: Stressed bears have fewer cubs.\n   B. Evidence: Studies from 2020 show correlation.\n   C. Analysis: Population decline accelerates.\n\n## IV. Body Paragraph 3: Human Conflict\n   A. Topic Sentence: Hungry bears move to towns.\n   B. Evidence: Increased sightings in northern villages.\n   C. Analysis: Danger to both bears and humans.\n\n## V. Conclusion\n   A. Restate Thesis: Action is urgent.\n   B. Summary: Habitat loss, low reproduction, and conflict are key issues.\n   C. Final Thought: Saving bears saves the ecosystem.`
    },
    {
        id: 2,
        toolId: "2", // Paragraph Generator
        userId: "student_1",
        title: "Paragraph: Photosynthesis",
        type: "Paragraph",
        date: "Yesterday",
        toolName: "Paragraph Generator",
        formData: {
            topic: "Photosynthesis",
            details: "Explain how plants make food using sunlight",
            length: "Medium (~5 sentences)"
        },
        output: `Photosynthesis is the amazing process that plants use to create their own food. By absorbing sunlight through their leaves, plants convert light energy into chemical energy. They take in carbon dioxide from the air and water from the soil to produce glucose, which feeds the plant. As a byproduct of this reaction, plants release oxygen back into the atmosphere, which is essential for all living creatures. This cycle is a fundamental part of life on Earth.`
    },
    {
        id: 3,
        toolId: "3", // Research Assistant
        userId: "student_1",
        title: "Research: American Revolution",
        type: "Research Plan",
        date: "2 days ago",
        toolName: "Research Assistant",
        formData: {
            topic: "The causes of the American Revolution",
            gradeLevel: "Middle School",
            questions: "Who were the key figures?"
        },
        output: `Results for: The causes of the American Revolution\n\n**Summary:**\nThe American Revolution was sparked by a series of laws and taxes imposed by the British government on the American colonies without their representation. Key events included the Boston Tea Party and the signing of the Declaration of Independence.\n\n**Key Facts:**\n• Fact 1: The Stamp Act of 1765 was a major catalyst.\n• Fact 2: "No taxation without representation" became a rallying cry.\n• Fact 3: The war lasted from 1775 to 1783.\n\n**Suggested Sources:**\n1. History.com - "American Revolution Causes"\n2. PBS LearningMedia - "Liberty! The American Revolution"\n3. Library of Congress - "The American Revolution: A World War"`
    }
]
