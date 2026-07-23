import {
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import styles from "./PartnersSection.module.css";

const collaborationNetwork = [
  {
    mark: "JAIN",
    name: "JAIN University",
    description: "تعليم دولي وتعاون أكاديمي",
  },
  {
    mark: "LECIM",
    name: "رابطة المدارس الإسلامية والنموذجية",
    description: "تطوير التعليم وبناء القدرات",
  },
  {
    mark: "SHUMOOS",
    name: "شموس الريادة التعليمية",
    description: "تعليم نوعي ومهارات المستقبل",
  },
  {
    mark: "AFAQ",
    name: "AFAQ International",
    description: "برامج تعليمية وعلاقات دولية",
  },
  {
    mark: "AN-NOUR",
    name: "Groupe Scolaire An-Nour",
    description: "تطوير المدارس والبرامج التعليمية",
  },
];

const strategicPartnershipTargets = [
  {
    mark: "SDAIA",
    name: "الهيئة السعودية للبيانات والذكاء الاصطناعي",
    description: "البيانات والذكاء الاصطناعي والابتكار المؤسسي",
    icon: Cpu,
  },
  {
    mark: "MONSHA'AT",
    name: "الهيئة العامة للمنشآت الصغيرة والمتوسطة",
    description: "تمكين المنشآت وريادة الأعمال والنمو",
    icon: Target,
  },
  {
    mark: "SDB",
    name: "بنك التنمية الاجتماعية",
    description: "التمويل التنموي واستدامة المشروعات",
    icon: Landmark,
  },
  {
    mark: "DGA",
    name: "هيئة الحكومة الرقمية",
    description: "التحول الرقمي والتميز المؤسسي",
    icon: Network,
  },
  {
    mark: "MICROSOFT",
    name: "Microsoft",
    description: "الحوسبة السحابية والحلول المؤسسية",
    icon: Cpu,
  },
  {
    mark: "UNDP",
    name: "برنامج الأمم المتحدة الإنمائي",
    description: "التنمية المستدامة وبناء القدرات",
    icon: GraduationCap,
  },
];

const partnershipValues = [
  {
    icon: Handshake,
    title: "علاقات ممتدة",
    description: "نبني التعاون على وضوح الأدوار وتكامل المصالح.",
  },
  {
    icon: Network,
    title: "شبكة متعددة القطاعات",
    description: "نربط الخبرات المحلية والدولية لصناعة فرص أكبر.",
  },
  {
    icon: ShieldCheck,
    title: "حوكمة وثقة",
    description: "نعمل ضمن مسارات مهنية قابلة للقياس والمتابعة.",
  },
];

export default function PartnersSection() {
  const marqueePartners = [...collaborationNetwork, ...collaborationNetwork];

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
            منظومة التعاون والشراكات
          </Badge>
          <h2 className="mb-5 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">نبني القيمة عبر </span>
            <span className="text-gradient">شراكات نوعية</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            نطوّر شبكة تعاون تجمع التعليم والتنمية والتقنية والتمويل، ونحدد
            أولويات شراكة استراتيجية تدعم توسع فرح التنمية ورفع قدرتها التنافسية.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">شبكة التعاون الحالية</p>
            <h3 className="mt-1 text-2xl font-black text-foreground">
              علاقات تعليمية وتنموية ممتدة
            </h3>
          </div>
          <Badge variant="secondary" className="rounded-full px-4 py-2">
            تعاون قائم ومتنامٍ
          </Badge>
        </div>

        <div className={`${styles.viewport} relative overflow-hidden py-5`} dir="ltr">
          <div className={`${styles.track} flex w-max gap-5`}>
            {marqueePartners.map((partner, index) => (
              <article
                key={`${partner.mark}-${index}`}
                className="glass-panel group flex min-h-[184px] w-[285px] shrink-0 flex-col items-center justify-center rounded-3xl px-6 py-7 text-center transition duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="relative mb-5 flex h-16 min-w-[150px] items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white/[0.04] to-violet-900/10 px-5 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative text-lg font-black tracking-[0.16em] text-foreground transition-colors group-hover:text-primary">
                    {partner.mark}
                  </span>
                </div>
                <h4 className="mb-2 text-base font-bold text-foreground" dir="auto">
                  {partner.name}
                </h4>
                <p className="text-xs leading-6 text-muted-foreground" dir="auto">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-primary/15 bg-card/35 p-6 backdrop-blur-md md:p-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <span className="text-sm font-bold">أولويات الشراكة الاستراتيجية</span>
              </div>
              <h3 className="text-2xl font-black text-foreground md:text-3xl">
                جهات نوعية نطمح لبناء تعاون مؤثر معها
              </h3>
            </div>
            <Badge
              variant="outline"
              className="rounded-full border-primary/25 bg-primary/5 px-4 py-2 text-primary"
            >
              شراكات مستهدفة
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {strategicPartnershipTargets.map((partner) => (
              <article
                key={partner.mark}
                className="group rounded-3xl border border-primary/12 bg-background/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/[0.04]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <partner.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-black tracking-[0.12em] text-primary" dir="ltr">
                    {partner.mark}
                  </span>
                </div>
                <h4 className="mb-2 text-base font-bold text-foreground">
                  {partner.name}
                </h4>
                <p className="text-sm leading-7 text-muted-foreground">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-primary/10 bg-primary/[0.04] px-5 py-4 text-xs leading-6 text-muted-foreground">
            تمثل هذه الجهات أولويات مقترحة لبناء العلاقات والتعاون، ولا تعني وجود
            اتفاقيات أو شراكات نافذة ما لم يُعلن عنها رسميًا.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
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
