import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import "./globals.css";
import WhatsAppButton from "./components/Whatsappbtn";
import ContactButton from "./components/Contct";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prestige Dream Decor | Custom Furniture Manufacturer in Bengaluru",
  description: "Custom-made sofas, beds, and interior decor solutions in Bengaluru. Trusted by 1000+ clients. Visit us for luxury & affordable home furniture.",
  keywords: [
    "Prestige Dream Decor",
    "furniture manufacturer in Bengaluru",
    "custom sofas",
    "interior decor Karnataka",
    "handmade furniture Bengaluru",
    "luxury furniture",
    "home decor", 
    "sofa cum bed",
    "sofa sets"
    
  ],
  authors: [{ name: "Prestige Dream Decor", url: "https://www.prestigedreamdecor.in" }],
  creator: "Prestige Dream Decor",
  themeColor: "#ffffff",
  metadataBase: new URL("https://www.prestigedreamdecor.in"),
  openGraph: {
    title: "Prestige Dream Decor | Custom Furniture for Your Dream Home",
    description: "We manufacture premium-quality furniture in Bengaluru — sofas, beds, dining sets & more.",
    url: "https://www.prestigedreamdecor.in",
    siteName: "Prestige Dream Decor",
    images: [
      {
        url: "https://www.prestigedreamdecor.in/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Prestige Dream Decor - Custom Furniture"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <WhatsAppButton />
    <ContactButton />
    <footer>
      <Footer />
    </footer>
      </body>
    </html>
  );
}
