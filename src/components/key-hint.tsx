import { cn } from "@/lib/utils";

export const KeyHint = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center text-muted-foreground bg-muted w-5 h-5 text-xs leading-none font-mono aspect-square rounded-sm border border-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
};
