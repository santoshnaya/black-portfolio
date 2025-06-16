import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jithin Kumar - Digital Consultant & Designer",
  description: "A passionate digital designer with over 8 years of experience crafting beautiful and functional digital experiences. Specializing in UI/UX design, web design, and brand identity.",
  keywords: "UI/UX Designer, Web Designer, Digital Consultant, Brand Identity, Jithin Kumar, Portfolio",
  authors: [{ name: "Jithin Kumar" }],
  creator: "Jithin Kumar",
  openGraph: {
    title: "Jithin Kumar - Digital Consultant & Designer",
    description: "A passionate digital designer with over 8 years of experience crafting beautiful and functional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jithin Kumar - Digital Consultant & Designer",
    description: "A passionate digital designer with over 8 years of experience crafting beautiful and functional digital experiences.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
