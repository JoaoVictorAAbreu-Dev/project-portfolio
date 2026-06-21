type ProjectVisualProps = {
  label: string;
};

export function ProjectVisual({ label }: ProjectVisualProps) {
  return (
    <div className="terminal-card relative overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(76,255,139,0.12),_transparent_24%)]" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#143722]" />
            <span className="h-3 w-3 rounded-full bg-[#2b8747]" />
            <span className="h-3 w-3 rounded-full bg-[#8effb4]" />
          </div>
          <span className="panel-chip">project frame</span>
        </div>
        <div className="rounded-[1.5rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(4,11,5,0.92)] p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="terminal-kicker">{label}</p>
            <span className="panel-chip">case study</span>
          </div>
          <div className="mt-6 grid gap-3">
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
              <div className="rounded-[1.3rem] border border-[rgba(76,255,139,0.1)] bg-[rgba(6,17,9,0.84)] p-4">
                <div className="h-3 w-1/2 rounded-full bg-[rgba(145,255,184,0.15)]" />
                <div className="mt-4 h-24 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(18,92,39,0.44),rgba(76,255,139,0.08),rgba(0,0,0,0.24))]" />
              </div>
              <div className="grid gap-3">
                <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.1)] bg-[rgba(6,17,9,0.84)] p-4">
                  <div className="h-2 w-2/3 rounded-full bg-[rgba(145,255,184,0.15)]" />
                  <div className="mt-3 h-8 rounded-xl bg-[rgba(145,255,184,0.08)]" />
                  <div className="mt-2 h-8 rounded-xl bg-[rgba(145,255,184,0.08)]" />
                </div>
                <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.1)] bg-[rgba(6,17,9,0.84)] p-4">
                  <div className="h-2 w-1/2 rounded-full bg-[rgba(145,255,184,0.15)]" />
                  <div className="mt-3 h-10 rounded-xl bg-[linear-gradient(90deg,rgba(18,92,39,0.3),rgba(76,255,139,0.14))]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-[1.2rem] border border-[rgba(76,255,139,0.08)] bg-[rgba(6,17,9,0.84)]" />
              <div className="h-16 rounded-[1.2rem] border border-[rgba(76,255,139,0.08)] bg-[rgba(6,17,9,0.84)]" />
              <div className="h-16 rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[linear-gradient(90deg,rgba(18,92,39,0.34),rgba(76,255,139,0.1))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
