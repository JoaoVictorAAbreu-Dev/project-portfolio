type ProjectVisualProps = {
  label: string;
};

export function ProjectVisual({ label }: ProjectVisualProps) {
  return (
    <div className="terminal-window" aria-hidden="true">
      <div className="flex items-center justify-between gap-3">
        <p className="terminal-kicker">{label}</p>
        <span className="system-pill">preview</span>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-3">
          <div className="mini-panel min-h-[10rem]">
            <div className="h-2 w-24 rounded-full bg-[rgba(0,255,65,0.18)]" />
            <div className="mt-4 h-[7.5rem] rounded-[1rem] border border-[rgba(0,255,65,0.12)] bg-[linear-gradient(135deg,rgba(0,255,65,0.12),rgba(0,0,0,0.24),rgba(0,255,65,0.03))]" />
          </div>
          <div className="grid gap-3">
            <div className="mini-panel">
              <div className="h-2 w-16 rounded-full bg-[rgba(0,255,65,0.18)]" />
              <div className="mt-4 h-8 rounded-lg bg-[rgba(0,255,65,0.08)]" />
              <div className="mt-2 h-8 rounded-lg bg-[rgba(0,255,65,0.08)]" />
            </div>
            <div className="mini-panel">
              <div className="h-2 w-20 rounded-full bg-[rgba(0,255,65,0.18)]" />
              <div className="mt-4 h-10 rounded-lg bg-[linear-gradient(90deg,rgba(0,255,65,0.12),rgba(0,255,65,0.02))]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="mini-panel h-16" />
          <div className="mini-panel h-16" />
          <div className="mini-panel h-16 border-[rgba(0,255,65,0.18)]" />
        </div>
      </div>
    </div>
  );
}
