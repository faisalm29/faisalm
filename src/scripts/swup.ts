import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupA11yPlugin from "@swup/a11y-plugin";

export type Theme = "light" | "dark" | "system";

export class ThemeManager {
  private readonly systemQuery: MediaQueryList;
  private readonly storageKey: string = "app-theme";

  constructor() {
    this.systemQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.init();
  }

  public get currentTheme(): Theme {
    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    return saved ?? "system";
  }

  private init(): void {
    this.apply();
    this.systemQuery.addEventListener("change", () => {
      if (this.currentTheme === "system") {
        this.apply();
      }
    });

    window.addEventListener("storage", (event) => {
      if (event.key === this.storageKey) this.apply();
    });
  }

  public setTheme(newTheme: Theme): void {
    localStorage.setItem(this.storageKey, newTheme);
    this.apply();
  }

  private apply(): void {
    const theme = this.currentTheme;
    let shouldBeDark = false;

    if (theme === "system") {
      shouldBeDark = this.systemQuery.matches;
    } else {
      shouldBeDark = theme === "dark";
    }

    document.documentElement.classList.toggle("dark", shouldBeDark);
  }
}

declare global {
  interface Window {
    themeManager: ThemeManager;
  }
}

const init = () => {
  new ThemeManager();
};

document.addEventListener("DOMContentLoaded", () => init());

const swup = new Swup({
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupScrollPlugin()],
});

const setup = () => {
  swup.hooks.on("page:view", () => {});
  swup.hooks.on("content:replace", () => {
    window.scrollY = 0;
  });
};
if (swup) {
  setup();
} else {
  document.addEventListener("swup:enable", setup);
}
