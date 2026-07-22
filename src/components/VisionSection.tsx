"use client";

import { ArrowLeft, Globe, Rocket, Target, TrendingUp } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const visionPoints = [
  {
    icon: Target,
    title: "وضوح استراتيجي",
    description: "تحويل الطموحات إلى أولويات ومسارات قابلة للتنفيذ والقياس.",
  },
  {
    icon: Globe,
    title: "شراكات ممتدة",
    description: "بناء جسور تعاون محلية ودولية توسّع الفرص وتسرّع النمو.",
  },
  {
    icon: TrendingUp,
    title: "نمو مستدام",
    description: "تصميم نماذج تشغيل واستثمار تدعم الاستمرارية وصناعة الأثر.",
  },
  {
    icon: Rocket,
    title: "ابتكار عملي",
    description: "توظيف التقنية والذكاء الاصطناعي في حلول قابلة للاستخدام الفعلي.",
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-card/75 via-background to-card/60" />
      <div className="absolute left-0 top-1/2 h-full w-1/2 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="absolute right-0 top-0 h-1/2 w-1/3 bg-gradient-to-bl from-violet-500/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-xl">
              <div className="glass-panel glow relative overflow-hidden rounded-[2.5rem] p-8 md:p-10">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-[90px]" />

                <div className="relative z-10 space-y-7 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 p-2 brand-ring">
                    <BrandLogo variant="mark" className="h-20 w-20" />
                  </div>

                  <div>
                    <div className="text-7xl font-black text-gradient glow-text md:text-8xl">
                      2026
                    </div>
                    <p className="mt-3 text-xl font-semibold text-foreground">
                      مرحلة توسع وبناء أثر
                    </p>
                    <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">
                      عام لتثبيت الهوية المؤسسية، وتطوير الحلول، وتوسيع شبكة
                      الشراكات والمشروعات النوعية.
                    </p>
                  </div>

                  <div className="space-y-3 rounded-2xl border border-primary/15 bg-background/45 p-5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">تقدم مسار التحول</span>
                      <span className="font-bold text-primary">75%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                      <div className="gradient-brand h-full w-3/4 rounded-full shadow-[0_0_18px_rgba(155,98,255,0.55)]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel absolute -right-4 -top-6 flex h-20 w-20 animate-float items-center justify-center rounded-2xl">
                <Rocket className="h-9 w-9 text-primary" />
              </div>
              <div
                className="glass-panel absolute -bottom-6 -left-4 flex h-20 w-20 animate-float items-center justify-center rounded-2xl"
                style={{ animationDelay: "-2s" }}
              >
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
                رؤيتنا
              </Badge>
              <h2 className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
                <span className="text-foreground">نبني </span>
                <span className="text-gradient">مستقبلاً أكثر وضوحاً</span>
              </h2>
              <p className="text-lg leading-9 text-muted-foreground">
                تتطلع فرح التنمية إلى أن تكون منصة تطوير وشراكة موثوقة، تساعد
                المؤسسات والمشروعات على الانتقال من الفكرة إلى نموذج عمل متماسك،
                ومن التشغيل التقليدي إلى أداء أكثر مرونة وابتكاراً واستدامة.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {visionPoints.map((point) => (
                <div
                  key={point.title}
                  className="glass-panel card-hover flex items-start gap-4 rounded-2xl p-5"
                >
                  <div className="gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-lg shadow-primary/15">
                    <point.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-foreground">{point.title}</h4>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="gradient-brand px-8 font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90"
            >
              <a href="#contact">
                ابنِ مسار التطوير معنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
