"use client";

import { ArrowLeft, Briefcase, Building2, Globe, Play, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

const orbitItems = [
  { icon: Building2, label: "تطوير مؤسسي", position: "top-5 left-1/2 -translate-x-1/2" },
  { icon: Globe, label: "شراكات دولية", position: "top-1/2 right-0 -translate-y-1/2" },
  { icon: Briefcase, label: "حلول أعمال", position: "bottom-8 left-8" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36"
    >
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-55" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute bottom-[12%] left-[4%] h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="space-y-8 text-center lg:text-right">
            <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                فرح التنمية | FARAH DEVELOPMENT
              </span>
            </div>

            <h1 className="animate-slide-up text-4xl font-black leading-[1.25] opacity-0 stagger-1 md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-foreground">شريكك الاستراتيجي</span>
              <br />
              <span className="text-gradient glow-text">في بناء المستقبل</span>
            </h1>

            <p className="mx-auto max-w-2xl animate-slide-up text-lg leading-9 text-muted-foreground opacity-0 stagger-2 lg:mx-0 lg:text-xl">
              نطوّر الأعمال والمشروعات من الفكرة إلى التشغيل، ونبني حلولاً مؤسسية
              تجمع بين الاستراتيجية والتقنية والذكاء الاصطناعي والشراكات ذات الأثر.
            </p>

            <div className="flex animate-slide-up flex-col justify-center gap-4 opacity-0 stagger-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gradient-brand px-8 py-6 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] hover:opacity-90"
              >
                <a href="#services">
                  استكشف خدماتنا
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 bg-card/50 px-8 py-6 text-base text-foreground backdrop-blur-md hover:bg-primary/10 hover:text-primary"
              >
                <a href="#about">
                  <Play className="ml-2 h-5 w-5" />
                  تعرّف على فرح التنمية
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-primary/15 pt-8 animate-slide-up opacity-0 stagger-4">
              {[
                { value: "+50", label: "مشروعاً" },
                { value: "8", label: "قطاعات" },
                { value: "+15", label: "عاماً من الخبرة" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-right">
                  <div className="text-3xl font-black text-gradient md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden items-center justify-center lg:flex animate-scale-in opacity-0 stagger-2">
            <div className="relative h-[540px] w-[540px]">
              <div className="absolute inset-8 rounded-full border border-primary/10" />
              <div className="absolute inset-20 rounded-full border border-dashed border-primary/25" />
              <div className="absolute inset-32 rounded-full border border-primary/20" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]" />

              <div className="glass-panel brand-ring absolute left-1/2 top-1/2 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[3.5rem] p-8">
                <BrandLogo className="h-44 w-auto logo-glow" priority />
                <span className="mt-2 text-[10px] font-semibold tracking-[0.34em] text-primary/80" dir="ltr">
                  FASDEV.ORG
                </span>
              </div>

              {orbitItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`absolute ${item.position} animate-float`}
                  style={{ animationDelay: `${index * -1.4}s` }}
                >
                  <div className="glass-panel flex min-w-36 items-center gap-3 rounded-2xl px-4 py-3">
                    <div className="gradient-brand flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-primary/20">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/85">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-20 right-12 h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_rgba(161,104,255,0.9)]" />
              <div className="absolute left-24 top-24 h-2 w-2 rounded-full bg-violet-300/70" />
              <div className="absolute bottom-32 left-20 h-4 w-4 rounded-full border border-primary/50" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">اكتشف المزيد</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/30 p-1">
          <div className="h-3 w-1.5 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
