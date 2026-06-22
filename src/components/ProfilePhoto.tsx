import { useState } from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";
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
    <article className="card-surface h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Perfil</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--text-strong)]">
            Joao Victor Alves de Abreu
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            FIAP | Ciencia da Computacao
          </p>
        </div>
        <span className="soft-pill">Disponivel</span>
      </div>

      <div className="mt-6 flex flex-col items-center gap-5 text-center">
        <div className="profile-frame">
          {!showFallback ? (
            <img
              key={imageSources[imageIndex]}
              src={imageSources[imageIndex]}
              alt="Foto de perfil de Joao Victor Alves de Abreu"
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
              onError={handleImageError}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-[var(--text-strong)]">
              JV
            </div>
          )}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-[var(--text-strong)]">
            Computer Science Student | Backend Developer
          </p>
          <p className="mx-auto max-w-sm text-sm leading-7 text-[var(--text-muted)]">
            Construindo uma base forte em backend, APIs, dados e arquitetura
            para atuar em times de engenharia.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-strong)]">
          <HiOutlineCheckBadge
            aria-hidden="true"
            className="text-[var(--accent)]"
          />
          Foco atual
        </p>
        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
          Backend com Java, Spring Boot, C#, .NET, Python e produtos orientados
          a contexto real de negocio.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {profileTags.map((tag) => (
          <span key={tag} className="tech-chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
