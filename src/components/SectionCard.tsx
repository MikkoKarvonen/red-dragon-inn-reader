import { PlayButton } from './PlayButton'
import { type ChapterSection } from '../data/chapters'

type SectionCardProps = {
    section: ChapterSection
    audioSrc: string
    playbackRate: number
    compact: boolean
}

const getSectionText = (section: ChapterSection, compact: boolean) =>
    compact && section.compact ? section.compact : section.full

export function SectionCard({ section, audioSrc, playbackRate, compact }: SectionCardProps) {
    return (
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-amber-300">{section.title}</h3>
                <PlayButton audioSrc={audioSrc} playbackRate={playbackRate} />
            </div>
            <p className="mt-2 text-slate-200 leading-relaxed whitespace-pre-wrap">
                {getSectionText(section, compact)}
            </p>
        </article>
    )
}
