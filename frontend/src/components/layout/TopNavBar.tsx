import { Github } from "lucide-react";
import mainLogo from "../../assets/logo.png";

export function TopNavBar() {
  return (
    <div className="flex h-[52px] shrink-0 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <a
          href="https://www.openagentsbox.com"
          className="flex-shrink-0 transition-opacity hover:opacity-80"
          title="返回 OpenAgentsBox 主頁"
        >
          <img src={mainLogo} alt="OpenAgentsBox Logo" className="h-9 w-9 rounded-lg object-contain" />
        </a>
        <div className="flex flex-col">
          <span className="text-[16px] font-bold leading-tight text-[var(--color-text-primary)]">
            Interview Agent
          </span>
          <a
            href="https://www.openagentsbox.com"
            className="text-[11px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            by OpenAgentsBox
          </a>
        </div>
      </div>

      {/* Right: GitHub + User */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/zongyu0523/interview-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          <Github size={20} />
        </a>
        <div className="flex items-center gap-2.5">
          <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">
            Guest
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-text-muted)]">
            <span className="text-[13px] font-semibold text-white">G</span>
          </div>
        </div>
      </div>
    </div>
  );
}
