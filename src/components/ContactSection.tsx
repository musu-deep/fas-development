"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "fasdevgroup@gmail.com",
    secondaryValue: "info@Fasdev.org",
    href: "mailto:fasdevgroup@gmail.com",
  },
  {
    icon: Phone,
    title: "رقم الهاتف",
    value: "+44 501 501 643",
    secondaryValue: null,
    href: "tel:+44501501643",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "182-184 High Street North",
    secondaryValue: "East Ham, London, E6 2JA",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "الأحد - الخميس",
    secondaryValue: "9:00 ص - 6:00 م",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);

    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-card to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-4"
          >
            تواصل معنا
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">نسعد </span>
            <span className="text-gradient">بتواصلكم</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فريقنا جاهز للإجابة على استفساراتكم ومناقشة فرص التعاون والشراكة
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href || undefined}
                  className={`group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground" dir="ltr">
                      {item.value}
                    </p>
                    {item.secondaryValue && (
                      <p className="text-sm text-muted-foreground/80" dir="ltr">
                        {item.secondaryValue}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Social links placeholder */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                تابعونا
              </h4>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 rounded-lg bg-muted/50 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border glow"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                أرسل رسالتك
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    الاسم الكامل
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="أدخل اسمك"
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@email.com"
                    className="bg-muted/50 border-border focus:border-primary"
                    dir="ltr"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    رقم الهاتف
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+966 5XX XXX XXXX"
                    className="bg-muted/50 border-border focus:border-primary"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    الموضوع
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="موضوع الرسالة"
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    الرسالة
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="اكتب رسالتك هنا..."
                    className="bg-muted/50 border-border focus:border-primary min-h-[150px] resize-none"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-6 gradient-gold text-black font-semibold hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    جاري الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    إرسال الرسالة
                    <Send className="w-5 h-5" />
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
