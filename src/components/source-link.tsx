import { cn } from "@/lib/utils";
import { GitHubIcon } from "./github-icon";

export const SourceLink = ({ className }: { className?: string }) => {
  return (
    <a
      className={cn(
        "flex items-center gap-2 group p-2 rounded-md focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
        className
      )}
      href="https://github.com/Cutaiar/shadcn-custom-easing"
      target="_blank"
    >
      <GitHubIcon className="bg-muted rounded-full group-hover:scale-110 transition-transform duration-300 size-5 ease-in-out-quad group-focus-visible:scale-110" />
      <span className="text-sm group-hover:text-foreground transition-all text-transparent duration-200 ease-out-quad animate-in slide-in-from-right-5 -translate-x-1 group-hover:translate-x-0 group-focus-visible:text-foreground group-focus-visible:translate-x-0">
        Read the source
      </span>
    </a>
  );
};
