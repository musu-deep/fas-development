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
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#111127] to-violet-950">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative z-10 grid min-h-[470px] lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-16">
                <Badge variant="outline" className="mb-5 w-fit border-white/25 bg-white/10 text-violet-100">الجودة والتميز المؤسسي</Badge>
                <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl lg:text-6xl">
                  الجودة والتميز المؤسسي
                  <br/>
                  <span className="text-violet-200">منظومة عمل وثقافة أداء</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">نساعد المؤسسات على الانتقال من المبادرات المتفرقة إلى منظومة متكاملة تربط الاستراتيجية بالعمليات والنتائج والتحسين المستمر.</p>
              </div>

              <div className="relative flex min-h-[390px] items-center justify-center p-6 md:p-10 lg:min-h-[470px]">
                <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[80px]" />
                <div className="relative w-full max-w-[470px] rounded-[2rem] border border-white/15 bg-white p-4 shadow-2xl shadow-black/35 md:p-6">
                  <img
                    src="https://pbs.twimg.com/media/EgVUMDqWkAAec0O.jpg"
                    alt="نموذج التميز المؤسسي: التوجه والتنفيذ والنتائج ومعاييرها"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
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

        <div className="mt-8 rounded-[2rem] border border-primary/15 bg-card/70 p-7 shadow-xl shadow-primary/5 backdrop-blur-xl lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div className="rounded-[1.7rem] bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 p-7 text-white">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-violet-200">مرجع عالمي للتميز المؤسسي</span>
                  <h3 className="mt-2 text-2xl font-black">نموذج EFQM 2025</h3>
                </div>
                <img src="https://efqm.org/wp-content/uploads/2024/05/GRAPHICS.png" alt="الرسم الرسمي لنموذج EFQM" className="h-24 w-24 object-contain opacity-90" />
              </div>
              <p className="text-sm leading-7 text-white/70">يقوم منطق النموذج على ثلاثة أسئلة مترابطة: لماذا توجد المؤسسة؟ كيف تنفذ غايتها واستراتيجيتها؟ وما النتائج التي حققتها وتستهدفها؟</p>
              <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                {[
                  ["https://efqm.org/wp-content/uploads/2025/03/direction-icon.png","التوجه","لماذا؟"],
                  ["https://efqm.org/wp-content/uploads/2025/03/execution-icon.png","التنفيذ","كيف؟"],
                  ["https://efqm.org/wp-content/uploads/2025/03/result-icon.png","النتائج","ماذا؟"],
                ].map(([src,title,q]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                    <img src={src} alt={title} className="mx-auto h-16 w-16 object-contain" />
                    <b className="mt-2 block text-sm">{title}</b>
                    <small className="text-white/50">{q}</small>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">المعايير السبعة</Badge>
              <h3 className="text-2xl font-black text-foreground md:text-3xl">قراءة المؤسسة كمنظومة واحدة</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">نستخدم بنية النموذج كمرجع لفهم العلاقة بين التوجه والتنفيذ والنتائج، ثم نحول فجوات الأداء إلى أولويات تطوير قابلة للقياس.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["01","الغاية والرؤية والاستراتيجية"],
                  ["02","الثقافة المؤسسية والقيادة"],
                  ["03","إشراك أصحاب المصلحة"],
                  ["04","بناء قيمة مستدامة"],
                  ["05","قيادة الأداء والتحول"],
                  ["06","انطباعات أصحاب المصلحة"],
                  ["07","الأداء الاستراتيجي والتشغيلي"],
                ].map(([n,title]) => (
                  <div key={n} className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-background/70 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-black text-primary">{n}</span>
                    <span className="text-sm font-bold text-foreground">{title}</span>
                  </div>
                ))}
              </div>
            </div>
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
