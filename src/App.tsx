import { useState } from 'react'
import './App.css'
import { chapters } from './data/chapters'
import { PlayButton } from './components/PlayButton'
import { SectionCard } from './components/SectionCard'
import { getAudioPath } from './utils/audio'

function App() {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]?.number ?? 1)
  const [compact, setCompact] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  const chapter = chapters.find((c) => c.number === selectedChapter) ?? chapters[0]

  return (
    <div className="min-h-screen text-slate-100 relative z-10">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-orange-500"></div>
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300 font-bold font-display">
              Tales from the Red Dragon Inn
            </p>
            <div className="h-1 flex-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-display bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
            Lorekeeper&apos;s Companion
          </h1>
          <p className="text-slate-200 max-w-2xl leading-relaxed">
            Browse chapters, skim compact hooks, or savor the full tavern tales. Switch
            to compact mode to tighten Prologue and Epilogue while keeping Reinforcements
            rich and ready.
          </p>
        </header>

        <section className="glass rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-purple-200 font-semibold">Select chapter</label>
              <select
                className="w-full md:w-64 rounded-lg bg-slate-900/90 border-2 border-purple-500/50 text-slate-100 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-colors"
                value={selectedChapter}
                onChange={(event) => setSelectedChapter(Number(event.target.value))}
              >
                {chapters.map((c) => (
                  <option key={c.number} value={c.number} className="bg-slate-900">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:items-end">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-purple-200 font-semibold">Playback speed</label>
                <select
                  className="w-full md:w-32 rounded-lg bg-slate-900/90 border-2 border-purple-500/50 text-slate-100 px-3 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-colors"
                  value={playbackSpeed}
                  onChange={(event) => setPlaybackSpeed(Number(event.target.value))}
                >
                  <option value={1} className="bg-slate-900">1x</option>
                  <option value={1.25} className="bg-slate-900">1.25x</option>
                  <option value={1.5} className="bg-slate-900">1.5x</option>
                  <option value={1.75} className="bg-slate-900">1.75x</option>
                  <option value={2} className="bg-slate-900">2x</option>
                </select>
              </div>

              <label className="flex items-center gap-3 text-sm text-purple-200">
                <span className="font-semibold">Compact Prologue & Epilogue</span>
                <button
                  type="button"
                  aria-pressed={compact}
                  onClick={() => setCompact((prev) => !prev)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${compact ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-slate-700 border-2 border-slate-600'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition ${compact ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-2xl font-bold font-display bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                {chapter.name}
              </h2>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-purple-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                Prologue • Reinforcements • Epilogue
              </div>
            </div>
            <div className="grid gap-6">
              <div className="space-y-4">
                <div className="banner-header">
                  Prologue
                </div>
                <SectionCard
                  section={chapter.prologue}
                  audioSrc={getAudioPath(chapter.number, 'prologue', compact)}
                  playbackRate={playbackSpeed}
                  compact={compact}
                />
              </div>

              {chapter.partTwo && (
                <div className="space-y-4">
                  <div className="banner-header">
                    Part Two
                  </div>
                  <SectionCard
                    section={chapter.partTwo}
                    audioSrc={getAudioPath(chapter.number, 'part-2', compact)}
                    playbackRate={playbackSpeed}
                    compact={compact}
                  />
                </div>
              )}

              {chapter.reinforcements && (
                <div className="space-y-4">
                  <div className="banner-header">
                    Reinforcements
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {chapter.reinforcements.map((section, index) => (
                      <article
                        key={section.title}
                        className="fantasy-card"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="text-base font-semibold text-amber-200">{section.title}</h4>
                          <PlayButton audioSrc={getAudioPath(chapter.number, 'reinforcements', compact, index)} playbackRate={playbackSpeed} />
                        </div>
                        <p className="mt-2 text-slate-200 leading-relaxed">{section.full}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="banner-header">
                  Epilogue
                </div>
                <SectionCard
                  section={chapter.epilogue}
                  audioSrc={getAudioPath(chapter.number, 'epilogue', compact)}
                  playbackRate={playbackSpeed}
                  compact={compact}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="text-xs text-purple-300/70 text-center italic">
          Compact mode affects only Prologue and Epilogue. Reinforcements remain full-length to
          capture tactical details.
        </footer>
      </div>
    </div>
  )
}

export default App
