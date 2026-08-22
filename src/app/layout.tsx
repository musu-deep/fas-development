import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "فرح التنمية | تطوير المشاريع والاستثمار والشراكات",
  description:
    "فرح التنمية منصة لتطوير المشاريع التنموية والفرص الاستثمارية والشراكات، من دراسة الفكرة وتصميم النموذج إلى التأسيس والتشغيل والنمو.",
  keywords: [
    "فرح التنمية",
    "Farah Development",
    "FAS Development",
    "المشاريع التنموية",
    "الفرص الاستثمارية",
    "تطوير المشاريع",
    "الشراكات الاستراتيجية",
    "دراسات الجدوى",
    "نماذج الأعمال",
    "تأسيس المشاريع",
    "إدارة المشاريع",
    "السعودية",
  ],
  authors: [{ name: "Farah Development" }],
  icons: {
    icon: [{ url: "/icon.svg?v=20260823-2", type: "image/svg+xml" }],
    shortcut: "/icon.svg?v=20260823-2",
  },
  openGraph: {
    title: "فرح التنمية | تطوير المشاريع والاستثمار والشراكات",
    description: "نطوّر الفرص ونبني المشاريع والشراكات من الفكرة إلى التنفيذ والنمو.",
    type: "website",
    locale: "ar_SA",
    siteName: "Farah Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "فرح التنمية | تطوير المشاريع والاستثمار والشراكات",
    description: "منصة لتطوير المشاريع التنموية والفرص الاستثمارية وبناء الشراكات.",
  },
};

const themeInitializationScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("fasdev-theme");
      var theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : "dark";
      var root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.classList.add("dark");
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <meta name="theme-color" content="#0b0a18" />
        <link rel="icon" href="/icon.svg?v=20260823-2" type="image/svg+xml" sizes="any" />
        <link rel="shortcut icon" href="/icon.svg?v=20260823-2" />
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
