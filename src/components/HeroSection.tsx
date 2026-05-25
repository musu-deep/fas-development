"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Building2, Briefcase, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Geometric shapes */}
      <div className="absolute top-32 left-20 hidden lg:block">
        <div className="w-20 h-20 border border-primary/20 rounded-2xl rotate-45 animate-pulse-glow" />
      </div>
      <div className="absolute bottom-40 right-32 hidden lg:block">
        <div className="w-16 h-16 border border-primary/30 rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">
                رؤية 2026
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up opacity-0 stagger-1">
              <span className="text-foreground">شريكك الاستراتيجي</span>
              <br />
              <span className="text-gradient glow-text">في بناء المستقبل</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up opacity-0 stagger-2">
              مجموعة فاس التنموية - خبراء ريادة الأعمال والاستشارات التطويرية وقطاع،
              التكنولوجيا والذكاء الاصطناعي، والرعاية الصحية، والاستثمار الرياضي. نبني المستقبل
              بمعايير تميز وجودة عالمية.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up opacity-0 stagger-3">
              <Button
                size="lg"
                className="gradient-gold text-black font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105"
              >
                استكشف خدماتنا
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6 group"
              >
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                شاهد الفيديو التعريفي
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-slide-up opacity-0 stagger-4">
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  +50
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  مشروع منجز
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  8
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  قطاعات متنوعة
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  +15
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  سنة خبرة
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center animate-scale-in opacity-0 stagger-2">
            {/* Main hexagon grid */}
            <div className="relative w-[500px] h-[500px]">
              {/* Center logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-32 h-32 rounded-3xl gradient-gold flex items-center justify-center shadow-2xl shadow-primary/30 animate-pulse-glow">
                  <span className="text-4xl font-bold text-black">FAS</span>
                </div>
              </div>

              {/* Orbiting icons */}
              <div className="absolute inset-0">
                {/* Ring 1 */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  style={{ animation: "float 4s ease-in-out infinite" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-card border border-primary/20 flex items-center justify-center card-hover">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  style={{ animation: "float 5s ease-in-out infinite" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-card border border-primary/20 flex items-center justify-center card-hover">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div
                  className="absolute top-1/2 right-0 -translate-y-1/2"
                  style={{ animation: "float 4.5s ease-in-out infinite" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-card border border-primary/20 flex items-center justify-center card-hover">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Decorative rings */}
                <div className="absolute inset-8 border border-primary/10 rounded-full" />
                <div className="absolute inset-16 border border-primary/20 rounded-full animate-pulse" />
                <div className="absolute inset-24 border border-primary/10 rounded-full" />

                {/* Corner decorations */}
                <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary/50" />
                <div className="absolute bottom-32 left-16 w-2 h-2 rounded-full bg-primary/30" />
                <div className="absolute top-40 left-24 w-4 h-4 rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">اكتشف المزيد</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
