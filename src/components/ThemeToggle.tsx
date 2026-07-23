"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "fasdev-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );
  themeColor?.setAttribute(
    "content",
    theme === "light" ? "#f7f5ee" : "#0b0a18",
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const activeTheme: Theme = document.documentElement.classList.contains(
      "light",
    )
      ? "light"
      : "dark";
    setTheme(activeTheme);
    applyTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "التبديل إلى النمط الليلي" : "التبديل إلى النمط النهاري"}
      aria-pressed={isLight}
      title={isLight ? "النمط الليلي" : "النمط النهاري"}
      className="group relative flex h-11 w-[86px] shrink-0 items-center justify-between rounded-full border border-primary/20 bg-card/75 p-1 shadow-lg shadow-black/5 backdrop-blur-xl transition hover:border-primary/45"
    >
      <span
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
          isLight
            ? "gradient-brand text-white shadow-md shadow-primary/20"
            : "text-muted-foreground group-hover:text-primary"
        }`}
      >
        <Sun className="h-[18px] w-[18px]" />
      </span>

      <span
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
          !isLight
            ? "gradient-brand text-white shadow-md shadow-primary/20"
            : "text-muted-foreground group-hover:text-primary"
        }`}
      >
        <Moon className="h-[18px] w-[18px]" />
      </span>
    </button>
  );
}
