import { useState } from "react";
import { siteConfig } from "../constants/site";

export function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);
  const profileImageWebpUrl = `${siteConfig.baseUrl}images/profile.webp`;
  const profileImageJpgUrl = `${siteConfig.baseUrl}images/profile.jpg`;

  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      <div className="rounded-[2rem] border border-[rgba(76,255,139,0.16)] bg-[linear-gradient(180deg,rgba(7,18,10,0.9),rgba(2,8,4,0.96))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.48)]">
        <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#8ff7b3]">
          <span>identity</span>
          <span>verified</span>
        </div>
        <div className="relative overflow-hidden rounded-[1.7rem] border border-[rgba(76,255,139,0.18)] bg-[radial-gradient(circle_at_top,_rgba(76,255,139,0.16),rgba(2,8,4,0.98)_68%)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_14%,transparent_86%,rgba(255,255,255,0.05))]" />
          {!imageError ? (
            <picture className="block aspect-[4/5] w-full">
              <source srcSet={profileImageWebpUrl} type="image/webp" />
              <img
                src={profileImageJpgUrl}
                alt="Foto de perfil de Joao Victor Alves de Abreu"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                onError={() => setImageError(true)}
              />
            </picture>
          ) : (
            <div className="flex aspect-[4/5] w-full items-center justify-center text-7xl font-semibold tracking-[0.18em] text-[#effff4]">
              JV
            </div>
          )}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.8)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ff7b3]">
              stack
            </p>
            <p className="mt-2 text-sm font-medium text-[#effff4]">
              Java, Spring Boot, FastAPI
            </p>
          </div>
          <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.8)] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8ff7b3]">
              status
            </p>
            <p className="mt-2 text-sm font-medium text-[#effff4]">
              disponivel para estagio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
