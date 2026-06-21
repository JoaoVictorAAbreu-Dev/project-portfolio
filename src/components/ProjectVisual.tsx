type ProjectVisualProps = {
  label: string;
};

export function ProjectVisual({ label }: ProjectVisualProps) {
  return (
    <div
      className="matrix-terminal relative overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(76,255,139,0.12),_transparent_28%)]" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#164a25]" />
            <span className="h-3 w-3 rounded-full bg-[#1f7b3d]" />
            <span className="h-3 w-3 rounded-full bg-[#4cff8b]" />
          </div>
          <span className="rounded-full border border-[rgba(76,255,139,0.16)] bg-[rgba(8,20,10,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9cffbf]">
            matrix case
          </span>
        </div>

        <div className="rounded-[1.35rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(4,12,6,0.92)] p-4">
          <div className="flex items-center justify-between">
            <p className="matrix-code text-xs font-semibold uppercase tracking-[0.28em]">
              {label}
            </p>
            <span className="rounded-full border border-[rgba(76,255,139,0.16)] bg-[rgba(14,39,20,0.7)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8ff6b3]">
              online
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            <div className="grid grid-cols-[1.3fr_0.7fr] gap-3">
              <div className="rounded-[1.1rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.84)] p-4">
                <div className="h-3 w-2/3 rounded-full bg-[rgba(145,255,184,0.14)]" />
                <div className="mt-4 h-20 rounded-2xl bg-[linear-gradient(135deg,rgba(29,212,90,0.16),rgba(76,255,139,0.04),rgba(0,0,0,0.12))]" />
              </div>
              <div className="grid gap-3">
                <div className="rounded-[1.1rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.84)] p-3">
                  <div className="h-2 rounded-full bg-[rgba(145,255,184,0.12)]" />
                  <div className="mt-3 h-10 rounded-xl bg-[rgba(145,255,184,0.08)]" />
                </div>
                <div className="rounded-[1.1rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.84)] p-3">
                  <div className="h-2 rounded-full bg-[rgba(145,255,184,0.12)]" />
                  <div className="mt-3 h-10 rounded-xl bg-[rgba(145,255,184,0.08)]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl border border-[rgba(76,255,139,0.1)] bg-[rgba(7,18,10,0.84)]" />
              <div className="h-16 rounded-2xl border border-[rgba(76,255,139,0.1)] bg-[rgba(7,18,10,0.84)]" />
              <div className="h-16 rounded-2xl border border-[rgba(76,255,139,0.14)] bg-[linear-gradient(90deg,rgba(18,92,39,0.3),rgba(29,212,90,0.16))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
