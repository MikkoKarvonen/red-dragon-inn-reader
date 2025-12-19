import { useAudioPlayer } from '../hooks/useAudioPlayer'

interface PlayButtonProps {
    audioSrc: string | null
    className?: string
}

export function PlayButton({ audioSrc, className = '' }: PlayButtonProps) {
    const getAudioPath = (src: string | null): string | null => {
        if (!src) return null
        // If it's already a full URL or absolute path, return as is
        if (src.startsWith('http') || src.startsWith('/')) {
            return src
        }
        // Otherwise, assume it's relative to /audio/
        return `/audio/${src}`
    }

    const audioPath = getAudioPath(audioSrc)
    const { play, isPlaying, isLoading, error } = useAudioPlayer(audioPath)

    const handleClick = () => {
        play()
    }

    if (error) {
        return (
            <button
                type="button"
                disabled
                className={`inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-xs font-medium text-red-400 bg-red-900/20 border border-red-800/50 ${className}`}
                title="Audio file not found"
            >
                <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                Error
            </button>
        )
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={!audioPath || isLoading}
            className={`inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${isPlaying
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-slate-800 text-amber-300 hover:bg-slate-700 border border-slate-700'
                } ${!audioPath || isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            title={isPlaying ? 'Pause audio' : 'Play audio'}
        >
            {isLoading ? (
                <>
                    <svg
                        className="animate-spin w-4 h-4 mr-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Loading...
                </>
            ) : isPlaying ? (
                <>
                    <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    Pause
                </>
            ) : (
                <>
                    <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                </>
            )}
        </button>
    )
}

