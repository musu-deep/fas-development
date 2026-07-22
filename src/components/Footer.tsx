"use client";

import Link from "next/link";
import { ArrowUp, Globe, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const footerLinks = {
  services: [
    { name: "التطوير المؤسسي والاستشارات", href: "#services" },
    { name: "التقنية والذكاء الاصطناعي", href: "#services" },
    { name: "التدريب وتطوير القيادات", href: "#services" },
    { name: "المقاولات والتطوير العقاري", href: "#services" },
    { name: "الخدمات الصحية واللوجستية", href: "#services" },
    { name: "الاستثمار والفعاليات", href: "#services" },
  ],
  company: [
    { name: "من نحن", href: "#about" },
    { name: "رؤيتنا", href: "#vision" },
    { name: "خدماتنا", href: "#services" },
    { name: "تواصل معنا", href: "#contact" },
  ],
  channels: [
    { name: "fasdev.org", href: "https://fasdev.org" },
    { name: "info@fasdev.org", href: "mailto:info@fasdev.org" },
    { name: "#fasdevgroup", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-primary/15 bg-card/90">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Link href="#home" className="inline-flex items-center">
              <BrandLogo className="h-32 w-auto logo-glow" />
            </Link>

            <p className="max-w-md leading-8 text-muted-foreground">
              فرح التنمية شريك في تطوير الأعمال والمشروعات، يجمع بين الاستراتيجية
              والتشغيل والتقنية لبناء حلول أكثر وضوحاً وكفاءة واستدامة.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@fasdev.org"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span>info@fasdev.org</span>
              </a>
              <a
                href="tel:00966561637935"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                <span dir="ltr">00966561637935</span>
              </a>
              <a
                href="https://fasdev.org"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Globe className="h-5 w-5" />
                <span dir="ltr">fasdev.org</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>الرياض - المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-foreground">مجالات العمل</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-foreground">روابط سريعة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-foreground">قنوات التواصل</h4>
            <ul className="space-y-3">
              {footerLinks.channels.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    dir="ltr"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      <div className="container relative z-10 mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-right">
            © {new Date().getFullYear()} فرح التنمية - Farah Development. جميع الحقوق محفوظة.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 px-4 py-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <span className="text-sm">العودة للأعلى</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
