"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/Theme";
import { LanguageProvider } from "@/context/LanguageContext";
import PersistentDrawerRight from '@/components/SideBar'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <ThemeProvider>
    <LanguageProvider>
     {/* <PersistentDrawerRight/> */}

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {/* <NavBar/> */}
                 <PersistentDrawerRight/>
        {children}
      </body>
      
      </LanguageProvider>
      </ThemeProvider>
    
      
    </html>
  );
}
