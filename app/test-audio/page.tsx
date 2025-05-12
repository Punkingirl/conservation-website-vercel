import AudioPlayer from "@/components/audio-player"

export default function TestAudioPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Audio Player Test</h1>

      <div className="mb-8">
        <h2 className="text-xl mb-2">External Audio Source</h2>
        <AudioPlayer
          audioSrc="https://assets.mixkit.co/sfx/preview/mixkit-forest-birds-ambience-1210.mp3"
          label="Forest Birds (External)"
        />
      </div>
    </div>
  )
}
