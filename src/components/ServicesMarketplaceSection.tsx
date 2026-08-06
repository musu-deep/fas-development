"use client";

import { useMemo, useState, type FormEvent, type MouseEvent } from "react";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  Building2,
  CalendarCheck2,
  Check,
  ChevronLeft,
  ClipboardCheck,
  Layers3,
  MessageCircle,
  Rocket,
  ShoppingBag,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ServiceCategory = "all" | "digital" | "program" | "consulting" | "subscription";

type ServiceItem = {
  id: string;
  category: Exclude<ServiceCategory, "all">;
  icon: LucideIcon;
  title: string;
  audience: string;
  features: string[];
  priceLabel: string;
  price: string;
  priceSuffix?: string;
  action: string;
  featured?: boolean;
  badge?: string;
};

const filters: { id: ServiceCategory; label: string }[] = [
  { id: "all", label: "جميع الحلول" },
  { id: "digital", label: "منتجات رقمية" },
  { id: "program", label: "برامج ومختبرات" },
  { id: "consulting", label: "خدمات استشارية" },
  { id: "subscription", label: "اشتراكات" },
];

const services: ServiceItem[] = [
  {
    id: "diagnosis",
    category: "consulting",
    icon: ClipboardCheck,
    title: "جلسة تشخيص وتحديد المسار",
    audience: "للجهات وأصحاب المشاريع قبل اختيار الخدمة أو البرنامج.",
    features: ["فهم المرحلة الحالية", "تحديد الأولوية", "توصية بالخطوة التالية"],
    priceLabel: "جلسة تعريفية أولية",
    price: "مجاناً",
    action: "حجز الجلسة",
    featured: true,
    badge: "نقطة البداية",
  },
  {
    id: "first-100-days",
    category: "digital",
    icon: CalendarCheck2,
    title: "خطة أول 100 يوم",
    audience: "للمشاريع والمبادرات التي تحتاج انطلاقة منظمة وقابلة للمتابعة.",
    features: ["خطة تنفيذ أسبوعية", "أولويات ومسؤوليات", "مؤشرات متابعة"],
    priceLabel: "سعر المنتج الرقمي",
    price: "690",
    priceSuffix: "ر.س",
    action: "شراء المنتج",
  },
  {
    id: "idea-to-execution",
    category: "digital",
    icon: Rocket,
    title: "من الفكرة إلى التنفيذ",
    audience: "لأصحاب الأفكار الراغبين في تحويلها إلى مشروع واضح وقابل للتجربة.",
    features: ["تعريف القيمة", "نموذج العمل", "خارطة الانتقال للتنفيذ"],
    priceLabel: "سعر المنتج الرقمي",
    price: "990",
    priceSuffix: "ر.س",
    action: "شراء المنتج",
  },
  {
    id: "entity-building-lab",
    category: "program",
    icon: Building2,
    title: "مختبر بناء الكيان المؤسسي",
    audience: "للكيانات الجديدة أو الجهات التي تحتاج إعادة تأسيس وتشغيل.",
    features: ["الحوكمة والهيكل", "التشغيل والسياسات", "خارطة التأسيس"],
    priceLabel: "بحسب النطاق والمخرجات",
    price: "25–60",
    priceSuffix: "ألف ر.س",
    action: "طلب عرض فني ومالي",
  },
  {
    id: "ai-transformation",
    category: "program",
    icon: Bot,
    title: "التحول المؤسسي بالذكاء الاصطناعي",
    audience: "للجهات الراغبة في رفع الكفاءة وأتمتة العمليات وتحسين القرار.",
    features: ["تشخيص الجاهزية", "حالات الاستخدام", "خارطة التنفيذ والحوكمة"],
    priceLabel: "عرض مخصص للجهة",
    price: "حسب النطاق",
    action: "طلب تشخيص التحول",
    featured: true,
    badge: "الأكثر طلباً",
  },
  {
    id: "investment-opportunity",
    category: "consulting",
    icon: BarChart3,
    title: "تطوير الفرصة الاستثمارية",
    audience: "لملاك الفرص والمشاريع الباحثة عن جدوى أو تمويل أو شراكة.",
    features: ["تحليل السوق", "النموذج المالي", "ملف العرض الاستثماري"],
    priceLabel: "بحسب المرحلة وعمق الدراسة",
    price: "حسب النطاق",
    action: "طلب عرض تطوير",
  },
  {
    id: "growth-support",
    category: "subscription",
    icon: Layers3,
    title: "الدعم التطويري المستمر",
    audience: "للجهات التي تحتاج دعماً استشارياً ومتابعة دون توظيف دائم.",
    features: ["جلسات دورية", "مراجعة الوثائق والقرارات", "تقارير متابعة"],
    priceLabel: "باقة شهرية مرنة",
    price: "اشتراك شهري",
    action: "طلب الاشتراك",
  },
];

