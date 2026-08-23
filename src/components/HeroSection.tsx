"use client";

import { ArrowLeft, BarChart3, Building2, Handshake, Play, Sparkles } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

const orbitItems = [
  { icon: Building2, label: "مشاريع تنموية", position: "top-5 left-1/2 -translate-x-1/2" },
  { icon: BarChart3, label: "فرص استثمارية", position: "top-1/2 right-0 -translate-y-1/2" },
  { icon: Handshake, label: "شراكات استراتيجية", position: "bottom-8 left-8" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat pb-20 pt-32 lg:pt-36"
      style={{
        backgroundImage: "url('/hero-fasdev-2026.png?v=20260823-4')",
        backgroundColor: "#090815",
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[linear-gradient(270deg,rgba(8,6,22,0.62)_0%,rgba(8,6,22,0.42)_34%,rgba(8,6,22,0.12)_68%,transparent_100%)] lg:w-[62%]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090815]/30 to-transparent" />

      <div className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full bg-primary/5 blur-[110px]" />
      <div className="absolute bottom-[12%] left-[4%] h-96 w-96 rounded-full bg-violet-700/5 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="space-y-8 text-center lg:text-right">
            <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                فرح التنمية | FARAH DEVELOPMENT
              </span>
            </div>

            <h1 className="animate-slide-up text-4xl font-black leading-[1.42] opacity-0 stagger-1 md:text-5xl md:leading-[1.38] lg:text-6xl lg:leading-[1.34] xl:text-7xl xl:leading-[1.3]">
              <span className="text-foreground">نطوّر الفرص ونبني</span>
              <br />
              <span className="text-gradient glow-text">المشاريع والشراكات</span>
            </h1>

            <p className="mx-auto max-w-2xl animate-slide-up text-lg leading-9 text-muted-foreground opacity-0 stagger-2 lg:mx-0 lg:text-xl">
              نساعد الجهات التنموية والمستثمرين وأصحاب المشاريع على تحويل الأفكار
              والاحتياجات إلى فرص واضحة، وشراكات فاعلة، ومشاريع قابلة للتنفيذ والنمو والاستدامة.
            </p>

            <div className="flex animate-slide-up flex-col justify-center gap-4 opacity-0 stagger-3 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gradient-brand px-8 py-6 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] hover:opacity-90"
              >
                <a href="#services">
                  استكشف مجالات العمل
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
                  تعرّف على منهجنا
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-primary/15 pt-8 animate-slide-up opacity-0 stagger-4">
              {[
                { value: "+50", label: "مشروعاً ومبادرة" },
                { value: "+100", label: "شبكة شراكة وتعاون" },
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
