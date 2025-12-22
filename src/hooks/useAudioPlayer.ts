import { useState, useRef, useEffect } from 'react'

export function useAudioPlayer(audioSrc: string | null, playbackRate: number = 1) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const currentSrcRef = useRef<string | null>(null)

    useEffect(() => {
        // Cleanup on unmount or when audioSrc changes
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
                currentSrcRef.current = null
            }
        }
    }, [audioSrc])

    useEffect(() => {
        // Update playback rate when it changes
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate
        }
    }, [playbackRate])

    const play = async () => {
        if (!audioSrc) {
            setError('No audio source provided')
            return
        }

        // If audio is already playing, pause it
        if (isPlaying && audioRef.current) {
            audioRef.current.pause()
            setIsPlaying(false)
            return
        }

        // If audio element doesn't exist or src changed, create new one
        if (!audioRef.current || currentSrcRef.current !== audioSrc) {
            if (audioRef.current) {
                audioRef.current.pause()
            }

            setIsLoading(true)
            setError(null)

            const audio = new Audio(audioSrc)
            audio.playbackRate = playbackRate
            audioRef.current = audio
            currentSrcRef.current = audioSrc

            audio.addEventListener('loadeddata', () => {
                setIsLoading(false)
            })

            audio.addEventListener('error', () => {
                setIsLoading(false)
                setIsPlaying(false)
                setError('Failed to load audio file')
                audioRef.current = null
            })

            audio.addEventListener('ended', () => {
                setIsPlaying(false)
            })

            audio.addEventListener('pause', () => {
                setIsPlaying(false)
            })

            audio.addEventListener('play', () => {
                setIsPlaying(true)
                setIsLoading(false)
            })
        }

        try {
            await audioRef.current.play()
        } catch (err) {
            setIsLoading(false)
            setIsPlaying(false)
            setError('Failed to play audio')
        }
    }

    const stop = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
            setIsPlaying(false)
        }
    }

    return {
        play,
        stop,
        isPlaying,
        isLoading,
        error,
    }
}

