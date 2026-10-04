import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactButton({ className, size = "md", variant = "primary" }: { className?: string; size?: "md" | "lg"; variant?: "primary" | "light" }) {
  return (
    <Link
      to="/"
      hash="contact"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all hover:-translate-y-0.5",
        size === "lg" ? "h-14 px-8 text-lg" : "h-11 px-5 text-base",
        variant === "primary"
          ? "bg-brand text-primary-foreground shadow-lift hover:brightness-110"
          : "bg-card text-primary shadow-soft hover:bg-primary-soft",
        className,
      )}
    >
      문의하기
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, desc, center = true }: { eyebrow?: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={cn("mb-12 max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="mb-3 text-sm font-bold tracking-wide text-primary">{eyebrow}</p>}
      <h2 className="whitespace-pre-line text-3xl font-bold leading-snug tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 whitespace-pre-line text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function DemoBadge({ label = "예시" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-warning/50 bg-warning/15 px-2.5 py-0.5 text-xs font-bold text-foreground">
      {label}
    </span>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm text-primary-foreground" aria-hidden>AI</span>
      AI Smater
    </span>
  );
}
