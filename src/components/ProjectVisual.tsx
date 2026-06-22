type ProjectVisualProps = {
  label: string;
};

export function ProjectVisual({ label }: ProjectVisualProps) {
  return (
    <div className="card-surface" aria-hidden="true">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">{label}</p>
        <span className="soft-pill">Preview</span>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-3">
          <div className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
            <div className="h-2 w-24 rounded-full bg-[rgba(103,215,255,0.18)]" />
            <div className="mt-4 h-[7.5rem] rounded-[1rem] bg-[linear-gradient(135deg,rgba(103,215,255,0.2),rgba(79,70,229,0.16),rgba(255,255,255,0.03))]" />
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
              <div className="h-2 w-16 rounded-full bg-[rgba(103,215,255,0.18)]" />
              <div className="mt-4 h-8 rounded-lg bg-[rgba(103,215,255,0.08)]" />
              <div className="mt-2 h-8 rounded-lg bg-[rgba(103,215,255,0.08)]" />
            </div>

            <div className="rounded-[1.2rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
              <div className="h-2 w-20 rounded-full bg-[rgba(103,215,255,0.18)]" />
              <div className="mt-4 h-10 rounded-lg bg-[linear-gradient(90deg,rgba(79,70,229,0.28),rgba(103,215,255,0.08))]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="h-16 rounded-[1.1rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)]" />
          <div className="h-16 rounded-[1.1rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)]" />
          <div className="h-16 rounded-[1.1rem] border border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(103,215,255,0.12),rgba(79,70,229,0.18))]" />
        </div>
      </div>
    </div>
  );
}
