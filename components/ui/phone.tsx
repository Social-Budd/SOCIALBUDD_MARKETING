/* -------------------------------------------------------------------------- */
/*  Phone                                                                      */
/*                                                                             */
/*  Drawn rather than dropped in as an image: it stays sharp at any size, takes */
/*  the page's own colours, and carries no licence.                            */
/* -------------------------------------------------------------------------- */

export const SCREEN = { width: 166, height: 360 };

function StatusBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-6 items-center justify-between px-3 text-white">
      <span className="text-[8px] font-semibold tabular-nums">9:41</span>
      <span className="flex items-center gap-1" aria-hidden>
        {/* signal */}
        <svg viewBox="0 0 18 12" className="h-[6px] w-[9px]" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0.5" width="3" height="11.5" rx="1" opacity="0.4" />
        </svg>
        {/* wifi */}
        <svg viewBox="0 0 16 12" className="h-[6px] w-[8px]" fill="none" stroke="currentColor">
          <path d="M1 4.2a10 10 0 0 1 14 0" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M3.6 6.9a6.3 6.3 0 0 1 8.8 0" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6.2 9.5a2.6 2.6 0 0 1 3.6 0" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        {/* battery */}
        <svg viewBox="0 0 26 12" className="h-[7px] w-[14px]" fill="none">
          <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" strokeOpacity="0.5" />
          <rect x="2.2" y="2.2" width="16" height="7.6" rx="1.8" fill="currentColor" />
          <path d="M23.4 4.2v3.6a2 2 0 0 0 0-3.6Z" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </span>
    </div>
  );
}

export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* side buttons */}
      <span className="absolute -left-[2px] top-[68px] h-5 w-[2px] rounded-l bg-[#2a2a2e]" />
      <span className="absolute -left-[2px] top-[98px] h-8 w-[2px] rounded-l bg-[#2a2a2e]" />
      <span className="absolute -left-[2px] top-[140px] h-8 w-[2px] rounded-l bg-[#2a2a2e]" />
      <span className="absolute -right-[2px] top-[116px] h-10 w-[2px] rounded-r bg-[#2a2a2e]" />

      {/* the body */}
      <div className="rounded-[1.9rem] bg-gradient-to-b from-[#3a3a3f] via-[#1d1d20] to-[#3a3a3f] p-[2px] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]">
        <div className="rounded-[1.8rem] bg-[#0a0a0b] p-[4px]">
          <div
            className="relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[#0b0b0c]"
            style={{ width: SCREEN.width, height: SCREEN.height }}
          >
            {children}

            <StatusBar />

            {/* dynamic island */}
            <span className="absolute left-1/2 top-[6px] z-30 h-[14px] w-[50px] -translate-x-1/2 rounded-full bg-black" />

            {/* home indicator */}
            <span className="absolute bottom-[5px] left-1/2 z-30 h-[2.5px] w-[54px] -translate-x-1/2 rounded-full bg-white/45" />
          </div>
        </div>
      </div>
    </div>
  );
}
