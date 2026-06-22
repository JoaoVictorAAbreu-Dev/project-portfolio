import { useState } from "react";
import { HiOutlineCheckBadge, HiOutlineSignal } from "react-icons/hi2";
import { profileTags } from "../data/portfolio";
import { siteConfig } from "../constants/site";

export function ProfilePhoto() {
  const imageSources = [
    `${siteConfig.baseUrl}images/profile.webp`,
    `${siteConfig.baseUrl}images/profile.jpg`,
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const handleImageError = () => {
    if (imageIndex < imageSources.length - 1) {
      setImageIndex((current) => current + 1);
      return;
    }

    setShowFallback(true);
  };

  return (
    <article className="terminal-window h-full p-0">
      <div className="window-chrome">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="window-dot bg-[#00ff41]" />
          <span className="window-dot bg-[#0a7f2b]" />
          <span className="window-dot bg-[#d7ffe0]" />
        </div>
        <span className="system-pill">profile card</span>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        <div className="photo-shell mx-auto">
          {!showFallback ? (
            <img
              key={imageSources[imageIndex]}
              src={imageSources[imageIndex]}
              alt="Foto de perfil de João Victor Alves de Abreu"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
              onError={handleImageError}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl font-semibold tracking-[0.18em] text-[#f4fff7]">
              JV
            </div>
          )}
        </div>

        <div className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,255,65,0.16)] bg-[rgba(0,255,65,0.05)] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#8de1a3]">
            <HiOutlineSignal aria-hidden="true" />
            online
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#f4fff7]">
              João Victor Alves de Abreu
            </h2>
            <p className="mt-2 text-sm text-[#9fd2ab]">
              FIAP · Ciência da Computação
            </p>
            <p className="mt-1 text-sm text-[#c8f3d2]">
              Backend Developer in progress
            </p>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-[rgba(0,255,65,0.12)] bg-[rgba(3,9,3,0.9)] p-4">
          <p className="terminal-kicker">stack tags</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profileTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-[rgba(0,255,65,0.12)] bg-[rgba(3,9,3,0.9)] p-4">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d7ffe0]">
            <HiOutlineCheckBadge aria-hidden="true" />
            Snapshot profissional
          </p>
          <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
            Foco em backend, APIs, dados, arquitetura em camadas e produtos com
            leitura técnica clara para avaliação de recrutadores.
          </p>
        </div>
      </div>
    </article>
  );
}
