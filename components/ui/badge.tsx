import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "outline";
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" && "border-border bg-muted text-muted-foreground",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent",
        variant === "outline" && "border-border bg-transparent text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
