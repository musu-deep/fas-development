"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "الرئيسية", href: "#home" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "الرؤية", href: "#vision" },
  { name: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="mailto:fasdevgroup@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>fasdevgroup@gmail.com</span>
              </a>
              <a
                href="tel:+44501501643"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+44 501 501 643</span>
              </a>
            </div>
            <div className="text-muted-foreground">
              182-184 High Street North, East Ham, London, E6 2JA
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 lg:top-[44px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center font-bold text-xl text-black">
                  FAS
                </div>
                <div className="absolute -inset-1 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">
                  فرج التنمية
                </span>
                <span className="text-xs text-muted-foreground tracking-wider">
                  FAS DEVELOPMENT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button className="gradient-gold text-black font-semibold hover:opacity-90 transition-opacity px-6">
                احجز استشارة
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card border-border">
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                    <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center font-bold text-black">
                      FAS
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground">
                        فاس التنموية
                      </span>
                      <span className="text-xs text-muted-foreground">
                        FAS DEVELOPMENT
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="mt-auto pt-6 border-t border-border space-y-4">
                    <a
                      href="mailto:fasdevgroup@gmail.com"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Mail className="w-4 h-4" />
                      <span>fasdevgroup@gmail.com</span>
                    </a>
                    <a
                      href="tel:+44501501643"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Phone className="w-4 h-4" />
                      <span dir="ltr"> 501 501 643</span>
                    </a>
                    <Button className="w-full gradient-gold text-black font-semibold mt-4">
                      احجز استشارة
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
