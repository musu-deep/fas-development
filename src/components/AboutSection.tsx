"use client";

import { Award, CheckCircle2, Target, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Target,
    title: "رؤية واضحة",
    description: "نحوّل التوجهات والطموحات إلى مسارات عمل قابلة للقياس والتنفيذ.",
  },
  {
    icon: Award,
    title: "معايير احترافية",
    description: "نلتزم بالجودة والوضوح والموثوقية في كل مرحلة من مراحل العمل.",
  },
  {
    icon: Users,
    title: "خبرات متكاملة",
    description: "نجمع الخبرة المؤسسية والتقنية والتنموية ضمن فريق وشبكة شركاء واحدة.",
  },
];

const values = [
  "الالتزام بالجودة والتميز",
  "الشفافية في جميع التعاملات",
  "الابتكار والتطوير المستمر",
  "صناعة أثر تنموي مستدام",
  "بناء شراكات استراتيجية",
  "تحقيق رضا العملاء",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/55 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            من نحن
          </Badge>
          <h2 className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">شركة </span>
            <span className="text-gradient">فرح التنمية</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            شريك تطوير مؤسسي يجمع بين الاستراتيجية والتشغيل والتقنية لبناء مشروعات
            أكثر وضوحاً وكفاءة وقدرة على النمو والاستدامة.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-9">
            <div className="space-y-6">
              <h3 className="line-decoration text-2xl font-bold text-foreground">
                قصتنا ومنهجنا
              </h3>
              <p className="leading-8 text-muted-foreground">
                انطلقت فرح التنمية من رؤية تؤمن بأن نجاح المشروعات لا يعتمد على
                الفكرة وحدها، بل على وضوح الاتجاه، وجودة التصميم، وكفاءة التشغيل،
                والقدرة على بناء شراكات فاعلة.
              </p>
              <p className="leading-8 text-muted-foreground">
                نعمل في قطاعات متعددة تشمل التطوير المؤسسي، والاستشارات، والتقنية
                والذكاء الاصطناعي، والتدريب، والرعاية الصحية، والخدمات اللوجستية،
                والاستثمار؛ ضمن منهج متكامل يربط الطموح بالنتائج.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">قيمنا الأساسية</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-panel border-gradient card-hover group rounded-3xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="gradient-brand flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel glow mt-20 rounded-3xl p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "+50", label: "مشروعاً ومبادرة" },
              { value: "8", label: "قطاعات عمل" },
              { value: "+100", label: "شريكاً وشبكة تعاون" },
              { value: "+15", label: "عاماً من الخبرة" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-black text-gradient md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
