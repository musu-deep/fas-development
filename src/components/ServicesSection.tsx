"use client";

import {
  ArrowLeft,
  Building2,
  Car,
  GraduationCap,
  HeartPulse,
  Laptop,
  Plane,
  Trophy,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "المقاولات والتطوير العقاري",
    description:
      "خدمات متكاملة في البناء والتشييد والتطوير العقاري وإدارة المشروعات، وفق معايير مهنية واضحة.",
    features: ["تشييد المباني", "التطوير العقاري", "إدارة المشاريع"],
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: Car,
    title: "التجارة العامة والسيارات",
    description:
      "حلول توريد وتجارة مرنة تربط الاحتياج بالفرصة وتدعم كفاءة سلاسل الإمداد والتوسع.",
    features: ["استيراد السيارات", "التجارة العامة", "قطع الغيار"],
    color: "from-purple-500 to-fuchsia-700",
  },
  {
    icon: Laptop,
    title: "التقنية والذكاء الاصطناعي",
    description:
      "تصميم حلول رقمية وأدوات ذكاء اصطناعي ومنصات تشغيل تعزز الأداء والوضوح وسرعة اتخاذ القرار.",
    features: ["الحلول الرقمية", "الذكاء الاصطناعي", "تطوير المنصات"],
    color: "from-indigo-500 to-violet-700",
  },
  {
    icon: HeartPulse,
    title: "الرعاية الصحية",
    description:
      "تطوير فرص ومشروعات صحية ترتكز على الجودة، وتحسين التجربة، وبناء نماذج تشغيل مستدامة.",
    features: ["المرافق الصحية", "الأجهزة الطبية", "الخدمات العلاجية"],
    color: "from-fuchsia-500 to-purple-700",
  },
  {
    icon: GraduationCap,
    title: "التدريب والتطوير",
    description:
      "برامج نوعية لتطوير القيادات والكوادر ورفع الجاهزية المؤسسية وتحويل المعرفة إلى ممارسة.",
    features: ["التدريب المهني", "تطوير القيادات", "الاستشارات"],
    color: "from-violet-400 to-indigo-600",
  },
  {
    icon: Plane,
    title: "السياحة والفعاليات",
    description:
      "تصميم تجارب وبرامج وتنظيم فعاليات ومؤتمرات تجمع بين جودة التنفيذ وقيمة المحتوى.",
    features: ["البرامج السياحية", "تنظيم المؤتمرات", "إدارة التجارب"],
    color: "from-purple-400 to-violet-700",
  },
  {
    icon: Truck,
    title: "النقل واللوجستيات",
    description:
      "حلول لوجستية متكاملة وخدمات نقل وتخزين وتنسيق تشغيلي تدعم استمرارية الأعمال.",
    features: ["النقل البري", "الشحن", "التخزين"],
    color: "from-indigo-400 to-purple-600",
  },
  {
    icon: Trophy,
    title: "الاستثمار الرياضي",
    description:
      "تطوير فرص ومشروعات رياضية وبنى تحتية وبرامج أكاديمية وفعاليات قابلة للنمو والاستدامة.",
    features: ["تطوير الملاعب", "الأكاديميات الرياضية", "الفعاليات"],
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
            خدماتنا
          </Badge>
          <h2 className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">قطاعات </span>
            <span className="text-gradient">متنوعة بمنهج واحد</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            نربط الخبرات القطاعية بمنهج مؤسسي موحّد يساعد على تصميم الفرص، ورفع
            كفاءة التنفيذ، وبناء مشروعات أكثر قدرة على الاستمرار والنمو.
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

                <p className="min-h-[84px] text-sm leading-7 text-muted-foreground">
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
              ناقش احتياج مشروعك
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
