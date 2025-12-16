"use client";

import { useState, useEffect, useRef } from "react";
import { Music } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Autoplay with muted to bypass browser restrictions
    const audio = audioRef.current;
    if (audio) {
      audio.autoplay = true;
      audio.loop = true;
      audio.volume = 0.4; // comfortable default volume
      audio.muted = true; // start muted to satisfy autoplay policies
      audio.play().then(() => {
        setIsPlaying(true);
        // unmute shortly after autoplay begins
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.muted = false;
          }
        }, 800);
      }).catch(() => {
          // Autoplay may be blocked; don't show error, retry on first user interaction
          console.log("Autoplay blocked or failed");
          const retryPlay = () => {
            audioRef.current?.play().then(() => {
              setIsPlaying(true);
              audioRef.current!.muted = false;
            }).catch(() => {
              // Only mark error if manual retry fails
              setHasError(true);
            });
            window.removeEventListener("pointerdown", retryPlay);
          };
          window.addEventListener("pointerdown", retryPlay, { once: true });
      });
    }
  }, []);

  // No UI controls per request; keep minimal status only

  const handleAudioError = () => {
    setHasError(true);
    setIsPlaying(false);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
        loop
        crossOrigin="anonymous"
        onCanPlay={() => {
          // Try to start when the audio is ready
          const a = audioRef.current;
          if (a && !isPlaying) {
            a.play().then(() => {
              a.muted = false;
              setIsPlaying(true);
            }).catch(() => {
              // ignore here; pointerdown fallback will handle
            });
          }
        }}
        onError={handleAudioError}
      >
        {/* Primary path: place file at public/music.mp3 */}
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Minimal indicator (optional). Comment out if not desired. */}
      {/* No success indicator to avoid visual noise */}

    </>
  );
}
