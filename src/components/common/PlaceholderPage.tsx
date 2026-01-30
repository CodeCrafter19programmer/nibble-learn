import { Construction } from "lucide-react"

export default function PlaceholderPage({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 space-y-6 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
                <Construction className="w-10 h-10 text-white/70" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
                <p className="text-white/60 max-w-md mx-auto text-lg">
                    We're hard at work building this feature. <br />Check back soon for updates!
                </p>
            </div>
        </div>
    )
}
