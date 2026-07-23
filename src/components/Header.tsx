"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Menu, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "الرئيسية", href: "#home" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "ورش العمل", href: "#workshops" },
  { name: "شركاؤنا", href: "#partners" },
  { name: "الرؤية", href: "#vision" },
  { name: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-primary/15 bg-background/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-[88px] items-center justify-between gap-6">
          <Link
            href="#home"
            className="group flex h-16 w-[190px] shrink-0 items-center justify-start overflow-hidden"
            aria-label="فرح التنمية"
          >
            <div className="relative flex h-16 w-full items-center justify-start overflow-hidden">
              <div className="absolute inset-y-3 right-3 w-28 rounded-2xl bg-primary/25 blur-xl opacity-60 transition-opacity group-hover:opacity-100" />
              <BrandLogo
                className="relative block max-h-[60px] max-w-[185px] object-contain logo-glow"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/75 transition-all hover:bg-primary/10 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:00966561637935"
              className="hidden items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary 2xl:flex"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">00966561637935</span>
            </a>
            <Button asChild className="gradient-brand px-6 font-semibold text-white shadow-lg shadow-primary/20 hover:opacity-90">
              <a href="#contact">احجز استشارة</a>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/25 bg-card/70 text-foreground hover:bg-primary/10 hover:text-primary"
                aria-label="فتح القائمة"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-primary/15 bg-background/95 backdrop-blur-xl">
              <div className="flex h-full flex-col pt-6">
                <div className="mb-8 flex h-32 items-center justify-center overflow-hidden border-b border-primary/15 pb-7">
                  <BrandLogo className="block max-h-24 max-w-[230px] object-contain logo-glow" priority />
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 font-medium text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto space-y-4 border-t border-primary/15 pt-6">
                  <a
                    href="mailto:info@fasdev.org"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@fasdev.org</span>
                  </a>
                  <a
                    href="tel:00966561637935"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    <span dir="ltr">00966561637935</span>
                  </a>
                  <Button asChild className="gradient-brand mt-4 w-full font-semibold text-white">
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      ابدأ التواصل
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
