"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    { name: "المقاولات والتطوير العقاري", href: "#services" },
    { name: "التجارة العامة والسيارات", href: "#services" },
    { name: "التكنولوجيا والإعلام", href: "#services" },
    { name: "الرعاية الصحية", href: "#services" },
    { name: "السياحة والنقل", href: "#services" },
    { name: "الاستثمار الرياضي", href: "#services" },
  ],
  company: [
    { name: "من نحن", href: "#about" },
    { name: "رؤيتنا", href: "#vision" },
    { name: "فريق العمل", href: "#" },
    { name: "المشاريع", href: "#" },
    { name: "الأخبار", href: "#" },
    { name: "الوظائف", href: "#" },
  ],
  support: [
    { name: "تواصل معنا", href: "#contact" },
    { name: "الأسئلة الشائعة", href: "#" },
    { name: "سياسة الخصوصية", href: "#" },
    { name: "الشروط والأحكام", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center font-bold text-xl text-black">
                  FAS
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">
                  فرح التنمية
                </span>
                <span className="text-sm text-muted-foreground tracking-wider">
                  FAS DEVELOPMENT
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              مجموعة استثمارية رائدة تعمل في قطاعات متعددة، نهدف إلى أن نكون
              شريكاً استراتيجياً في بناء المستقبل ودعم الاقتصاد الوطني.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:fasdevgroup@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>fasdevgroup@gmail.com</span>
              </a>
              <a
                href="tel:00966561637935"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">00966561637935</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Ryiadh - Saudi Arabia </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">الشركة</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">الدعم</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} مجموعة فرح فاس التنموية. جميع الحقوق
            محفوظة.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <span className="text-sm">العودة للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
