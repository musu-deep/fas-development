"use client";

import { useState } from "react";
import { Clock, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@fasdev.org",
    secondaryValue: "fasdevgroup@gmail.com",
    href: "mailto:info@fasdev.org",
  },
  {
    icon: Phone,
    title: "رقم الهاتف",
    value: "00966561637935",
    secondaryValue: null,
    href: "tel:00966561637935",
  },
  {
    icon: Globe,
    title: "الموقع الإلكتروني",
    value: "fasdev.org",
    secondaryValue: "#fasdevgroup",
    href: "https://fasdev.org",
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "الرياض - المملكة العربية السعودية",
    secondaryValue: null,
    href: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
    alert("تم استلام رسالتك بنجاح، وسيتواصل معك فريق فرح التنمية قريباً.");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-card/80 to-transparent" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
            تواصل معنا
          </Badge>
          <h2 className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
            <span className="text-foreground">لنبدأ </span>
            <span className="text-gradient">من احتياجك الحقيقي</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            شاركنا فكرتك أو التحدي الذي تعمل عليه، وسنساعدك في تحديد المسار الأنسب
            للتطوير والتشغيل والشراكة.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const content = (
                  <>
                    <div className="gradient-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg shadow-primary/15 transition-transform group-hover:scale-110">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground" dir={item.icon === MapPin ? "rtl" : "ltr"}>
                        {item.value}
                      </p>
                      {item.secondaryValue && (
                        <p className="mt-1 text-sm text-muted-foreground/80" dir="ltr">
                          {item.secondaryValue}
                        </p>
                      )}
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="glass-panel card-hover group flex items-start gap-4 rounded-2xl p-4"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="glass-panel group flex items-start gap-4 rounded-2xl p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="glass-panel rounded-2xl p-6">
              <h4 className="mb-4 flex items-center gap-2 font-bold text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                ساعات التواصل
              </h4>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>الأحد - الخميس</span>
                <span dir="ltr">9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel glow rounded-3xl p-7 md:p-9">
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-foreground">أرسل رسالتك</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  نحتاج معلومات مختصرة فقط لنفهم نقطة البداية.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">الاسم الكامل</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    className="border-primary/15 bg-background/45 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="border-primary/15 bg-background/45 focus:border-primary"
                    dir="ltr"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">رقم الهاتف</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 5X XXX XXXX"
                    className="border-primary/15 bg-background/45 focus:border-primary"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">الموضوع</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="موضوع الرسالة"
                    className="border-primary/15 bg-background/45 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-foreground">الرسالة</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب نبذة عن احتياجك أو مشروعك..."
                    className="min-h-[150px] resize-none border-primary/15 bg-background/45 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="gradient-brand mt-6 w-full font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    جاري الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    إرسال الرسالة
                    <Send className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
