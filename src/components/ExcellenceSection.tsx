"use client";

import { ArrowLeft, Award, BarChart3, Compass, Gauge, Map, Settings2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tracks = [
  { icon: Compass, title: "التقييم وتشخيص النضج", text: "قراءة واقع المؤسسة وتحليل النتائج لتحديد نقاط القوة وفجوات الأداء وفرص التحسين ذات الأولوية." },
  { icon: Map, title: "بناء خارطة طريق التميز", text: "تحويل نتائج التقييم إلى خارطة تنفيذ مرحلية بمبادرات واضحة، ملاك مسؤولية، مؤشرات ومواعيد مستهدفة." },
  { icon: Settings2, title: "النموذج التشغيلي لإدارة التميز", text: "تصميم الأدوار والحوكمة ودورات العمل والارتباطات التي تجعل التميز ممارسة مؤسسية لا نشاطاً موسمياً." },
  { icon: Gauge, title: "معالجة فرص التحسين", text: "تصميم وتنفيذ مبادرات التحسين ومتابعة إغلاق الفجوات وقياس أثرها على الأداء والنتائج." },
  { icon: BarChart3, title: "الأداء والنتائج والمؤشرات", text: "ربط التوجه الاستراتيجي بمؤشرات الأداء والنتائج، وبناء لوحات قيادة تساعد الإدارة على اتخاذ القرار." },
  { icon: Award, title: "الجاهزية لنماذج وجوائز التميز", text: "رفع جاهزية المؤسسة للتقييمات ونماذج التميز المؤسسي، وإعداد الأدلة وملفات الممارسة دون ادعاء اعتماد غير قائم." },
];

export default function ExcellenceSection() {
  return (
    <section id="excellence" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:"linear-gradient(to right,hsl(var(--primary)) 1px,transparent 1px),linear-gradient(to bottom,hsl(var(--primary)) 1px,transparent 1px)",backgroundSize:"42px 42px"}} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="overflow-hidden rounded-[2.2rem] border border-primary/15 bg-card/70 shadow-2xl shadow-primary/10 backdrop-blur-xl">
          <div className="relative min-h-[420px] overflow-hidden">
            <img src="https://cdn.prod.website-files.com/6703a924c397120bfe2f2515/680679ebd6c5f59f92dc591f_AD_4nXf5Jr4yYPedJtYwlxwOI_NydcTUw_aX0g-4fmx5x-6uKd4ulQW6HMCvG8cF-axNozeC0W_HbCR9Bb6TZT6ihGIlyeUdb8o3nJrmbeT5CypAVZwTE3C3WFuO2kgtsEY6x1-bT_1G.jpeg" alt="لوحة مؤشرات مؤسسية في بيئة عمل حديثة بدون أشخاص" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/95 via-slate-950/75 to-violet-950/35" />
            <div className="relative z-10 flex min-h-[420px] max-w-4xl flex-col justify-center p-8 text-white md:p-12 lg:p-16">
              <Badge variant="outline" className="mb-5 w-fit border-white/25 bg-white/10 text-violet-100">التميز المؤسسي</Badge>
              <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl lg:text-6xl">التميز ليس جائزة.<br/><span className="text-violet-200">إنه نظام عمل يتطور باستمرار.</span></h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">نساعد المؤسسات على الانتقال من المبادرات المتفرقة إلى منظومة متكاملة تربط الاستراتيجية بالعمليات والنتائج والتحسين المستمر.</p>
            </div>
          </div>

          <div className="grid gap-px bg-primary/10 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((item) => (
              <article key={item.title} className="group bg-background/95 p-7 transition-colors hover:bg-primary/[0.045] lg:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110"><item.icon className="h-6 w-6"/></div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 to-card p-8 lg:p-10">
            <div className="mb-5 flex items-center gap-3 text-primary"><Sparkles className="h-6 w-6"/><span className="font-bold">من التشخيص إلى الاستدامة</span></div>
            <h3 className="text-2xl font-black text-foreground md:text-3xl">نبني القدرة الداخلية، لا ملفاً أنيقاً للتقييم.</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">المسار يبدأ بالتقييم، ثم تحديد الأولويات وخارطة الطريق، وتطوير النموذج التشغيلي، وتنفيذ فرص التحسين، ثم قياس النتائج ومراجعتها دورياً.</p>
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] bg-gradient-to-br from-violet-950 to-slate-950 p-8 text-white lg:p-10">
            <span className="text-sm font-semibold text-violet-200">ابدأ من واقع مؤسستك</span>
            <h3 className="mt-2 text-2xl font-black">تقييم أولي لمسار التميز المؤسسي</h3>
            <Button asChild size="lg" className="mt-6 w-fit bg-white font-bold text-violet-950 hover:bg-violet-100">
              <a href="#contact">ناقش احتياج مؤسستك <ArrowLeft className="mr-2 h-5 w-5"/></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
