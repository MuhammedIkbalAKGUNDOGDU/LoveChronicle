import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

const playlist = [
  { title: "Perfect", artist: "Ed Sheeran" },
  { title: "All of Me", artist: "John Legend" },
  { title: "Can't Help Falling in Love", artist: "Elvis Presley" },
  { title: "At Last", artist: "Etta James" }
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextTrack = () => {
    setCurrentTrack((current) => (current + 1) % playlist.length);
  };
  
  const previousTrack = () => {
    setCurrentTrack((current) => 
      current === 0 ? playlist.length - 1 : current - 1
    );
  };

  return (
    <section id="music" className="py-16">
      <Card className="max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Our Playlist</h2>
        
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">{playlist[currentTrack].title}</h3>
            <p className="text-gray-600">{playlist[currentTrack].artist}</p>
          </div>
          
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previousTrack}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button
              size="icon"
              className="h-12 w-12"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTrack}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {playlist.map((track, index) => (
              <div
                key={track.title}
                className={`p-2 rounded cursor-pointer transition-colors
                  ${currentTrack === index 
                    ? 'bg-pink-100 text-pink-700' 
                    : 'hover:bg-gray-100'
                  }`}
                onClick={() => setCurrentTrack(index)}
              >
                <p className="font-medium">{track.title}</p>
                <p className="text-sm text-gray-600">{track.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
