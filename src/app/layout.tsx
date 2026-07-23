import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "فرح التنمية | Farah Development",
  description:
    "فرح التنمية شريك مؤسسي في تطوير الأعمال والمشروعات، والاستشارات، والتقنية والذكاء الاصطناعي، وبناء الشراكات ذات الأثر.",
  keywords: [
    "فرح التنمية",
    "Farah Development",
    "FAS Development",
    "التطوير المؤسسي",
    "الاستشارات",
    "الذكاء الاصطناعي",
    "التقنية",
    "الاستثمار",
    "السعودية",
  ],
  authors: [{ name: "Farah Development" }],
  openGraph: {
    title: "فرح التنمية | Farah Development",
    description: "نحو مستقبل تنموي أكثر وضوحاً وتأثيراً واستدامة.",
    type: "website",
    locale: "ar_SA",
    siteName: "Farah Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "فرح التنمية | Farah Development",
    description: "شريكك في التطوير المؤسسي وبناء المستقبل.",
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
