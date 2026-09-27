import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata = {
  title: "Al-Roqi | Project Management",
  description:
    "Al-Roqi is the one accountable partner for your entire villa-building journey — from first brief to handover.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={plexArabic.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
