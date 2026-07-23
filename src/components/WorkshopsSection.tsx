"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarRange,
  Clock3,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    category: "التخطيط والتنفيذ",
    title: "ورشة بناء خطة الـ 100 يوم",
    summary:
      "مسار تطبيقي يحوّل الأولويات إلى مبادرات واضحة، ومؤشرات قياس، وجدول تنفيذ يمكن متابعته منذ اليوم الأول.",
    image:
      "https://images.unsplash.com/photo-1774842391684-b819ec9bd409?auto=format&fit=crop&w=1600&q=85",
    alt: "فريق عمل يناقش خطة تنفيذية أمام لوحة تخطيط",
    duration: "يوم تدريبي",
    audience: "القيادات وفرق المشاريع",
    outcome: "خطة تنفيذ ومصفوفة متابعة",
  },
  {
    category: "القيادة وبناء القدرات",
    title: "ورشة الجاهزية المؤسسية والقيادية",
    summary:
      "تجربة تدريبية تجمع بين التشخيص، وتطوير الممارسات القيادية، ورفع كفاءة الفرق في إدارة التغيير والعمل المشترك.",
    image:
      "https://images.unsplash.com/photo-1778877035089-c80dcb877f45?auto=format&fit=crop&w=1600&q=85",
    alt: "حضور ورشة تدريبية داخل قاعة مؤتمرات",
    duration: "4–6 ساعات",
    audience: "المديرون والكوادر الواعدة",
    outcome: "خارطة تطوير للقدرات",
  },
  {
    category: "الابتكار ونماذج الأعمال",
    title: "مختبر تصميم الفرص والشراكات",
    summary:
      "ورشة تشاركية لتوليد الفرص، وتحليل أصحاب المصلحة، وتصميم شراكات قابلة للتنفيذ والقياس والاستدامة.",
    image:
      "https://images.unsplash.com/photo-1623652554515-91c833e3080e?auto=format&fit=crop&w=1600&q=85",
    alt: "جلسة عصف ذهني تستخدم البطاقات والملاحظات اللاصقة",
    duration: "نصف يوم",
    audience: "فرق التطوير والاستثمار",
    outcome: "محفظة فرص أولية",
  },
  {
    category: "التطوير الرقمي",
    title: "ورشة التحول المؤسسي وتطبيقات الذكاء الاصطناعي",
    summary:
      "نربط الاحتياج المؤسسي بحالات استخدام عملية، ونبني خارطة طريق لتوظيف التقنية والذكاء الاصطناعي في التشغيل والقرار.",
    image:
      "https://images.unsplash.com/photo-1674509780304-b51c5e2f9dbf?auto=format&fit=crop&w=1600&q=85",
    alt: "جلسة تخطيط لمشروع رقمي باستخدام ملاحظات ملونة",
    duration: "يوم تطبيقي",
    audience: "القيادات وفرق التحول",
    outcome: "خارطة حالات استخدام",
  },
];

export default function WorkshopsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWorkshop = workshops[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? workshops.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === workshops.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="workshops" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/25 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
      <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-fuchsia-700/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 bg-primary/5 text-primary"
            >
              ورش العمل والبرامج التطبيقية
            </Badge>
            <h2 className="mb-5 text-3xl font-black md:text-4xl lg:text-5xl">
              <span className="text-foreground">تجارب تعلّم </span>
              <span className="text-gradient">تحوّل المعرفة إلى ممارسة</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              نصمم ورشاً قابلة للتخصيص حسب احتياج الجهة، ونربط كل جلسة بمخرج عملي
              يساعد الفريق على الانتقال من النقاش إلى التنفيذ.
            </p>
          </div>

          <div className="flex items-center gap-3" dir="ltr">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="عرض الورشة السابقة"
              className="glass-panel flex h-12 w-12 items-center justify-center rounded-2xl text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="عرض الورشة التالية"
              className="gradient-brand flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shadow-primary/20 transition hover:scale-105"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="group relative min-h-[420px] overflow-hidden lg:min-h-[570px]">
              <img
                key={activeWorkshop.image}
                src={activeWorkshop.image}
                alt={activeWorkshop.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full animate-fade-in object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-color" />

              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <Badge className="mb-4 border border-white/20 bg-black/40 text-white backdrop-blur-md">
                  {activeWorkshop.category}
                </Badge>
                <h3 className="max-w-3xl text-2xl font-black leading-tight text-white md:text-4xl">
                  {activeWorkshop.title}
                </h3>
              </div>

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                {String(activeIndex + 1).padStart(2, "0")} / {String(workshops.length).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="h-7 w-7" />
                </div>
                <p className="mb-8 text-base leading-8 text-muted-foreground md:text-lg">
                  {activeWorkshop.summary}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">المدة المقترحة</p>
                      <p className="mt-1 font-bold text-foreground">{activeWorkshop.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">الفئة المستهدفة</p>
                      <p className="mt-1 font-bold text-foreground">{activeWorkshop.audience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                    <CalendarRange className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">المخرج الرئيسي</p>
                      <p className="mt-1 font-bold text-foreground">{activeWorkshop.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="gradient-brand mt-8 w-full font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90"
              >
                <a href="#contact">
                  اطلب تنفيذ هذه الورشة
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop, index) => (
            <button
              key={workshop.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className={`group relative overflow-hidden rounded-2xl border text-right transition-all duration-300 ${
                activeIndex === index
                  ? "border-primary/60 bg-primary/10 shadow-lg shadow-primary/10"
                  : "border-primary/10 bg-card/50 hover:-translate-y-1 hover:border-primary/40"
              }`}
            >
              <div className="relative h-28 overflow-hidden">
                <img
                  src={workshop.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-4">
                <p className="mb-2 text-[11px] font-bold text-primary">{workshop.category}</p>
                <h4 className="text-sm font-bold leading-6 text-foreground">
                  {workshop.title}
                </h4>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
