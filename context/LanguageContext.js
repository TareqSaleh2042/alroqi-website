"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, LANGS } from "@/lib/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "al-roqi-lang";

/**
 * Wraps the app, exposing the active language, the matching translation
 * object, and a toggle to switch between them. Always starts as "en" on
 * the server (and on first client render) so SSR output and the initial
 * client render match exactly — the real preference (from localStorage)
 * is applied a moment after mount, then persisted on every change.
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  // Pick up a previously-saved language once we're on the client.
  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored && LANGS.includes(stored)) {
      setLangState(stored);
    }
  }, []);

  // Keep <html lang/dir> and localStorage in sync with the active language.
  useEffect(() => {
    const current = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = current.dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be unavailable (private browsing, etc.) — safe to ignore.
    }
  }, [lang]);

  function setLang(next) {
    if (LANGS.includes(next)) setLangState(next);
  }

  function toggleLang() {
    setLangState((current) => (current === "en" ? "ar" : "en"));
  }

  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
    dir: translations[lang].dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
