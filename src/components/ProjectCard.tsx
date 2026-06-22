import { motion } from "framer-motion";
import { cardHover } from "../motionVariants";

type ProjectCardProps = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  imageSrc?: string | null;
};

export function ProjectCard({
  slug,
  title,
  shortTitle,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageSrc,
}: ProjectCardProps) {
  return (
    <motion.article
      className="group relative flex flex-col rounded-2xl bg-[var(--surface)] p-4 sm:p-5"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover as any}
      role="article"
      aria-labelledby={`proj-${slug}`}
    >
      {imageSrc ? (
        <div className="mb-3 overflow-hidden rounded-md">
          <img src={imageSrc} alt={`${title} preview`} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
      ) : (
        <div className="mb-3 h-40 w-full rounded-md bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--bg-1)] flex items-center justify-center text-[var(--muted-700)]">
          {shortTitle ?? title}
        </div>
      )}

      <h3 id={`proj-${slug}`} className="text-lg font-semibold text-[var(--text-strong)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--text-muted)] line-clamp-3">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="tech-chip">{tech}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {demoUrl ? (
          <a href={demoUrl} className="text-sm text-[var(--accent)] hover:underline" target="_blank" rel="noreferrer">Demo</a>
        ) : null}
        {githubUrl ? (
          <a href={githubUrl} target="_blank" rel="noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-strong)]">Código</a>
        ) : null}

        <a href={`#case-${slug}`} className="ml-auto text-sm text-[var(--text-muted)] hover:text-[var(--text-strong)]">Case</a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
