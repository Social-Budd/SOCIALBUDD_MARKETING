import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  variant?: "default" | "muted" | "light" | "accent";
  id?: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section({ className, variant = "default", ...props }, ref) {
    return (
      <section
        ref={ref}
        className={cn(
          "relative py-20 md:py-28 lg:py-32",
          variant === "default" && "bg-background",
          variant === "muted" && "bg-muted/50",
          variant === "light" && "light-section bg-background text-foreground",
          variant === "accent" && "bg-background",
          className
        )}
        {...props}
      />
    );
  }
);
