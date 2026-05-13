"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Target,
  Globe,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

const visionPoints = [
  {
    icon: Target,
    title: "شريك استراتيجي",
    description: "نهدف لأن نكون الشريك الاستراتيجي الأول للمشاريع الكبرى",
  },
  {
    icon: Globe,
    title: "انتشار عالمي",
    description: "توسيع نطاق أعمالنا لتشمل أسواقاً جديدة حول العالم",
  },
  {
    icon: TrendingUp,
    title: "نمو مستدام",
    description: "تحقيق نمو مستدام يدعم الاقتصاد الوطني",
  },
  {
    icon: Rocket,
    title: "ابتكار وتطوير",
    description: "قيادة الابتكار في جميع القطاعات التي نعمل بها",
  },
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main card */}
              <div className="relative p-8 rounded-3xl bg-card border border-border glow overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Year display */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-gold mb-4">
                    <Target className="w-10 h-10 text-black" />
                  </div>

                  <div className="text-8xl md:text-9xl font-bold text-gradient glow-text">
                    2026
                  </div>

                  <p className="text-xl text-muted-foreground">
                    رؤيتنا للمستقبل
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-2 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">التقدم</span>
                      <span className="text-primary font-medium">75%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-gold rounded-full transition-all duration-1000"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-lg bg-primary/10 rotate-45" />
              </div>

              {/* Decorative cards */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-card border border-primary/20 flex items-center justify-center animate-float">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl bg-card border border-primary/20 flex items-center justify-center animate-float"
                style={{ animationDelay: "-2s" }}
              >
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <Badge
                variant="outline"
                className="border-primary/30 text-primary mb-4"
              >
                رؤية 2026
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">نبني </span>
                <span className="text-gradient">مستقبلاً أفضل</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                تهدف مجموعة فاس التنموية من خلال رؤيتها لعام 2026 إلى أن تكون
                شريكاً استراتيجياً في بناء المستقبل ودعم الاقتصاد الوطني عبر
                معايير جودة عالمية، مع التوسع في أسواق جديدة وتعزيز مكانتنا
                الريادية في جميع القطاعات.
              </p>
            </div>

            {/* Vision Points */}
            <div className="grid sm:grid-cols-2 gap-6">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="gradient-gold text-black font-semibold px-8 hover:opacity-90 transition-opacity"
            >
              اكتشف رؤيتنا
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