const whatsappNumber = "966561637935";

export default function ServicesMarketplaceSection() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const visibleServices = useMemo(
    () =>
      activeFilter === "all"
        ? services
        : services.filter((service) => service.category === activeFilter),
    [activeFilter],
  );

  const selectedServices = useMemo(
    () => services.filter((service) => selectedIds.includes(service.id)),
    [selectedIds],
  );

  const toggleService = (serviceId: string) => {
    setSelectedIds((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );
  };

  const openServiceRequest = (serviceId: string) => {
    setSelectedIds((current) =>
      current.includes(serviceId) ? current : [...current, serviceId],
    );
    setIsCheckoutOpen(true);
  };

  const openDiagnosis = () => openServiceRequest("diagnosis");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const serviceLines = selectedServices
      .map(
        (service, index) =>
          `${index + 1}. ${service.title} — ${service.price}${
            service.priceSuffix ? ` ${service.priceSuffix}` : ""
          }`,
      )
      .join("\n");

    const message = [
      "طلب خدمة جديد عبر موقع فرح التنمية",
      "",
      `الاسم: ${formData.get("name")}`,
      `الجهة / المشروع: ${formData.get("organization") || "غير محدد"}`,
      `رقم الجوال: ${formData.get("phone")}`,
      `البريد الإلكتروني: ${formData.get("email")}`,
      `طريقة المتابعة: ${formData.get("requestType")}`,
      "",
      "الخدمات المختارة:",
      serviceLines,
      "",
      `ملاحظات: ${formData.get("notes") || "لا توجد"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="packages" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/25 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[150px]" />
      <div className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-700/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/5 text-primary"
          >
            الخدمات والباقات
          </Badge>
          <h2 className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">اختر مسار </span>
            <span className="text-gradient">تطويرك</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            ابدأ بجلسة تشخيص، ثم اختر منتجاً رقمياً جاهزاً، أو برنامجاً تنفيذياً،
            أو خدمة تطوير مصممة بحسب احتياج الجهة والمشروع.
          </p>
        </div>

        <div className="glass-panel mb-7 flex flex-col gap-4 rounded-2xl p-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" role="tablist" aria-label="تصفية الخدمات">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  activeFilter === filter.id
                    ? "gradient-brand text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl border border-primary/10 bg-primary/5 px-4 py-2 text-sm text-muted-foreground">
            <ShoppingBag className="h-4 w-4 text-primary" />
            الخدمات المختارة
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-primary px-2 font-black text-primary-foreground">
              {selectedIds.length}
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedIds.includes(service.id);

            return (
              <article
                key={service.id}
                className={`card-hover relative flex min-h-[520px] flex-col overflow-hidden rounded-[1.75rem] border p-6 md:p-7 ${
                  isSelected
                    ? "border-primary/70 bg-primary/10 shadow-2xl shadow-primary/15"
                    : service.featured
                      ? "border-primary/45 bg-card/80 shadow-xl shadow-primary/10"
                      : "border-primary/15 bg-card/65"
                } backdrop-blur-xl`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

                {service.badge ? (
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1.5 text-[10px] font-black text-white shadow-lg shadow-primary/20">
                    {service.badge}
                  </span>
                ) : null}

                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-inner shadow-white/5">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-black leading-8 text-foreground">
                  {service.title}
                </h3>
                <p className="mb-5 min-h-[72px] text-sm leading-7 text-muted-foreground">
                  <span className="font-bold text-primary">الأنسب لـ: </span>
                  {service.audience}
                </p>

                <ul className="mb-6 space-y-3 text-sm text-foreground/80">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto rounded-2xl border border-primary/10 bg-secondary/55 p-5 text-center">
                  <p className="mb-2 text-xs text-muted-foreground">{service.priceLabel}</p>
                  <div className="text-2xl font-black text-primary md:text-3xl">
                    {service.price}
                    {service.priceSuffix ? (
                      <span className="mr-2 text-sm font-bold text-muted-foreground">
                        {service.priceSuffix}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[1fr_auto] gap-2.5">
                  <Button
                    type="button"
                    onClick={() => openServiceRequest(service.id)}
                    className="gradient-brand h-12 font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90"
                  >
                    {service.action}
                    <ChevronLeft className="mr-2 h-4 w-4" />
                  </Button>
                  <button
                    type="button"
                    aria-label={isSelected ? "إزالة الخدمة من الطلب" : "إضافة الخدمة إلى الطلب"}
                    aria-pressed={isSelected}
                    onClick={() => toggleService(service.id)}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/20 bg-card/70 text-primary hover:bg-primary/10"
                    }`}
                  >
                    {isSelected ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="glass-panel mt-7 grid gap-5 rounded-[1.75rem] p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
            <Sparkles className="h-7 w-7" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-black text-foreground">لست متأكداً من الخدمة المناسبة؟</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              ابدأ بجلسة تشخيص قصيرة، وسنحدد معك نقطة البداية والمخرجات المناسبة قبل أي التزام مالي.
            </p>
          </div>
          <Button
            type="button"
            onClick={openDiagnosis}
            className="gradient-brand h-12 px-6 font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90"
          >
            احجز جلسة التشخيص
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {selectedIds.length > 0 ? (
        <div className="fixed bottom-5 left-1/2 z-40 flex w-[min(760px,calc(100%_-_24px))] -translate-x-1/2 items-center justify-between gap-4 rounded-2xl border border-primary/25 bg-background/90 p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
          <div className="hidden items-center gap-3 px-2 sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black text-foreground">
                {selectedIds.length === 1
                  ? "تم اختيار خدمة واحدة"
                  : `تم اختيار ${selectedIds.length} خدمات`}
              </p>
              <p className="text-[11px] text-muted-foreground">يمكن جمع أكثر من خدمة في طلب واحد.</p>
            </div>
          </div>
          <Button
            type="button"
            onClick={() => setIsCheckoutOpen(true)}
            className="gradient-brand h-11 w-full px-6 font-bold text-white shadow-lg shadow-primary/20 sm:w-auto"
          >
            متابعة الطلب
            <ChevronLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      ) : null}

      {isCheckoutOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="services-checkout-title"
          onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) setIsCheckoutOpen(false);
          }}
        >
          <div className="glass-panel max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border-primary/30 bg-background/95">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-primary/15 bg-background/90 p-6 backdrop-blur-xl">
              <div>
                <h3 id="services-checkout-title" className="text-2xl font-black text-foreground">
                  إكمال طلب الخدمة
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  سنحوّل الطلب إلى حجز أو شراء أو عرض فني ومالي بحسب نوع الخدمة.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-card/70 text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                aria-label="إغلاق نافذة الطلب"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6 space-y-2 rounded-2xl border border-primary/15 bg-primary/5 p-3">
                {selectedServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between gap-4 rounded-xl bg-card/75 px-4 py-3 text-sm"
                  >
                    <span className="font-bold text-foreground">{service.title}</span>
                    <span className="shrink-0 font-black text-primary">
                      {service.price} {service.priceSuffix ?? ""}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-foreground">
                  الاسم الكامل
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="h-12 rounded-xl border border-primary/15 bg-card/70 px-4 font-normal text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    placeholder="اكتب الاسم الكامل"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground">
                  الجهة / المشروع
                  <input
                    name="organization"
                    autoComplete="organization"
                    className="h-12 rounded-xl border border-primary/15 bg-card/70 px-4 font-normal text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    placeholder="اسم الجهة أو المشروع"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground">
                  رقم الجوال
                  <input
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    dir="ltr"
                    className="h-12 rounded-xl border border-primary/15 bg-card/70 px-4 text-left font-normal text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    placeholder="+966 5X XXX XXXX"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground">
                  البريد الإلكتروني
                  <input
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    dir="ltr"
                    className="h-12 rounded-xl border border-primary/15 bg-card/70 px-4 text-left font-normal text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    placeholder="name@example.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground md:col-span-2">
                  طريقة المتابعة
                  <select
                    name="requestType"
                    className="h-12 rounded-xl border border-primary/15 bg-card/70 px-4 font-normal text-foreground outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    defaultValue="التواصل لتأكيد الطلب"
                  >
                    <option>التواصل لتأكيد الطلب</option>
                    <option>حجز جلسة تشخيص</option>
                    <option>شراء منتج رقمي</option>
                    <option>إرسال عرض فني ومالي</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground md:col-span-2">
                  وصف مختصر للاحتياج
                  <textarea
                    name="notes"
                    rows={4}
                    className="rounded-xl border border-primary/15 bg-card/70 p-4 font-normal leading-7 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    placeholder="اكتب المرحلة الحالية والهدف وأي معلومات تساعدنا على فهم الطلب."
                  />
                </label>

                <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-xs leading-6 text-muted-foreground md:col-span-2">
                  سيتم تجهيز الطلب وإرساله عبر واتساب فرح التنمية. ويمكن ربط المنتجات الرقمية ببوابة دفع إلكترونية عند اعتمادها.
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="gradient-brand h-12 font-bold text-white shadow-lg shadow-primary/20 md:col-span-2"
                >
                  إرسال الطلب والمتابعة
                  <MessageCircle className="mr-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
