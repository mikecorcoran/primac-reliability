import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BuilderRegistry } from "@/components/BuilderRegistry";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getNavItems } from "@/lib/navigation";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = await getNavItems();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${jetbrains.variable} bg-bg-page text-text-main selection:bg-brand-accent selection:text-white`}
      >
        <BuilderRegistry />
        <Header navItems={navItems} />
        {children}
        <div id="contact">
          <Footer />
        </div>
      </body>
    </html>
  );
}
