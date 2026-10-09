import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/site";
import { ContactButton, Logo } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" aria-label="AI Smater 홈" onClick={() => setOpen(false)} className="text-xl font-extrabold tracking-tight">AI Smater</Link>
        <nav aria-label="주요 메뉴" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true, includeHash: false }} className="font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>
              {n.label}
            </Link>
          ))}
          <ContactButton />
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="모바일 메뉴" className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          {NAV_ITEMS.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg font-medium">
              {n.label}
            </Link>
          ))}
          <div onClick={() => setOpen(false)} className="mt-5">
            <ContactButton size="lg" className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-muted-foreground">소상공인을 위한 AI 마케팅 도우미</p>
        </div>
        <nav aria-label="하단 메뉴" className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_ITEMS.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">{n.label}</Link>
          ))}
          <Link to="/" hash="contact" className="text-muted-foreground hover:text-foreground">문의하기</Link>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">개인정보처리방침</a>
          <a href="#" className="hover:text-foreground">이용약관</a>
        </div>
        <p>© AI Smater. All rights reserved.</p>
      </div>
    </footer>
  );
}
