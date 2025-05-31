"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

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
    <div className="w-full bg-[#1a2e1a] rounded-xl p-4 shadow-lg border border-[#1a2e1a]">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleEnded}
        onError={handleError}
        preload="metadata"
        style={{ display: "none" }}
      />

      <div className="flex flex-col items-start h-full">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlayback}
            disabled={audioError}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-base shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D9355] ${
              audioError ? "bg-gray-300 text-gray-400 cursor-not-allowed" : "bg-[#4D9355] text-white hover:bg-green-700"
            }`}
            aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>
          <div className="text-lg font-semibold text-white">{label}</div>
        </div>
        <div className="text-xs text-[#b0b3c6] mt-auto ml-auto">
          {audioError ? "Audio unavailable. Please try again later." : "New Zealand Forest Birds"}
        </div>
      </div>
    </div>
  )
}
