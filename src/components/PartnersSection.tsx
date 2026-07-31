import {
  Building2,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import styles from "./PartnersSection.module.css";

const partnershipDomains = [
  {
    icon: Landmark,
    title: "الجهات الحكومية والتنموية",
    partnership:
      "تصميم المبادرات والمشاريع التنموية، وإعداد الدراسات، وبناء نماذج التنفيذ والشراكة وقياس الأثر.",
    beneficiaries: "الجهات الحكومية والبرامج الوطنية وصناديق التنمية والجهات المانحة.",
  },
  {
    icon: TrendingUp,
    title: "القطاع الاستثماري وصناديق التمويل",
    partnership:
      "تطوير الفرص، وتحليل الجدوى، وبناء النماذج الاستثمارية، وتجهيز المشاريع للاستثمار والتوسع.",
    beneficiaries: "المستثمرون والصناديق وشركات الاستثمار العائلي ومنصات التمويل.",
  },
  {
    icon: Handshake,
    title: "القطاع غير الربحي والأوقاف",
    partnership:
      "تطوير المشاريع ذات الأثر، وتنمية الموارد، وتصميم الشراكات، وبناء نماذج الاستدامة والحوكمة.",
    beneficiaries: "الجمعيات والمؤسسات الأهلية والأوقاف والمبادرات المجتمعية.",
  },
  {
    icon: Building2,
    title: "الشركات والمطورون وأصحاب المشاريع",
    partnership:
      "تطوير نماذج الأعمال، وبناء المحافظ والمشاريع الجديدة، وتحسين التشغيل وفتح مسارات النمو والشراكة.",
    beneficiaries: "الشركات الكبرى والمتوسطة ورواد الأعمال ومطورو المشاريع.",
  },
  {
    icon: Cpu,
    title: "شركاء التقنية والذكاء الاصطناعي",
    partnership:
      "بناء حلول رقمية وأتمتة العمليات وتحليل البيانات وتطوير المنصات الداعمة للمشاريع والاستثمار.",
    beneficiaries: "الجهات الراغبة في رفع كفاءة مشاريعها وتشغيلها واتخاذ القرار.",
  },
  {
    icon: GraduationCap,
    title: "الجامعات ومراكز الخبرة",
    partnership:
      "دراسات وبحوث تطبيقية، وتطوير قدرات فرق المشاريع، ونقل المعرفة، وبناء برامج نوعية مشتركة.",
    beneficiaries: "الجامعات ومراكز البحوث وبيوت الخبرة والمعاهد المهنية.",
  },
];

const partnershipValues = [
  {
    icon: Handshake,
    title: "قيمة مشتركة",
    description: "نصمم الشراكة حول نتائج واضحة ومنافع متوازنة لجميع الأطراف.",
  },
  {
    icon: Network,
    title: "تكامل الموارد والخبرات",
    description: "نربط التمويل والخبرة والوصول والتنفيذ في نموذج تعاون واحد.",
  },
  {
    icon: ShieldCheck,
    title: "حوكمة قابلة للتنفيذ",
    description: "نحدد الأدوار والالتزامات ومؤشرات النجاح وآلية اتخاذ القرار منذ البداية.",
  },
];

export default function PartnersSection() {
  const marqueeDomains = [...partnershipDomains, ...partnershipDomains];

  return (
    <section id="partners" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/5 text-primary"
          >
            منظومة الشراكات
          </Badge>
          <h2 className="mb-5 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">نجمع الأطراف حول </span>
            <span className="text-gradient">فرصة ومشروع وقيمة مشتركة</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            نبني الشراكات بين الجهات التنموية والمستثمرين والمطورين ومقدمي الخبرة،
            ونحوّل التكامل بينهم إلى مشاريع واضحة المساهمة والحوكمة والنتائج.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">أطراف منظومة العمل</p>
            <h3 className="mt-1 text-2xl font-black text-foreground">
              شراكات مصممة بحسب طبيعة كل مشروع
            </h3>
          </div>
          <Badge variant="secondary" className="rounded-full px-4 py-2">
            تنمية × استثمار × خبرة × تنفيذ
          </Badge>
        </div>

        <div className={`${styles.viewport} relative overflow-hidden py-5`} dir="ltr">
          <div className={`${styles.track} flex w-max gap-5`}>
            {marqueeDomains.map((domain, index) => (
              <article
                key={`${domain.title}-${index}`}
                className="glass-panel group flex min-h-[310px] w-[330px] shrink-0 flex-col rounded-3xl px-6 py-7 text-right transition duration-300 hover:-translate-y-2 hover:border-primary/40"
                dir="rtl"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-inner">
                    <domain.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-primary/15 bg-primary/[0.05] px-3 py-1.5 text-xs font-bold text-primary">
                    شريك محتمل
                  </span>
                </div>

                <h4 className="mb-5 min-h-[56px] text-xl font-black leading-8 text-foreground transition-colors group-hover:text-primary">
                  {domain.title}
                </h4>

                <div className="mb-4">
                  <p className="mb-1 text-xs font-bold text-primary">مجال التكامل</p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {domain.partnership}
                  </p>
                </div>

                <div className="mt-auto border-t border-primary/10 pt-4">
                  <p className="mb-1 text-xs font-bold text-primary">الجهات المستفيدة</p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {domain.beneficiaries}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-7 text-muted-foreground">
          تمثل هذه البطاقات نطاقات التعاون التي تعمل عليها فرح التنمية، ولا تشير إلى
          اتفاقيات قائمة مع جهات بعينها ما لم يعلن عنها رسمياً.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {partnershipValues.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-primary/10 bg-card/40 p-6 backdrop-blur-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
