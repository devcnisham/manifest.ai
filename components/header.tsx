"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        <Brand />
        <nav
          className={`main-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#features" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#who-its-for" onClick={() => setOpen(false)}>
            Who it’s for
          </a>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <Link
            href="/signin"
            className="mobile-sign-in"
            onClick={() => setOpen(false)}
          >
            Sign in
          </Link>
        </nav>
        <div className="header-actions">
          <Link href="/signin" className="sign-in">
            Sign in
          </Link>
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#waitlist">Join the waitlist</a>
          </Button>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
