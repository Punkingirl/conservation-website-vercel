"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  audioSrc: string
  label: string
  fallbackSrc?: string
}

export default function AudioPlayer({ audioSrc, label, fallbackSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Handle play/pause
  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Play error:", error)
            setAudioError(true)
            setIsPlaying(false)
          })
      }
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (!audioRef.current) return

    const newMutedState = !isMuted
    audioRef.current.muted = newMutedState
    setIsMuted(newMutedState)
  }

  // Reset error state when audio source changes
  useEffect(() => {
    setAudioError(false)
  }, [audioSrc, fallbackSrc])

  // Handle audio ending
  const handleEnded = () => {
    setIsPlaying(false)
  }

  // Handle audio errors
  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error("Audio element error:", e)
    setAudioError(true)
    setIsPlaying(false)

    // Try fallback if available and not already using it
    if (fallbackSrc && audioRef.current && audioRef.current.src.indexOf(fallbackSrc) === -1) {
      console.log("Switching to fallback audio source")
      audioRef.current.src = fallbackSrc
      audioRef.current.load()
    }
  }

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} onError={handleError} preload="metadata" />

      <button
        onClick={togglePlayback}
        disabled={audioError}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
          audioError ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
        }`}
        aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
      </button>

      <div className="flex-1">
        <div className="text-lg font-medium">{label}</div>
        <div className="text-sm text-gray-500">
          {audioError ? "Audio unavailable. Please try again later." : "New Zealand Forest Birds"}
        </div>
      </div>

      {!audioError && (
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      )}
    </div>
  )
}
