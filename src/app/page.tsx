
"use client";

import { Button } from "@/components/ui/button";
import { Github, Instagram, Moon } from "lucide-react";

const KickIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.875 3.375v4.84h-3.414v4.545h-3.92V7.361H8.727V3.375h11.148zm-15.75 4.84V20.625h4.841V12.76h3.92v7.864h3.823V11.59L12.5 7.362l-4.182-3.987H4.125z" />
  </svg>
);

const HollowHeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="hsl(var(--destructive))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 antialiased bg-background text-foreground">
      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto text-center">
        
        <div className="flex items-center justify-center gap-4">
            <h1 className="text-7xl md:text-8xl font-black font-headline tracking-tighter text-primary-foreground">
              Dinletiyo
            </h1>
            <Moon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mt-2">
          YERLİ SPOTİFY YAKINDA SİZLERLE
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 w-full">
          <a
            href="https://github.com/SemihErgili"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg transition-colors duration-300 ease-in-out text-foreground/80 hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
          >
            Yazan: <span className="font-semibold">Semih Ergili</span>
          </a>
          <div className="flex items-center justify-center gap-2 text-lg text-foreground/80">
            <span>İlham Veren: <span className="font-semibold">Gökdeniz</span></span>
            <HollowHeartIcon className="w-5 h-5" />
          </div>
        </div>
        
        <Button asChild size="lg" className="w-full max-w-xs transition-transform duration-300 ease-in-out rounded-full shadow-lg md:w-auto md:px-12 hover:scale-105 mt-4">
            <a href="https://topluyo.com" target="_blank" rel="noopener noreferrer">
              Sahibi
            </a>
        </Button>

        <div className="flex items-center gap-6 mt-12">
            <a
              href="https://github.com/topluyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/topluyocom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://kick.com/topluyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Kick"
            >
              <KickIcon className="w-6 h-6" />
            </a>
        </div>
      </div>
    </main>
  );
}
