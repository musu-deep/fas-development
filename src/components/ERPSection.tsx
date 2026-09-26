"use client";

import {
  ArrowLeft,
  BarChart3,
  Boxes,
  Building2,
  Factory,
  Network,
  RefreshCw,
  Store,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Factory,
    title: "المصانع الكبيرة",
    text: "تخطيط إنتاج دقيق، تتبع المواد الخام، وربط خطوط الإنتاج بالمخزون والمبيعات آلياً.",
  },
  {
    icon: Store,
    title: "شبكات نقاط البيع الضخمة",
    text: "ربط الفروع بالمخزون المركزي والتقارير المالية بوقت حقيقي، مع تحديث فوري لكل عملية بيع.",
  },
  {
    icon: TrendingUp,
    title: "الشركات سريعة التوسع",
    text: "الانتقال من إكسل والأنظمة المنفصلة والجرد اليدوي إلى منصة موحّدة قابلة للنمو.",
  },
];

const benefits = [
  { icon: Network, title: "رؤية واحدة موحّدة", text: "الإنتاج والمخزون والمبيعات والمحاسبة والموارد البشرية على منصة واحدة." },
  { icon: Factory, title: "تخطيط إنتاج دقيق", text: "معرفة الاحتياج من المواد الخام ومتى تنفد ومتى تبدأ دفعة الإنتاج القادمة." },
  { icon: Boxes, title: "مخزون لحظي", text: "كل حركة شراء أو بيع أو إنتاج تنعكس مباشرة على أرصدة المخزون." },
  { icon: BarChart3, title: "تقارير مالية وإدارية", text: "قرارات مبنية على بيانات محدثة بدلاً من تقديرات أو تقارير متأخرة." },
  { icon: RefreshCw, title: "قابلية للتوسع", text: "إضافة فروع وخطوط إنتاج ومستخدمين بدون إعادة بناء النظام من الصفر." },
];

const steps = [
  ["01", "دراسة العمليات الحالية", "نفهم سير العمل الفعلي في كل قسم قبل أي تنفيذ."],
  ["02", "تصميم النظام", "نبني الهيكلة وفق طبيعة المصنع أو شبكة الفروع، لا وفق قالب عام."],
  ["03", "التطبيق والربط", "نربط الإنتاج والمخزون والمبيعات ونقاط البيع والمحاسبة في مسار واحد."],
  ["04", "التدريب والتسليم", "نجهّز الفريق للانتقال إلى النظام الجديد بدون تعطيل العمليات."],
  ["05", "الدعم المستمر", "متابعة وصيانة وتطوير يواكب نمو الأعمال واستقرار النظام."],
];

export default function ERPSection() {
  return (
    <section id="erp" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.035] to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
              خدمة متخصصة / ERP
            </Badge>
            <h2 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
              <span className="text-foreground">أنظمة تخطيط موارد المؤسسات (ERP) للمؤسسات الكبيرة ونقاط البيع</span>
            </h2>
            <p className="mt-4 text-base font-semibold leading-8 text-primary/90 md:text-lg">
              من التعقيد إلى السيطرة الكاملة على عملياتك
            </p>
          </div>
          <p className="text-base leading-8 text-muted-foreground lg:text-lg">
            نصمم ونطبق أنظمة تخطيط موارد المؤسسات للمصانع الكبيرة وشبكات نقاط البيع
            الضخمة، بحيث تعمل الإنتاج والمخزون والمبيعات والمحاسبة والموارد البشرية ضمن
            منظومة واحدة مترابطة.
          </p>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-3">
          {audiences.map((item) => (
            <article key={item.title} className="glass-panel card-hover rounded-3xl p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand shadow-lg shadow-primary/15">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl border border-primary/10 bg-card/65 p-6 backdrop-blur-sm">
              <item.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 text-sm font-bold text-foreground">{item.title}</h3>
              <p className="text-xs leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 text-white shadow-2xl shadow-primary/10">
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-l lg:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Workflow className="h-7 w-7 text-violet-200" />
              </div>
              <span className="text-sm font-semibold text-violet-200">منهجية التنفيذ</span>
              <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                تفكيك العمليات ودراسة احتياج البرامج والمشاريع
              </h3>
            </div>

            <ol className="divide-y divide-white/10">
              {steps.map(([n, title, text]) => (
                <li key={n} className="grid grid-cols-[48px_1fr] gap-4 p-6 md:p-7">
                  <span className="pt-1 text-xs font-bold text-violet-300">{n}</span>
                  <div>
                    <h4 className="mb-1 font-bold text-white">{title}</h4>
                    <p className="text-sm leading-6 text-white/65">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-6 grid gap-6 rounded-[2rem] border border-primary/15 bg-gradient-to-l from-primary/10 via-card/80 to-card p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <span className="text-sm font-bold text-primary">جاهز تبدأ؟</span>
            <h3 className="mt-2 text-2xl font-black text-foreground md:text-3xl">خلّنا نفهم عملياتك أول.</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              كل مصنع وشبكة نقاط بيع مختلفة عن غيرها. ندرس واقع التشغيل أولاً، ثم نقترح
              الحل الأنسب لحجمك وميزانيتك ومسار نموك.
            </p>
          </div>
          <Button asChild size="lg" className="gradient-brand px-7 font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90">
            <a
              href="https://wa.me/966561637935?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%B9%D9%86%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20ERP"
              target="_blank"
              rel="noreferrer"
            >
              احجز استشارة أولية مجانية
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
