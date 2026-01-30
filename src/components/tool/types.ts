export type ToolInput = {
    id: string
    label: string
    type: "text" | "textarea" | "select"
    placeholder?: string
    options?: string[]
    defaultValue?: string
}

export type ToolConfig = {
    id: string
    name: string
    description: string
    icon: any
    color: string
    inputs: ToolInput[]
    systemPrompt?: string
}
