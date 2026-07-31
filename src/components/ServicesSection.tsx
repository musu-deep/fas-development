"use client";

import {
  ArrowLeft,
  BarChart3,
  Building2,
  Cpu,
  Handshake,
  Layers3,
  Lightbulb,
  Network,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "تطوير المشاريع التنموية",
    description:
      "نحوّل الاحتياجات والتحديات المجتمعية إلى مشاريع تنموية واضحة الأهداف، قابلة للتنفيذ والقياس والاستدامة.",
    features: ["تصميم المشاريع", "نماذج الأثر", "خطط التنفيذ"],
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: BarChart3,
    title: "تطوير الفرص الاستثمارية",
    description:
      "نبني فرصاً استثمارية متماسكة عبر تحليل السوق، وصياغة القيمة، وتطوير النموذج المالي والاستثماري.",
    features: ["تحليل الفرص", "النماذج المالية", "ملفات الاستثمار"],
    color: "from-purple-500 to-fuchsia-700",
  },
  {
    icon: Handshake,
    title: "الشراكات والتحالفات",
    description:
      "نصمم شراكات استراتيجية تجمع أصحاب المصلحة حول أهداف مشتركة وأدوار واضحة ونموذج حوكمة قابل للتطبيق.",
    features: ["تصميم الشراكات", "مواءمة المصالح", "حوكمة التعاون"],
    color: "from-indigo-500 to-violet-700",
  },
  {
    icon: Rocket,
    title: "تأسيس وتشغيل المشاريع",
    description:
      "نرافق المشروع من الفكرة إلى الإطلاق عبر بناء الهيكل التشغيلي، وخطة المراحل، ومؤشرات الأداء والمتابعة.",
    features: ["خطة الإطلاق", "نموذج التشغيل", "إدارة التنفيذ"],
    color: "from-fuchsia-500 to-purple-700",
  },
  {
    icon: Lightbulb,
    title: "دراسات الجدوى ونماذج الأعمال",
    description:
      "نختبر جدوى الفكرة ونصمم نموذج العمل والقيمة المقدمة ومصادر الإيراد والتكلفة ومسارات النمو.",
    features: ["دراسة الجدوى", "نموذج الأعمال", "استراتيجية النمو"],
    color: "from-violet-400 to-indigo-600",
  },
  {
    icon: Layers3,
    title: "إدارة المحافظ والمبادرات",
    description:
      "نرتب المشاريع والمبادرات ضمن محافظ مترابطة، ونحدد الأولويات والاعتماديات ومؤشرات الإنجاز والأثر.",
    features: ["تصميم المحافظ", "إدارة الأولويات", "متابعة الأثر"],
    color: "from-purple-400 to-violet-700",
  },
  {
    icon: Cpu,
    title: "التحول المؤسسي والرقمي",
    description:
      "نطوّر التشغيل ونوظف التقنية والذكاء الاصطناعي لبناء عمليات أكثر كفاءة وقرارات أسرع وتجربة أفضل.",
    features: ["التحول الرقمي", "الذكاء الاصطناعي", "أتمتة العمليات"],
    color: "from-indigo-400 to-purple-600",
  },
  {
    icon: Network,
    title: "بناء القدرات ونقل المعرفة",
    description:
      "نرفع جاهزية القيادات وفرق المشاريع والاستثمار عبر برامج تطبيقية وأدلة عمل وأدوات قابلة للاستخدام.",
    features: ["تطوير القيادات", "فرق المشاريع", "أدلة وأدوات العمل"],
    color: "from-violet-500 to-fuchsia-700",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-violet-700/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            مجالات عملنا
          </Badge>
          <h2 className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">من الفكرة إلى </span>
            <span className="text-gradient">مشروع قابل للنمو والأثر</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            نخدم الجهات التنموية والمستثمرين وأصحاب المشاريع عبر مسار متكامل يجمع
            تطوير الفرصة، وبناء الشراكة، وتصميم المشروع، ثم التأسيس والتشغيل والمتابعة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-panel card-hover group relative overflow-hidden rounded-3xl p-6"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`}
              />
              <div className="relative z-10 space-y-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg shadow-primary/15 transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>

                <p className="min-h-[108px] text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <div className="space-y-2 border-t border-primary/10 pt-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-semibold">اعرف المزيد</span>
                  <ArrowLeft className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="gradient-brand px-8 font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90"
          >
            <a href="#contact">
              ناقش مشروعك أو فرصتك الاستثمارية
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
