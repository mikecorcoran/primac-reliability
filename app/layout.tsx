import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiEditorChat } from "@/components/AiEditorChat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primac Reliability | Passion for Precision",
  description:
    "Premium reliability engineering experiences inspired by the Sako Global aesthetic—precision, heritage, and modern engineering excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${jetbrains.variable} bg-bg-page text-text-main selection:bg-brand-gold selection:text-white`}
      >
        <Header />
        {children}
        <div id="contact">
          <Footer />
        </div>
        <AiEditorChat />
      </body>
    </html>
  );
}
