"use client";

import BrandLogo from "./BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

/** The "AL·ROQI PROJECT MANAGEMENT" wordmark + logo, used in the header and footer. */
export default function BrandMark() {
  const { t } = useLanguage();

  return (
    <a className="brand" href="#top">
      <BrandLogo />
      <span>AL</span>
      <i></i>ROQI <small>{t.header.tagline}</small>
    </a>
  );
}
