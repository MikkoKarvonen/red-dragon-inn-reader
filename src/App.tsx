import { useState } from 'react'
import './App.css'
import { chapters, type ChapterSection } from './data/chapters'
import { PlayButton } from './components/PlayButton'

const getSectionText = (section: ChapterSection, compact: boolean) =>
  compact && section.compact ? section.compact : section.full

const getAudioPath = (chapterNumber: number, sectionType: 'prologue' | 'epilogue' | 'reinforcements', compact: boolean, index?: number): string => {
  const chapterFolder = `chapter-${chapterNumber}`
  if (sectionType === 'reinforcements' && index !== undefined) {
    return `${chapterFolder}/reinforcements-${index}.mp3`
  }
  if ((sectionType === 'prologue' || sectionType === 'epilogue') && compact) {
    return `${chapterFolder}/${sectionType}-compact.mp3`
  }
  return `${chapterFolder}/${sectionType}.mp3`
}

function App() {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]?.number ?? 1)
  const [compact, setCompact] = useState(false)

  const chapter = chapters.find((c) => c.number === selectedChapter) ?? chapters[0]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        <header className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300 font-medium">
            Tales from the Red Dragon Inn
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Lorekeeper&apos;s Companion
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Browse chapters, skim compact hooks, or savor the full tavern tales. Switch
            to compact mode to tighten Prologue and Epilogue while keeping Reinforcements
            rich and ready.
          </p>
        </header>

        <section className="glass rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Select chapter</label>
              <select
                className="w-full md:w-64 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 px-3 py-2 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 outline-none"
                value={selectedChapter}
                onChange={(event) => setSelectedChapter(Number(event.target.value))}
              >
                {chapters.map((c) => (
                  <option key={c.number} value={c.number}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-3 text-sm text-slate-200">
              <span className="font-medium text-amber-200">Compact Prologue & Epilogue</span>
              <button
                type="button"
                aria-pressed={compact}
                onClick={() => setCompact((prev) => !prev)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${compact ? 'bg-amber-500' : 'bg-slate-700'
                  }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${compact ? 'translate-x-5' : 'translate-x-1'
                    }`}
                />
              </button>
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-amber-200">{chapter.name}</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Prologue • Reinforcements • Epilogue
              </span>
            </div>
            <div className="grid gap-6">
              <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-amber-300">{chapter.prologue.title}</h3>
                  <PlayButton audioSrc={getAudioPath(chapter.number, 'prologue', compact)} />
                </div>
                <p className="mt-2 text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {getSectionText(chapter.prologue, compact)}
                </p>
              </article>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-amber-200 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Reinforcements
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {chapter.reinforcements.map((section, index) => (
                    <article
                      key={section.title}
                      className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-base font-semibold text-slate-100">{section.title}</h4>
                        <PlayButton audioSrc={getAudioPath(chapter.number, 'reinforcements', compact, index)} />
                      </div>
                      <p className="mt-2 text-slate-300 leading-relaxed">{section.full}</p>
                    </article>
                  ))}
                </div>
              </div>

              <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-amber-300">{chapter.epilogue.title}</h3>
                  <PlayButton audioSrc={getAudioPath(chapter.number, 'epilogue', compact)} />
                </div>
                <p className="mt-2 text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {getSectionText(chapter.epilogue, compact)}
                </p>
              </article>
            </div>
          </div>
        </section>

        <footer className="text-xs text-slate-500">
          Compact mode affects only Prologue and Epilogue. Reinforcements remain full-length to
          capture tactical details.
        </footer>
      </div>
    </div>
  )
}

export default App
