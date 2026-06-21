import { useState } from "react";
import { HiOutlineCheckBadge, HiOutlineCodeBracket } from "react-icons/hi2";
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
    <div className="relative mx-auto w-full max-w-[22rem]">
      <div className="rounded-[2rem] border border-[rgba(76,255,139,0.16)] bg-[linear-gradient(180deg,rgba(7,18,10,0.9),rgba(2,8,4,0.96))] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.48)]">
        <div className="mb-5 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#8ff7b3]">
          <span>Perfil</span>
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineCheckBadge aria-hidden="true" />
            Verificado
          </span>
        </div>

        <div className="mx-auto w-fit rounded-full bg-[linear-gradient(135deg,rgba(76,255,139,0.5),rgba(76,255,139,0.08),rgba(255,255,255,0.08))] p-[2px] shadow-[0_24px_60px_rgba(0,0,0,0.42)]">
          <div className="relative h-[17.5rem] w-[17.5rem] overflow-hidden rounded-full border border-[rgba(76,255,139,0.18)] bg-[radial-gradient(circle_at_top,_rgba(76,255,139,0.18),rgba(2,8,4,0.98)_68%)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_16%,transparent_84%,rgba(255,255,255,0.05))]" />
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
              <div className="flex h-full w-full items-center justify-center text-6xl font-semibold tracking-[0.18em] text-[#effff4]">
                JV
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.8)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ff7b3]">
              Stack
            </p>
            <p className="mt-2 text-sm font-medium text-[#effff4]">
              Java, C#, .NET e FastAPI
            </p>
          </div>
          <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.8)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ff7b3]">
              Status
            </p>
            <p className="mt-2 text-sm font-medium text-[#effff4]">
              Disponível para estágio
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.8)] px-4 py-3">
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#8ff7b3]">
            <HiOutlineCodeBracket aria-hidden="true" />
            Recorte profissional
          </p>
          <p className="mt-2 text-sm leading-7 text-[#d6ffdf]">
            Backend, APIs, modelagem de dados e produtos com leitura técnica
            clara.
          </p>
        </div>
      </div>
    </div>
  );
}
