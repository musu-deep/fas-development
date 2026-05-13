import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فاس التنموية | FAS Development - شريكك الاستراتيجي في بناء المستقبل",
  description:
    "مجموعة فاس التنموية - رواد في المقاولات والتطوير العقاري، التجارة العامة، التكنولوجيا، الرعاية الصحية، السياحة، النقل، والاستثمار الرياضي. رؤية 2026",
  keywords: [
    "فاس التنموية",
    "FAS Development",
    "مقاولات",
    "تطوير عقاري",
    "استثمار",
    "تكنولوجيا",
    "لندن",
  ],
  authors: [{ name: "FAS Development Group" }],
  openGraph: {
    title: "فاس التنموية | FAS Development",
    description: "شريكك الاستراتيجي في بناء المستقبل ودعم الاقتصاد الوطني",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
