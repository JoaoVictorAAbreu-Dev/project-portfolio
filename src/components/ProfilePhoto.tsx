import { useState } from "react";
import { siteConfig } from "../constants/site";

export function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);
  const profileImageUrl = `${siteConfig.baseUrl}images/profile.webp`;

  return (
    <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(79,124,255,0.92),rgba(61,217,255,0.55),rgba(255,255,255,0.35))] p-[2px] shadow-[0_20px_60px_rgba(37,99,235,0.22)]">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md dark:bg-white/[0.06]">
          {!imageError ? (
            <img
              src={profileImageUrl}
              alt="Foto de perfil de Joao Victor Alves de Abreu"
              className="h-full w-full rounded-full object-cover"
              loading="eager"
              decoding="async"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_rgba(79,124,255,0.28),_rgba(15,23,42,0.98)_65%)] text-7xl font-semibold tracking-[0.18em] text-white">
              JV
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
