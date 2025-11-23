import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecomind",
  description: "Welcometo the Green Era of EcoMind",
  icons: {
    icon: { url: "/faveicon.icon" },
  },
};

const interDisplay = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interDisplay.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
