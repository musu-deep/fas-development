"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Car,
  Laptop,
  HeartPulse,
  Plane,
  Trophy,
  ArrowLeft,
  Truck,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "المقاولات والتطوير العقاري",
    description:
      "نقدم خدمات متكاملة في مجال البناء والتشييد والتطوير العقاري، مع الالتزام بأعلى معايير الجودة والسلامة.",
    features: ["تشييد المباني", "التطوير العقاري", "إدارة المشاريع"],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Car,
    title: "التجارة العامة والسيارات",
    description:
      "نوفر حلولاً متكاملة في مجال التجارة العامة وتوريد السيارات بمختلف أنواعها وماركاتها العالمية.",
    features: ["استيراد السيارات", "التجارة العامة", "قطع الغيار"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Laptop,
    title: "التكنولوجيا والإعلام",
    description:
      "نقدم حلولاً تقنية مبتكرة وخدمات إعلامية متكاملة تواكب التطور الرقمي المتسارع.",
    features: ["الحلول الرقمية", "الإعلام والتسويق", "تطوير البرمجيات"],
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: HeartPulse,
    title: "الرعاية الصحية",
    description:
      "نستثمر في قطاع الرعاية الصحية لتوفير خدمات طبية متميزة ومرافق صحية حديثة.",
    features: ["المرافق الصحية", "الأجهزة الطبية", "الخدمات العلاجية"],
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "التدريب والتطوير",
    description:
      "نقدم برامج تدريبية متخصصة لتطوير الكوادر البشرية ورفع كفاءة الأداء المؤسسي.",
    features: ["التدريب المهني", "تطوير القيادات", "الاستشارات"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Plane,
    title: "السياحة والسفر",
    description:
      "نوفر خدمات سياحية متميزة وباقات سفر شاملة تلبي تطلعات عملائنا.",
    features: ["الرحلات السياحية", "حجز الفنادق", "تنظيم المؤتمرات"],
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Truck,
    title: "النقل واللوجستيات",
    description:
      "نقدم حلولاً لوجستية متكاملة وخدمات نقل موثوقة تغطي جميع الاحتياجات.",
    features: ["النقل البري", "الشحن الجوي", "التخزين"],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Trophy,
    title: "الاستثمار الرياضي",
    description:
      "نستثمر في القطاع الرياضي وتطوير البنية التحتية للملاعب والمنشآت الرياضية.",
    features: ["تطوير الملاعب", "الأكاديميات الرياضية", "الفعاليات"],
    color: "from-yellow-500 to-amber-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-4"
          >
            خدماتنا
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">قطاعات </span>
            <span className="text-gradient">متنوعة ومتكاملة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نعمل في ثمانية قطاعات رئيسية متنوعة، نقدم من خلالها خدمات متميزة
            تلبي احتياجات عملائنا بأعلى معايير الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden card-hover"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="pt-4 border-t border-border/50 space-y-2">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                  <span className="text-sm font-medium">اعرف المزيد</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>

              {/* Border gradient effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="gradient-gold text-black font-semibold px-8 hover:opacity-90 transition-opacity"
          >
            استكشف جميع الخدمات
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
