import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Pinyon_Script, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const pinyon = Pinyon_Script({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-pinyon" 
});
const instrument = Instrument_Serif({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-instrument" 
});

export const metadata: Metadata = {
  title: "Duebit | Compliance OS for India",
  description: "Automate your corporate compliance with Duebit. The leading compliance operating system designed for Indian businesses.",
  authors: [{ name: "DuebitHQ" }],
  openGraph: {
    title: "Duebit - The Operating System For Compliance driven firms.",
    description: "The operating system for compliance-led firms. Automate document collection, follow-ups, and client communication workflows.",
    url: "https://tryduebit.vercel.app",
    siteName: "Duebit",
    images: [
      {
        url: "https://res.cloudinary.com/duca0kpzd/image/upload/logo_duebit.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duebit - The Operating System For Compliance driven firms.",
    description: "The operating system for compliance-led firms. Automate document collection, follow-ups, and client communication workflows.",
    creator: "@btwitsPratyush",
    images: ["https://res.cloudinary.com/duca0kpzd/image/upload/logo_duebit.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${pinyon.variable} ${instrument.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
