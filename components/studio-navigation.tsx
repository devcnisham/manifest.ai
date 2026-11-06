"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/brand";
export function StudioNavigation() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 40);
        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);
    const toggle = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const dismiss = (event: KeyboardEvent) => {
            if (event.key === "Escape" && open) {
                setOpen(false);
                toggle.current?.focus();
            }
        };
        window.addEventListener("keydown", dismiss);
        return () => window.removeEventListener("keydown", dismiss);
    }, [open]);
    return (<header className={`studio-nav${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="studio-nav-inner">
        <Brand />
        <nav id="studio-menu" className={open ? "studio-links is-open" : "studio-links"} aria-label="Main navigation">
          {[["#features", "Capabilities"], ["#how-it-works", "The process"], ["#pricing", "Plans"], ["#faq", "FAQ"]].map(([href, label]) => (<a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>))}
          <Link className="studio-mobile-signin" href="/signin">Sign in <ArrowUpRight size={14}/></Link>
        </nav>
        <div className="studio-nav-actions">
          <Link href="/signin" className="studio-signin">Sign in</Link>
          <a className="studio-button studio-button-small" href="#waitlist" onClick={() => setOpen(false)}>Get early access <ArrowUpRight size={14}/></a>
          <button ref={toggle} className="studio-menu-toggle" aria-expanded={open} aria-controls="studio-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </div>
    </header>);
}
