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
  title: "Prestige Dream Decor | Furniture Manufacturer in Bengaluru , Karnataka",
  description: "Prestige Dream Decor is a leading furniture manufacturer in Bengaluru, Karnataka. We offer custom-made sofas, beds, dining sets, and more. Quality craftsmanship for your dream home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
      <Navbar />
      
        {children}
        <WhatsAppButton/>
        <ContactButton/>
              <Footer />  
      </body>
    </html>
  );
}
