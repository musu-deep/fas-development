import { Handshake, Network, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "./PartnersSection.module.css";

const partners = [
  {
    mark: "ARAAK",
    name: "مجموعة آراك للتنمية",
    description: "تطوير وتمكين وشراكات تنموية",
  },
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
    mark: "FAS DIGITAL",
    name: "فاس للحلول الرقمية",
    description: "منصات وتشغيل وتحول رقمي",
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
  const marqueePartners = [...partners, ...partners];

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
            شبكة الأعمال والشراكات
          </Badge>
          <h2 className="mb-5 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">نوسّع الأثر عبر </span>
            <span className="text-gradient">شراكات تكاملية</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            نؤمن أن المشروعات الأقوى تُبنى ضمن منظومة من الخبرات والعلاقات، لذلك
            نطوّر شبكات تعاون تربط التعليم والتنمية والتقنية والاستثمار.
          </p>
        </div>

        <div className="partner-marquee-viewport relative overflow-hidden py-5" dir="ltr">
          <div className="partner-marquee-track flex w-max gap-5">
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
                <h3 className="mb-2 text-base font-bold text-foreground" dir="auto">
                  {partner.name}
                </h3>
                <p className="text-xs leading-6 text-muted-foreground" dir="auto">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {partnershipValues.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-primary/10 bg-card/45 p-6 backdrop-blur-md"
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
