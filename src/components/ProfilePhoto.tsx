import { useState } from "react";
import { siteConfig } from "../constants/site";

export function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);
  const profileImageWebpUrl = `${siteConfig.baseUrl}images/profile.webp`;
  const profileImageJpgUrl = `${siteConfig.baseUrl}images/profile.jpg`;

  return (
    <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(29,212,90,0.88),rgba(76,255,139,0.42),rgba(10,40,16,0.9))] p-[2px] shadow-[0_0_0_1px_rgba(76,255,139,0.12),0_22px_60px_rgba(0,0,0,0.45)]">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(145,255,184,0.16)] bg-[rgba(3,12,6,0.92)] backdrop-blur-md">
          {!imageError ? (
            <picture className="h-full w-full">
              <source srcSet={profileImageWebpUrl} type="image/webp" />
              <img
                src={profileImageJpgUrl}
                alt="Foto de perfil de Joao Victor Alves de Abreu"
                className="h-full w-full rounded-full object-cover"
                loading="eager"
                decoding="async"
                onError={() => setImageError(true)}
              />
            </picture>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_rgba(76,255,139,0.2),_rgba(2,8,4,0.98)_65%)] text-7xl font-semibold tracking-[0.18em] text-[#effff4]">
              JV
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-8 bottom-6 rounded-full border border-[rgba(76,255,139,0.14)] bg-[rgba(2,11,5,0.82)] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#92ffb7] backdrop-blur-md">
        identity verified
      </div>
    </div>
  );
}
