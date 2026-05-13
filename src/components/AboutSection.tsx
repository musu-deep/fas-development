"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Award, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "رؤية واضحة",
    description: "نهدف لأن نكون شريكاً استراتيجياً في بناء المستقبل",
  },
  {
    icon: Award,
    title: "معايير عالمية",
    description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا",
  },
  {
    icon: Users,
    title: "فريق متميز",
    description: "نضم نخبة من الخبراء والمتخصصين في مختلف المجالات",
  },
];

const values = [
  "الالتزام بالجودة والتميز",
  "الشفافية في جميع التعاملات",
  "الابتكار والتطوير المستمر",
  "دعم الاقتصاد الوطني",
  "بناء شراكات استراتيجية",
  "تحقيق رضا العملاء",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-4"
          >
            من نحن
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">مجموعة </span>
            <span className="text-gradient">فاس التنموية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            مجموعة استثمارية رائدة تعمل في قطاعات متعددة ومتنوعة، تهدف إلى أن
            تكون شريكاً استراتيجياً في بناء المستقبل ودعم الاقتصاد الوطني
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground line-decoration">
                قصتنا
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                تأسست مجموعة فاس التنموية على أساس رؤية طموحة لتكون من أبرز
                الشركات الرائدة في مجالات التطوير والاستثمار. نعمل بشغف
                والتزام لتحقيق التميز في كل مشروع نقوم به، مع الحفاظ على أعلى
                معايير الجودة العالمية.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                تمتد أنشطتنا لتشمل المقاولات والتطوير العقاري، التجارة العامة
                والسيارات، التكنولوجيا والإعلام، الرعاية الصحية والتدريب،
                السياحة والنقل واللوجستيات، والاستثمار الرياضي وتطوير البنية
                التحتية للملاعب.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">قيمنا الأساسية</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border card-hover border-gradient"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 p-8 rounded-3xl bg-card border border-border glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+50", label: "مشروع منجز" },
              { value: "8", label: "قطاعات متنوعة" },
              { value: "+100", label: "شريك تجاري" },
              { value: "+500", label: "موظف" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
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
