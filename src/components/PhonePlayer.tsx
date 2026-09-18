import { useRef, useState } from "react";
import { Icon } from "./ui";
import { assets, momentSection } from "../config/content";

export default function PhonePlayer() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const goFullscreen = async () => {
    const el = wrapRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (el.requestFullscreen) await el.requestFullscreen();
      else setStarted(true);
    } catch {
      setStarted(true);
    }
  };

  return (
    <div className="w-full">
      <div
        ref={wrapRef}
        className="relative mx-auto aspect-[9/17] w-full max-w-[330px] overflow-hidden rounded-[30px] border-[9px] border-neutral-900 bg-neutral-900 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)]"
      >
        {loadError ? (
          <div role="status" className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-sm text-white">
            <p>Das Video konnte nicht geladen werden.</p>
            <a href={assets.videoLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Auf YouTube ansehen
            </a>
          </div>
        ) : started ? (
          // Load YouTube only after a click and leave its playback controls accessible.
          <iframe
            src={`${assets.videoSrc}?autoplay=1&playsinline=1&rel=0&controls=1&hl=de&color=white`}
            title="Lamborghini Huracán EVO selbst fahren"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onError={() => setLoadError(true)}
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <>
            <img
              src={assets.videoPoster}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              type="button"
              aria-label="Lamborghini-Video abspielen"
              onClick={() => setStarted(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
            >
              <span className="absolute top-[34%] left-0 w-full px-6 text-center font-script text-[26px] leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                {momentSection.playerLabel}
              </span>
              <span className="absolute top-1/2 left-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/15 backdrop-blur-sm transition-transform group-hover:scale-105">
                <Icon name="play" className="ml-[3px] h-7 w-7 text-white" />
              </span>
            </button>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-6 pb-3">
              <div aria-hidden="true" className="h-[3px] w-full rounded-full bg-white/30" />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-white tabular-nums">0:00</span>
                <div className="flex items-center gap-3 text-white">
                  <button type="button" aria-label="Video mit Ton abspielen" onClick={() => setStarted(true)} className="cursor-pointer hover:text-brand">
                    <Icon name="speakerOn" className="h-[17px] w-[17px]" />
                  </button>
                  <button type="button" aria-label="Vollbild" onClick={goFullscreen} className="cursor-pointer hover:text-brand">
                    <Icon name="expand" className="h-[17px] w-[17px]" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <a
        href={assets.videoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center text-[11px] text-neutral-500 underline underline-offset-4 hover:text-brand"
      >
        Video auf YouTube ansehen
      </a>
    </div>
  );
}
